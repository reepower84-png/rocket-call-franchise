import { NextRequest, NextResponse } from 'next/server'

// Discord 웹훅으로 알림 전송 (타임아웃 및 재시도 포함)
async function sendDiscordNotification(name: string, phone: string, message: string | null) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn('Discord webhook URL is not configured')
    return
  }

  const embed = {
    title: '🚀 새로운 상담 신청이 접수되었습니다!',
    color: 0xFF6B00, // 오렌지 색상
    fields: [
      {
        name: '👤 이름',
        value: name,
        inline: true,
      },
      {
        name: '📞 전화번호',
        value: phone,
        inline: true,
      },
      {
        name: '💬 문의내용',
        value: message || '(작성된 내용 없음)',
        inline: false,
      },
    ],
    footer: {
      text: '로켓콜-프랜차이즈',
    },
    timestamp: new Date().toISOString(),
  }

  const maxRetries = 3

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10초 타임아웃

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        console.log('Discord notification sent successfully')
        return
      } else {
        console.error('Discord webhook error:', response.status, await response.text())
      }
    } catch (error) {
      clearTimeout(timeoutId)
      console.error(`Discord notification attempt ${attempt} failed:`, error)

      if (attempt < maxRetries) {
        // 재시도 전 잠시 대기 (1초, 2초, 3초...)
        await new Promise(resolve => setTimeout(resolve, attempt * 1000))
      }
    }
  }

  console.error('Discord notification failed after all retries')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, message } = body

    // 유효성 검사
    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 전화번호는 필수입니다.' },
        { status: 400 }
      )
    }

    // Discord로 알림 직접 전송
    await sendDiscordNotification(name, phone, message)

    return NextResponse.json(
      { success: true, message: '상담 신청이 완료되었습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Submit error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}


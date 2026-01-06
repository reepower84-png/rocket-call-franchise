import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Discord 웹훅으로 알림 전송
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

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      console.error('Discord webhook error:', response.status, await response.text())
    }
  } catch (error) {
    console.error('Discord notification error:', error)
  }
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

    // Supabase에 데이터 저장
    const { data, error } = await supabase
      .from('submissions')
      .insert([
        {
          name,
          phone,
          message: message || null,
          status: 'new',
        }
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: '데이터 저장에 실패했습니다.' },
        { status: 500 }
      )
    }

    // Discord로 알림 전송 (비동기로 처리, 실패해도 응답에 영향 없음)
    sendDiscordNotification(name, phone, message).catch(console.error)

    return NextResponse.json(
      { success: true, message: '상담 신청이 완료되었습니다.', data },
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

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase fetch error:', error)
      return NextResponse.json(
        { error: '데이터를 불러오는데 실패했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Get submissions error:', error)
    return NextResponse.json(
      { error: '데이터를 불러오는데 실패했습니다.' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// 상태 업데이트
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { status } = body

    const { data, error } = await supabase
      .from('submissions')
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Supabase update error:', error)
      return NextResponse.json(
        { error: '업데이트에 실패했습니다.' },
        { status: 500 }
      )
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: '해당 데이터를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Update error:', error)
    return NextResponse.json(
      { error: '업데이트에 실패했습니다.' },
      { status: 500 }
    )
  }
}

// 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const { error } = await supabase
      .from('submissions')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Supabase delete error:', error)
      return NextResponse.json(
        { error: '삭제에 실패했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: '삭제에 실패했습니다.' },
      { status: 500 }
    )
  }
}

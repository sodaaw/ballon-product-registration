import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 간단한 유효성 검사
    if (
      !body.serialNumber ||
      !body.customerName ||
      !body.phoneNumber ||
      !body.purchaseDate ||
      !body.purchasePlace
    ) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요' },
        { status: 400 }
      );
    }

    // 실제로는 여기서 데이터베이스에 저장하지만,
    // 여기서는 시뮬레이션을 위해 성공 응답만 반환
    console.log('Registration data:', body);

    // 성공 응답
    return NextResponse.json(
      {
        success: true,
        message: '등록이 완료되었습니다',
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}



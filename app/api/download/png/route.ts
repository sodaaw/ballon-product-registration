import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // app/leather.png 파일 읽기
    const filePath = join(process.cwd(), 'app', 'leather.png');
    const fileBuffer = await readFile(filePath);

    // PNG 파일 반환
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="leather.png"',
      },
    });
  } catch (error) {
    console.error('Error serving PNG:', error);
    return NextResponse.json(
      { error: '파일을 찾을 수 없습니다.' },
      { status: 404 }
    );
  }
}

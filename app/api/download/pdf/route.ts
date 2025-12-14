import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // app/leather.pdf 파일 읽기
    const filePath = join(process.cwd(), 'app', 'leather.pdf');
    const fileBuffer = await readFile(filePath);

    // PDF 파일 반환
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="leather.pdf"',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return NextResponse.json(
      { error: '파일을 찾을 수 없습니다.' },
      { status: 404 }
    );
  }
}

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public/photos/sharon-verma');

    if (!fs.existsSync(photosDirectory)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(photosDirectory);

    const imageFiles = files
      .filter(file =>
        /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.startsWith('.')
      )
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    const photos = imageFiles.map((file, index) => {
      const lowerName = file.toLowerCase();
      const isPortrait = lowerName.includes('portrait');
      const isShow = lowerName.includes('show');

      return {
        id: index + 1,
        image: `/photos/sharon-verma/${file}`,
        type: isPortrait ? 'portrait' : isShow ? 'show' : 'other',
      };
    });

    return NextResponse.json(photos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read photos' }, { status: 500 });
  }
}

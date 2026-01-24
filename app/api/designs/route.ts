import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const designsDirectory = path.join(process.cwd(), 'public/designs');
    
    // Check if directory exists
    if (!fs.existsSync(designsDirectory)) {
      return NextResponse.json([]);
    }
    
    const files = fs.readdirSync(designsDirectory);
    
    // Filter for image files only (jpg, jpeg, png, webp)
    const imageFiles = files
      .filter(file => 
        /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.startsWith('.')
      )
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    
    // Map to design objects with IDs
    const designs = imageFiles.map((file, index) => ({
      id: index + 1,
      image: `/designs/${file}`,
      title: file.replace(/\.[^/.]+$/, ''), // Remove extension for title
    }));
    
    return NextResponse.json(designs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read designs' }, { status: 500 });
  }
}

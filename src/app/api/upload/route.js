import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json(
                { error: "No file uploaded" },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create unique filename with original name
        const filename = `${Date.now()}_${file.name}`;
        
        // Ensure directory exists and write file
        const uploadDir = join(process.cwd(), 'public/gambar');
        await writeFile(join(uploadDir, filename), buffer);

        return NextResponse.json({ 
            message: "File uploaded successfully",
            filename: `/gambar/${filename}`
        });

    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json(
            { error: "Error uploading file" },
            { status: 500 }
        );
    }
}

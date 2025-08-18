import fs from 'fs';
import path from 'path';

export async function GET(req) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'singapore-tours.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const tours = JSON.parse(jsonData);

    return new Response(JSON.stringify(tours), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load tours' }), { status: 500 });
  }
}

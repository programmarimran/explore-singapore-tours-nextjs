import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'public', 'singapore-tours.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const tours = JSON.parse(jsonData);

  const tour = tours.find(
    t => t.id === parseInt(id) || t.slug === id.toString()
  );

  if (!tour) {
    return new Response(JSON.stringify({ message: 'Tour not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(tour), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

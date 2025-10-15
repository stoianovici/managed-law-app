import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: Date.now(),
    },
    { status: 200 }
  );
}

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/app/lib/db';

interface User {
  useremail: string;
}

export async function POST(request: NextRequest) {
  const { useremail }: User = await request.json();

  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection<User>('users');

  const user = await usersCollection.findOne({ useremail });
  if (!user) {
    return NextResponse.json({ error: 'Email not found' }, { status: 400 });
  }

  // We will be sending reset email here with mailgun as i hinted earlier
  
  return NextResponse.json({ message: 'Password reset email sent' }, { status: 200 });
}

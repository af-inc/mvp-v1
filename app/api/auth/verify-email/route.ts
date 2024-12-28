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

  // email verification comes before updating this though
  
  await usersCollection.updateOne({ useremail }, { $set: { verified: true } });

  return NextResponse.json({ message: 'Email verified successfully' }, { status: 200 });
}

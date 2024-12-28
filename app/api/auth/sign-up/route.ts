import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/app/lib/db';
import { hashPassword } from '@/app/lib/auth';

interface User {
  useremail: string;
  userpassword: string;
  username: string;
}

export async function POST(request: NextRequest) {
  const { useremail, userpassword, username }: User = await request.json();

  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection<User>('authentication');

  const existingUser = await usersCollection.findOne({ useremail });
  if (existingUser) {
    return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
  }

  const hashedPassword = await hashPassword(userpassword);

  const result = await usersCollection.insertOne({
    useremail,
    userpassword: hashedPassword,
    username,
  });

  return NextResponse.json({ message: 'User created successfully', userId: result.insertedId }, { status: 201 });
}

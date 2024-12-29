// import { NextRequest, NextResponse } from 'next/server';
// import clientPromise from '@/app/lib/db';
// import { hashPassword } from '@/app/lib/auth';

// interface User {
//   useremail: string;
//   userpassword: string;
// }

// export async function POST(request: NextRequest) {
//   const { useremail, userpassword }: User = await request.json();

//   const client = await clientPromise;
//   const db = client.db();
//   const usersCollection = db.collection<User>('users');

//   const user = await usersCollection.findOne({ useremail });
//   if (!user) {
//     return NextResponse.json({ error: 'Email not found' }, { status: 400 });
//   }

//   const hashedPassword = await hashPassword(userpassword);

//   await usersCollection.updateOne({ useremail }, { $set: { userpassword: hashedPassword } });

//   return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
// }

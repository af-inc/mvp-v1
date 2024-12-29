// import { NextRequest, NextResponse } from 'next/server';
// import clientPromise from '@/app/lib/db';
// import { comparePasswords, generateJWT } from '@/app/lib/auth';

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
//     return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
//   }

//   const isPasswordValid = await comparePasswords(userpassword, user.userpassword);
//   if (!isPasswordValid) {
//     return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
//   }

//   const token = generateJWT(user._id.toString());

//   return NextResponse.json({ message: 'Signin successful', token });
// }

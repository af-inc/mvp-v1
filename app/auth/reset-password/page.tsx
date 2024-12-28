import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import Signin from '../sign-in/page';

const ResetPassword = () => {
 
  
  return (
    <div className="h-[100vh] w-full">
       <div className="fixed inset-0 hidden lg:flex rounded-l-[35px]">
        <div className="absolute rounded-l-[35px] inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`
          }} />
        </div>
      </div>

      <div className="relative lg:hidden">
        <div className="h-16 rounded-b-[30px] bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="absolute inset-0 flex items-center p-6" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`
          }} >
            <span className="text-white text-xl font-extrabold">aidefunding.</span>
          </div>
        </div>
      </div>

      <main className="relative flex min-h-screen w-full flex-col lg:grid lg:grid-cols-2">
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="w-full max-w-sm h-screen">

            <div className="space-y-2">
              <h1 className="text-3xl pt-14 font-extrabold tracking-tight">Reset password</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to get verification code
              </p>
            </div>

            <div className="py-1">
              <div className="space-y-4 mt-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder='your-email@provider.com' required/>
                </div>
              </div>


              <Button className="w-full mt-4 bg-indigo-500 hover:bg-gray-800">
                Verify 
              </Button>

              <div className="text-center text-sm p-3">
                <Link href="/auth/sign-in" className="font-medium text-neutral-500 underline">
                 Go to signin
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex relative items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold text-white">aidefunding.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ResetPassword
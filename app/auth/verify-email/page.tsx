"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ResetPassword = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]); 

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; 
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length < 6 || otpString.includes(" ")) {
      toast.error("OTP is incomplete");
      return
    }else{
      alert(otpString);
    }
  };

  const renderOtpSlots = () => {
    return otp.map((value, index) => (
      <input
        key={index}
        value={value}
        onChange={(e) => handleOtpChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        ref={(el) => {
          inputsRef.current[index] = el;
        }} 
        maxLength={1}
        type="text"
        inputMode="numeric" 
        pattern="[0-9]*" 
        className="w-12 h-12 text-center border border-gray-300 rounded-md"
      />
    ));
  };

  return (
    <div className="h-full m-0 overflow-hidden w-full">
      <div className="fixed inset-0 hidden lg:flex rounded-l-[35px]">
        <div className="absolute rounded-l-[35px] inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`,
            }}
          />
        </div>
      </div>

      <div className="relative lg:hidden">
        <div className="h-16 rounded-b-[30px] bg-gradient-to-r from-purple-600 to-blue-600">
          <div
            className="absolute inset-0 flex items-center p-6"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`,
            }}
          >
            <span className="text-white text-xl font-extrabold">aidefunding.</span>
          </div>
        </div>
      </div>

      <main className="relative flex min-h-screen w-full flex-col lg:grid lg:grid-cols-2">
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="w-full max-w-sm h-screen">
            <div className="space-y-2">
              <h1 className="text-3xl pt-14 font-extrabold tracking-tight">Verify email</h1>
              <p className="text-sm text-muted-foreground">
                Confirm your email with the OTP sent to your email
              </p>
            </div>

            <div className="py-1">
              <div className="space-y-4 mt-5">
                <div className="space-y-2 w-full flex flex-col">
                  <Label className="justify-start">Enter OTP here</Label>
                  <div className="flex space-x-2">{renderOtpSlots()}</div>
                </div>
              </div>

              <Button className="w-full mt-8 bg-indigo-500 hover:bg-gray-800" onClick={handleSubmit}>
                Authorise
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
  );
};

export default ResetPassword;

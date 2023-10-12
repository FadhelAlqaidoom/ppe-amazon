import React from 'react';
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded shadow-lg max-w-md w-full">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 w-20 h-20 relative">
            <Image
              src="/aws.png"
              alt="App Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-xl font-bold">AWS PPE TRACKER</h1>
        </div>
        <p className="text-center mb-6">
          Welcome to AWS Bahrain PPE Tracker Portal, where you can
          request personal protective equipment and Arc flash suits.
        </p>
        <form>
          <div className="mb-4">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 text-left">
            <a href="#" className="text-orange-500 text-sm">
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full p-2 rounded">
            Login
          </Button>
        </form>
        <p className="text-center mt-4">
          Don&apos;t have an account?
        </p>
      </div>
    </div>
  );
}

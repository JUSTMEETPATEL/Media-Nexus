import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { authClient } from '@/lib/auth-client';

import React from 'react';

const Home = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';

    const { error } = await authClient.signIn.magicLink({
      email: formData.get('email') as string,
      callbackURL: '/dashboard',
    });

    if (error) {
      toast({
        title: 'Error',
      });
    } else {
      toast({ title: 'Magic link sent to your email' });
    }
  };

  return (
    <div className="pt-32">
      <form action={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Home;

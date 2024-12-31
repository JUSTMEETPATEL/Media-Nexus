'use client';

import { useSession } from '@/lib/auth-client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session.data) return;

        const checkUserRole = async () => {
            try {
                const response = await fetch('/api/check-role', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: session.data?.user.email }),
                });

                if (!response.ok) {
                    console.error('Error:', response.status, response.statusText);
                    return;
                }

                const { role } = await response.json();
                console.log('Role:', role);

                if (role === 'admin') {
                    router.push('/admin');
                } else if (role === 'faculty') {
                    router.push('/faculty');
                }
            } catch (error) {
                console.error('Error fetching role:', error);
            }
        };

        checkUserRole();
    }, [session.data, router]);

    if (!session.data) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-2xl text-black font-bold">Unauthorized...</h1>
            </div>
        );
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-2xl text-black font-bold">
                {session.data?.user.email}
            </h1>
        </div>
    );
};

export default Page;

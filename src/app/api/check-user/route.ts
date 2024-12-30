import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.query;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email parameter is required and must be a string' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(400).json({ exists: false });
        }
    } catch {
        return res.status(500).json({ error: 'Internal server error' });
    } 
}
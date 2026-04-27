'use client';

import { useRouter } from 'next/navigation';

export default function Custom404() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6 text-center">Page not found. Redirecting to home...</p>
            <button onClick={() => router.push('/')} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
                Go Home
            </button>
        </div>
    );
}

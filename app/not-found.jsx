import { redirect } from 'next/navigation';

export default function NotFound() {
    redirect('/');
    return null; // Return null or some fallback UI
}

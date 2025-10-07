import type { Metadata } from 'next';
import ClientLanding from './ClientLanding';

export const metadata: Metadata = {
    title: 'Make AI Agents Webinar – Sell More With Smart DMs (₹99)',
    description:
        'Join the live webinar and learn how to make AI Agents that convert leads on WhatsApp & Instagram, automate replies, and drive sales without hiring extra staff. Limited seats @ ₹99. Recording included.',
    openGraph: {
        title: 'Make AI Agents Webinar – Sell More With Smart DMs',
        description:
            'Automate responses on WhatsApp & Instagram. Convert leads into bookings/purchases. 24/7 engagement. Free WhatsApp automation setup bonus worth ₹15,000. Grab your seat for ₹99.',
        images: [{ url: '/images/poster.png' }],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Make AI Agents Webinar – ₹99 Limited Seats',
        description: 'Automate DMs, convert leads instantly, and sell more with AI Agents.'
    }
};

export default function Page() {
    return <ClientLanding />;
}



"use client";

import { usePathname } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideChrome = pathname?.startsWith('/ai-agents-webinar');

    return (
        <>
            {hideChrome ? null : <Navbar />}
            {children}
            {hideChrome ? null : <Footer />}
            {hideChrome ? null : (
                <a
                    href="https://wa.me/919849884501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 bg-[#2d1e95]  text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
                >
                    <FaWhatsapp className="w-7 h-7" />
                </a>
            )}
        </>
    );
}



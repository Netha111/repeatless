"use client";

import { useEffect, useState } from 'react';
import { CheckCircle2, Zap, Clock, ShieldCheck, Users, Star, MessageCircle, Bot, Instagram, PhoneCall } from 'lucide-react';

export const ENROLL_URL = 'https://rzp.io/rzp/1u2juJz';

function useCountdown(targetHoursFromNow: number) {
    const [remaining, setRemaining] = useState<number>(targetHoursFromNow * 3600);
    useEffect(() => {
        const id = setInterval(() => setRemaining((s) => (s > 0 ? s - 1 : 0)), 1000);
        return () => clearInterval(id);
    }, []);
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;
    return { hours, minutes, seconds };
}

export default function ClientLanding() {
    const { hours, minutes, seconds } = useCountdown(12);

    return (
        <div className="bg-gradient-to-b from-[#0a0a0a] via-[#0f0f14] to-[#0a0a0a] text-white min-h-screen">
            <div className="w-full bg-red-600 text-center text-sm py-2 px-4">
                <span className="font-semibold">Limited to 50 seats</span> • Recording included • Price today <span className="line-through opacity-70">₹999</span> <span className="font-extrabold text-yellow-300">₹99</span> • Language: <span className="font-semibold">Telugu</span>
            </div>

            <header className="container mx-auto px-6 pt-10 pb-8 md:pt-16 md:pb-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-red-500 font-semibold tracking-wide mb-3 flex items-center gap-2"><Zap className="w-5 h-5" /> Make</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            AI AGENTS <span className="text-red-500">to market</span> your products and services
                        </h1>
                        <p className="mt-5 text-lg text-blue-100/90">Automate responses on WhatsApp & Instagram. Convert leads instantly into bookings or purchases. 24/7 engagement without extra hires.</p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 bg-yellow-300/10 text-yellow-300 font-semibold px-4 py-2 rounded-full ring-1 ring-yellow-300/30">
                                <Clock className="w-4 h-4" />
                                <span>Live on 12 October, 2025 • 10:00 AM</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-emerald-300/10 text-emerald-300 font-semibold px-4 py-2 rounded-full ring-1 ring-emerald-300/30">
                                <MessageCircle className="w-4 h-4" />
                                <span>Language: Telugu</span>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {[
                                'Cut average DM response time to under 3 seconds with AI handoffs when needed',
                                'Auto‑qualify leads with dynamic questions and push hot prospects to your calendar',
                                'Drop one‑click payment links inside chats to close without sales calls',
                                'Sync conversations to Sheets/CRM and trigger follow‑ups that recover lost deals'
                            ].map((b) => (
                                <div key={b} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-0.5" />
                                    <p className="text-base md:text-lg text-blue-100">{b}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 rounded-lg bg-red-600 text-white font-bold px-8 py-4 text-lg hover:bg-red-700 transition transform hover:scale-[1.02]">
                                Register Now @ ₹99
                            </a>
                            <div className="flex items-center gap-2 text-sm text-blue-100/80">
                                <Clock className="w-4 h-4" />
                                <span>Seats filling fast • Offer ends in {hours}h:{String(minutes).padStart(2, '0')}m:{String(seconds).padStart(2, '0')}s</span>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center gap-4 text-blue-100/80">
                            <Users className="w-5 h-5" />
                            <span>Trusted by 100+ brands</span>
                            <Star className="w-5 h-5 text-yellow-300" />
                            <span>Recording included</span>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="https://res.cloudinary.com/ds10dzkpj/image/upload/v1759821277/entrep_j9ajdi.jpg" alt="AI Agents Webinar" className="rounded-xl shadow-2xl ring-1 ring-white/10 w-full h-auto" />
                    </div>
                </div>
            </header>

            <section className="container mx-auto px-6 py-10 md:py-14">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 text-emerald-300 font-semibold"><MessageCircle className="w-5 h-5" /> Smart WhatsApp DMs</div>
                        <p className="mt-3 text-blue-100/90">Sell more with AI-powered conversations that qualify, pitch, and close.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 text-pink-300 font-semibold"><Instagram className="w-5 h-5" /> Instagram Auto-Replies</div>
                        <p className="mt-3 text-blue-100/90">Reply instantly to story replies, comments, and DMs to capture demand.</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 text-cyan-300 font-semibold"><Bot className="w-5 h-5" /> Conversion-Focused Agents</div>
                        <p className="mt-3 text-blue-100/90">Designed to move prospects to payment in minutes, not days.</p>
                    </div>
                </div>
            </section>

            {/* How this helps */}
            <section className="container mx-auto px-6 py-10 md:py-14">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold">How this webinar helps service businesses</h2>
                        <ul className="mt-4 space-y-3 text-blue-100/90 list-disc list-inside">
                            <li>Turn WhatsApp inquiries into booked calls or paid orders automatically.</li>
                            <li>Auto-qualify prospects with dynamic questions before a human steps in.</li>
                            <li>Instant follow-ups, reminders, and payment nudges that rescue 20–40% lost deals.</li>
                            <li>CRM-ready leads pushed to Sheets/HubSpot with conversation context.</li>
                        </ul>
                        <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="mt-6 inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700">Register Now</a>
                    </div>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold">How this helps product/e‑commerce brands</h2>
                        <ul className="mt-4 space-y-3 text-blue-100/90 list-disc list-inside">
                            <li>Answer product questions instantly and reduce drop-offs at checkout.</li>
                            <li>Automated COD confirmation, shipping updates, and re‑engagement flows.</li>
                            <li>Upsell and cross-sell in DMs with smart recommendations.</li>
                            <li>Recover abandoned carts with WhatsApp reminders and limited-time incentives.</li>
                        </ul>
                        <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="mt-6 inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700">Book the Slot Now</a>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 pb-12">
                <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-10 shadow-2xl grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">Limited-Time Entry</h2>
                        <p className="mt-2 text-gray-600">28th September 2025 • 2-Hour Live on Graphy • Recording Included • Limited to 50 seats</p>
                        <div className="mt-6">
                            <p className="text-xl text-gray-400 line-through">₹999</p>
                            <p className="text-6xl md:text-7xl font-black text-gray-900">₹99</p>
                            <p className="mt-2 text-gray-700">Price today only. Includes free WhatsApp automation setup worth <span className="font-semibold">₹15,000</span>.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            'Zero tech method and complete time freedom',
                            'No sales calls, no endless content, no begging in DMs',
                            'High-converting scripts, workflows and templates',
                            'Proven with 100+ brands – start selling with AI in days'
                        ].map((line) => (
                            <div key={line} className="flex items-start gap-3">
                                <ShieldCheck className="w-6 h-6 text-emerald-600 mt-0.5" />
                                <span className="text-gray-800">{line}</span>
                            </div>
                        ))}
                        <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="block text-center w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition">
                            Enroll Now @ ₹99
                        </a>
                        <p className="text-xs text-gray-500 text-center">Seats are low as of today. Hurry before price increases.</p>
                    </div>
                </div>
            </section>

            {/* What you'll learn expanded */}
            <section className="container mx-auto px-6 py-10 md:py-14">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">What you’ll learn</h2>
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        {[
                            'Design WhatsApp and Instagram agents that qualify, pitch, and close',
                            'Build booking and payments workflows that work 24/7',
                            'Create lead magnets and DM triggers that flood your inbox with buyers',
                            'Set up analytics to track replies→bookings→revenue so you can scale what works',
                            'Deploy plug‑and‑play templates you can customize in minutes',
                            'Integrate Sheets/CRMs and automate follow‑ups for no‑show recovery'
                        ].map((t) => (
                            <div key={t} className="bg-white/5 rounded-lg p-5 border border-white/10 flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1" />
                                <p className="text-blue-100/90">{t}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700">Register Now</a>
                    </div>
                </div>
            </section>

            {/* Who is this for */}
            <section className="container mx-auto px-6 py-10 md:py-14">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Who should attend</h2>
                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                        {[
                            'Service business owners (agencies, coaches, consultants) who want more booked clients from social media',
                            'Product businesses & e‑commerce sellers who want to automate pre‑sale Q&A and drive instant purchases',
                            'Entrepreneurs and founders who want to scale without hiring more staff'
                        ].map((p) => (
                            <div key={p} className="bg-white/5 rounded-lg p-6 border border-white/10">
                                <p className="text-blue-100/90">{p}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700">Book the Slot Now</a>
                    </div>
                </div>
            </section>

            {/* Agenda */}
            <section className="container mx-auto px-6 py-10 md:py-14">
                <h2 className="text-3xl md:text-4xl font-bold text-center">2‑Hour Live Agenda</h2>
                <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="text-yellow-300 font-semibold">Part 1 • Build</p>
                        <p className="mt-2 text-blue-100/90">Offer + funnel + agent blueprint, triggers and tools setup.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="text-yellow-300 font-semibold">Part 2 • Sell</p>
                        <p className="mt-2 text-blue-100/90">DM scripts, follow‑up flows, and payment collection workflows.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <p className="text-yellow-300 font-semibold">Part 3 • Scale</p>
                        <p className="mt-2 text-blue-100/90">Analytics, optimization, and paid + organic traffic triggers.</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700">Reserve My Seat</a>
                </div>
            </section>

            <section className="container mx-auto px-6 pb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold">Trusted by 100+ brands and creators</h3>
                    <p className="text-blue-100/80 mt-2">Build a buying movement that makes people pull out their cards.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { quote: 'We reduced manual replies by 85% and booked 42 paid consults in 10 days.', name: 'Aarzoo Shah', role: 'Life Coach' },
                        { quote: 'COD confirmations + DM reminders lifted our monthly revenue by 28%.', name: 'Viral Jain', role: 'D2C Seller' },
                        { quote: 'Leads now show up pre‑qualified on our calendar. Sales calls are half the time.', name: 'Karthik Naidu', role: 'SaaS Coach' }
                    ].map((t) => (
                        <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-2 text-yellow-300">
                                {Array.from({ length: 5 }).map((_, idx) => (<Star key={idx} className="w-4 h-4 fill-yellow-300" />))}
                            </div>
                            <p className="mt-3 text-blue-100/90">“{t.quote}”</p>
                            <div className="mt-4 text-sm text-blue-200/80">{t.name} — {t.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white/5 border-t border-white/10">
                <div className="container mx-auto px-6 py-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h3>
                    <div className="max-w-3xl mx-auto mt-8 space-y-5">
                        <details className="bg-white/5 rounded-lg p-5 border border-white/10">
                            <summary className="cursor-pointer font-semibold">Who is this for?</summary>
                            <p className="mt-2 text-blue-100/90">Coaches, consultants, agencies, service businesses, influencers and product owners who want AI to acquire clients on autopilot.</p>
                        </details>
                        <details className="bg-white/5 rounded-lg p-5 border border-white/10">
                            <summary className="cursor-pointer font-semibold">Is there a guarantee?</summary>
                            <p className="mt-2 text-blue-100/90">Yes. 30-day no-questions-asked refund from the organizer as stated on the enrollment page.</p>
                        </details>
                        <details className="bg-white/5 rounded-lg p-5 border border-white/10">
                            <summary className="cursor-pointer font-semibold">Will I get the bonuses?</summary>
                            <p className="mt-2 text-blue-100/90">You get access to bonuses after the live event as mentioned in the reference page.</p>
                        </details>
                        <details className="bg-white/5 rounded-lg p-5 border border-white/10">
                            <summary className="cursor-pointer font-semibold">What if I’m not technical?</summary>
                            <p className="mt-2 text-blue-100/90">No problem. We provide plug‑and‑play templates and step‑by‑step guidance. You’ll be able to launch without coding.</p>
                        </details>
                        <details className="bg-white/5 rounded-lg p-5 border border-white/10">
                            <summary className="cursor-pointer font-semibold">Will this work for my niche?</summary>
                            <p className="mt-2 text-blue-100/90">If your customers message you on WhatsApp/Instagram, this works. We’ll show patterns for services, coaching, local, D2C and more.</p>
                        </details>
                    </div>
                    <div className="text-center mt-10">
                        <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition">
                            Grab Your Seat @ ₹99
                        </a>
                    </div>
                </div>
            </section>


            <div className="fixed bottom-3 left-0 right-0 px-4">
                <div className="mx-auto max-w-3xl bg-white text-gray-900 rounded-full shadow-2xl border border-black/10 flex items-center justify-between gap-3 py-2 pl-4 pr-2">
                    <div className="flex items-center gap-3">
                        <PhoneCall className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold">Limited Seats • Recording Included</span>
                    </div>
                    <a href={ENROLL_URL} target="_blank" rel="noreferrer" className="bg-red-600 text-white font-bold px-5 py-2 rounded-full hover:bg-red-700 transition">Pay ₹99</a>
                </div>
            </div>
        </div>
    );
}



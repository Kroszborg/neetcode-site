import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'NeetCode | Pricing',
  description: 'Get full access to NeetCode courses, problems, AI tools, and more.',
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingClient />
      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-zinc-500">© 2026 NeetCode. All rights reserved.</p>
          <div className="flex items-center gap-6 font-sans text-xs text-zinc-500">
            <a href="/privacy"                    className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms"                      className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:support@neetcode.io"  className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');
  const isVerify = pathname?.startsWith('/verify');

  if (isStudio || isVerify) {
    return (
      <main className={isStudio ? "h-screen w-screen overflow-hidden" : "min-h-screen w-full flex flex-col bg-[#010912]"}>
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

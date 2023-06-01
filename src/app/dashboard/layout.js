'use client';
import React from "react";
import "../styles/dashboard.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function DashLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <section className="DashGrid">
      <aside className="navigator">
        <ul>
            <li className={pathname == "/dashboard/result" ? "active" : ""}><Link href="/dashboard/result">Result</Link></li>
            <li className={pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
            <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact Us</Link></li>
            <li className={pathname == "/blog" ? "active" : ""}><Link href="/blog">Blogs</Link></li>
        </ul>
      </aside>

      <main className="DashCont">{children}</main>
    </section>
  );
}

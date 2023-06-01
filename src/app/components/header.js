'use client';

import React from 'react'
import Link from 'next/link';
import Style from '../styles/header.css'
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  return (
    <header>
      <nav className = {Style.nav}>
        <ul>
            <li className={pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
            <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact Us</Link></li>
            <li className={pathname == "/blog" ? "active" : ""}><Link href="/blog">Blogs</Link></li>
            <li className={pathname.startsWith("/dashboard") ? "active" : ""}><Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 

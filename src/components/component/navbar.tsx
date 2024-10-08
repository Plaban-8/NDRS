/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/clkG58jwl38
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { JSX, SVGProps, useState } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="flex flex-col border-2">
      <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6 bg-[#c8d3db]">
        <Link href="/HomePage" className="flex items-center gap-2" prefetch={false}>
      
          <span className="text-lg font-semibold">NDRS</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/DisasterAlert" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Disaster Alerts
          </Link>
          <Link href="/IncidentReport" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Incident Reports
          </Link>
          <Link href="/ReportForm" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
            Report Form
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login">
          <button className="bg-gradient-to-r from-gray-500 to-blue-500 hover:from-gray-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Login
          </button>
        </Link>
        </div>
      </header>
      <div className="flex flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="block md:hidden ml-2"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <main className="flex-1" />
      </div>
    </div>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

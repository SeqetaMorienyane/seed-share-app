"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center mr-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-green-600 text-white p-1 rounded">
              <svg
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
                <path d="M11 18a5 5 0 0 1-5-5V7" />
                <path d="M11 18a5 5 0 0 0 5-5V7" />
                <path d="M11 7V3" />
                <path d="m7 14 4 4 4-4" />
              </svg>
            </div>
            <span className="font-bold text-green-800 text-lg hidden sm:inline-block">SeedShare</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <div className="flex-1 flex justify-end gap-2">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-5 w-5" />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link href="/marketplace" className="text-lg font-medium py-2 hover:text-green-600">
                      Marketplace
                    </Link>
                    <Link href="/quality-checker" className="text-lg font-medium py-2 hover:text-green-600">
                      Quality Checker
                    </Link>
                    <Link href="/seed-banks" className="text-lg font-medium py-2 hover:text-green-600">
                      Seed Banks
                    </Link>
                    <Link href="/offline-catalog" className="text-lg font-medium py-2 hover:text-green-600">
                      Offline Catalog
                    </Link>
                    <Link href="/community" className="text-lg font-medium py-2 hover:text-green-600">
                      Community
                    </Link>
                    <div className="border-t my-4"></div>
                    <Link href="/profile" className="text-lg font-medium py-2 hover:text-green-600">
                      Profile
                    </Link>
                    <Link href="/settings" className="text-lg font-medium py-2 hover:text-green-600">
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            {isSearchOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white p-4 border-b shadow-md">
                <div className="flex gap-2">
                  <Input placeholder="Search seeds, farmers..." className="flex-1" />
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                    ✕
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="flex-1 flex items-center gap-6 ml-6">
              <Link href="/marketplace" className="text-sm font-medium hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/quality-checker" className="text-sm font-medium hover:text-green-600">
                Quality Checker
              </Link>
              <Link href="/seed-banks" className="text-sm font-medium hover:text-green-600">
                Seed Banks
              </Link>
              <Link href="/offline-catalog" className="text-sm font-medium hover:text-green-600">
                Offline Catalog
              </Link>
              <Link href="/community" className="text-sm font-medium hover:text-green-600">
                Community
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search seeds, farmers..."
                  className="w-full bg-gray-100 pl-8 rounded-full focus-visible:ring-green-600"
                />
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

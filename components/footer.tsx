import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SeedShare Network</h3>
            <p className="text-green-200 mb-4">
              Connecting South African farmers through seed exchange, promoting biodiversity and sustainable farming.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-green-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-green-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-green-300">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-green-200 hover:text-white">
                  Seed Marketplace
                </Link>
              </li>
              <li>
                <Link href="/quality-checker" className="text-green-200 hover:text-white">
                  Quality Checker
                </Link>
              </li>
              <li>
                <Link href="/seed-banks" className="text-green-200 hover:text-white">
                  Seed Bank Directory
                </Link>
              </li>
              <li>
                <Link href="/offline-catalog" className="text-green-200 hover:text-white">
                  Offline Catalog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-green-200 hover:text-white">
                  Community Forums
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Seed Saving Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Indigenous Seeds
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Climate-Resilient Varieties
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Farming Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Research Papers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-green-200">Email: info@seedshare.co.za</li>
              <li className="text-green-200">Phone: +27 12 345 6789</li>
              <li className="text-green-200">Address: 123 Farm Road, Pretoria, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} SeedShare Network. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

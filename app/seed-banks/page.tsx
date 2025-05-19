"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, ExternalLink, Clock, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Sample seed bank data
const seedBanks = [
  {
    id: 1,
    name: "National Plant Genetic Resources Centre",
    type: "Government",
    address: "Agricultural Research Council, Pretoria, Gauteng",
    distance: "12 km",
    phone: "+27 12 345 6789",
    email: "npgrc@arc.gov.za",
    website: "https://www.arc.gov.za",
    hours: "Mon-Fri: 8:00 - 16:00",
    specialties: ["Indigenous Crops", "Cereals", "Vegetables"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Seed Savers Network South Africa",
    type: "NGO",
    address: "25 Green Street, Cape Town, Western Cape",
    distance: "1200 km",
    phone: "+27 21 987 6543",
    email: "info@seedsavers.org.za",
    website: "https://www.seedsavers.org.za",
    hours: "Mon-Fri: 9:00 - 15:00",
    specialties: ["Heirloom Varieties", "Indigenous Seeds", "Training"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Limpopo Seed Initiative",
    type: "Community",
    address: "Rural Development Center, Polokwane, Limpopo",
    distance: "300 km",
    phone: "+27 15 123 4567",
    email: "contact@limpoposeeds.co.za",
    website: "https://www.limpoposeeds.co.za",
    hours: "Mon, Wed, Fri: 8:00 - 14:00",
    specialties: ["Drought-Resistant", "Local Varieties", "Farmer Training"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "KwaZulu-Natal Seed Cooperative",
    type: "Cooperative",
    address: "45 Harvest Road, Durban, KwaZulu-Natal",
    distance: "500 km",
    phone: "+27 31 765 4321",
    email: "info@kznseedcoop.co.za",
    website: "https://www.kznseedcoop.co.za",
    hours: "Tue-Sat: 8:00 - 16:00",
    specialties: ["Vegetables", "Medicinal Plants", "Fruit Trees"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function SeedBanks() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredSeedBanks = seedBanks.filter((bank) => {
    const matchesSearch =
      bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = selectedType ? bank.type === selectedType : true
    return matchesSearch && matchesType
  })

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Seed Bank Directory</h1>
        <p className="text-gray-600 mb-8">Find government and NGO seed banks across South Africa</p>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search by name or specialty..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedType === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(null)}
              >
                All
              </Button>
              <Button
                variant={selectedType === "Government" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("Government")}
              >
                Government
              </Button>
              <Button
                variant={selectedType === "NGO" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("NGO")}
              >
                NGO
              </Button>
              <Button
                variant={selectedType === "Community" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("Community")}
              >
                Community
              </Button>
              <Button
                variant={selectedType === "Cooperative" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("Cooperative")}
              >
                Cooperative
              </Button>
            </div>
          </div>
        </div>

        {/* Seed Banks List */}
        <div className="space-y-6">
          {filteredSeedBanks.length > 0 ? (
            filteredSeedBanks.map((bank) => <SeedBankCard key={bank.id} seedBank={bank} />)
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No seed banks found matching your criteria.</p>
              <Button
                variant="link"
                className="mt-2 text-green-600"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType(null)
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-green-800 mb-4">Seed Banks Map</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Interactive map would be displayed here</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Note: Map data can be downloaded for offline use</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function SeedBankCard({ seedBank }: { seedBank: (typeof seedBanks)[0] }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <Image src={seedBank.image || "/placeholder.svg"} alt={seedBank.name} fill className="object-cover" />
          <Badge className="absolute top-2 left-2 bg-green-600">{seedBank.type}</Badge>
        </div>

        <div className="md:w-2/3 p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-800">{seedBank.name}</h2>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{seedBank.address}</span>
                <span className="ml-2 text-sm">({seedBank.distance})</span>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <Button variant="outline" size="sm" className="mr-2">
                Save
              </Button>
              <Button size="sm">Contact</Button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2 text-gray-500" />
              <span>{seedBank.phone}</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2 text-gray-500" />
              <span>{seedBank.email}</span>
            </div>
            <div className="flex items-center text-sm">
              <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
              <Link href="#" className="text-green-600 hover:underline">
                {seedBank.website.replace("https://", "")}
              </Link>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-gray-500" />
              <span>{seedBank.hours}</span>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Specialties:</h3>
            <div className="flex flex-wrap gap-2">
              {seedBank.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="bg-green-50">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

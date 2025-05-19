import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Filter, ArrowUpDown } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Marketplace() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">Seed Marketplace</h1>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Input type="search" placeholder="Search for seeds, varieties..." className="pl-10" />
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
                  className="absolute left-3 top-2.5 h-4 w-4 text-gray-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="flex gap-2">
                <ArrowUpDown className="h-4 w-4" />
                <span>Sort</span>
              </Button>
              <Button variant="outline" className="flex gap-2">
                <MapPin className="h-4 w-4" />
                <span>Near Me</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className="bg-green-50">
              Vegetables
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              Indigenous
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              Drought Resistant
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              Heirloom
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              Organic
            </Badge>
            <Badge variant="outline" className="bg-green-50">
              + More
            </Badge>
          </div>
        </div>

        {/* Marketplace Tabs */}
        <Tabs defaultValue="available" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="available">Available Seeds</TabsTrigger>
            <TabsTrigger value="wanted">Wanted Seeds</TabsTrigger>
            <TabsTrigger value="exchanges">My Exchanges</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SeedCard
                name="Amaranth - Indigenous"
                location="Johannesburg, Gauteng"
                distance="15 km away"
                exchangeType="Trade or Donate"
                imageSrc="/placeholder.svg?height=200&width=200"
                farmer="Thabo M."
                farmerRating={4.8}
              />
              <SeedCard
                name="Drought-Resistant Maize"
                location="Polokwane, Limpopo"
                distance="230 km away"
                exchangeType="Trade Only"
                imageSrc="/placeholder.svg?height=200&width=200"
                farmer="Nomsa K."
                farmerRating={4.5}
              />
              <SeedCard
                name="African Eggplant"
                location="Durban, KwaZulu-Natal"
                distance="500 km away"
                exchangeType="Donate"
                imageSrc="/placeholder.svg?height=200&width=200"
                farmer="John S."
                farmerRating={4.9}
              />
              <SeedCard
                name="Bambara Groundnut"
                location="Cape Town, Western Cape"
                distance="1200 km away"
                exchangeType="Trade or Donate"
                imageSrc="/placeholder.svg?height=200&width=200"
                farmer="Lerato P."
                farmerRating={4.7}
              />
              <SeedCard
                name="Spider Plant (Cleome)"
                location="Bloemfontein, Free State"
                distance="370 km away"
                exchangeType="Trade Only"
                imageSrc="/placeholder.svg?height=200&width=200"
                farmer="Sipho N."
                farmerRating={4.6}
              />
              <SeedCard
                name="Wild Mustard"
                location="Pretoria, Gauteng"
                distance="45 km away"
                exchangeType="Donate"
                imageSrc="/placeholder.svg?height=200&width=200"
                farmer="Grace M."
                farmerRating={4.4}
              />
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="mx-auto">
                Load More Seeds
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="wanted" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <WantedSeedCard
                name="Cowpea - Indigenous Variety"
                location="East London, Eastern Cape"
                postedDate="Posted 2 days ago"
                description="Looking for indigenous cowpea varieties adapted to coastal conditions."
                farmer="Andile Z."
              />
              <WantedSeedCard
                name="Sorghum - Drought Resistant"
                location="Kimberley, Northern Cape"
                postedDate="Posted 5 days ago"
                description="Need drought-resistant sorghum varieties for dry farming conditions."
                farmer="Maria V."
              />
              <WantedSeedCard
                name="African Leafy Vegetables"
                location="Nelspruit, Mpumalanga"
                postedDate="Posted 1 week ago"
                description="Seeking various indigenous leafy vegetables for nutrition garden."
                farmer="Peter M."
              />
            </div>
          </TabsContent>

          <TabsContent value="exchanges" className="mt-0">
            <div className="space-y-6">
              <ExchangeCard
                seedName="Amaranth Seeds"
                status="Pending"
                date="May 15, 2023"
                withFarmer="Thabo M."
                location="Johannesburg"
              />
              <ExchangeCard
                seedName="Maize - Indigenous"
                status="Completed"
                date="April 28, 2023"
                withFarmer="Nomsa K."
                location="Polokwane"
              />
              <ExchangeCard
                seedName="Okra Seeds"
                status="Cancelled"
                date="April 10, 2023"
                withFarmer="John S."
                location="Durban"
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

function SeedCard({
  name,
  location,
  distance,
  exchangeType,
  imageSrc,
  farmer,
  farmerRating,
}: {
  name: string
  location: string
  distance: string
  exchangeType: string
  imageSrc: string
  farmer: string
  farmerRating: number
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-600">{exchangeType}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="text-sm text-gray-500">{distance}</div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
            {farmer.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-medium">{farmer}</div>
            <div className="text-xs text-gray-500">★ {farmerRating}</div>
          </div>
        </div>
        <Button size="sm">Contact</Button>
      </CardFooter>
    </Card>
  )
}

function WantedSeedCard({
  name,
  location,
  postedDate,
  description,
  farmer,
}: {
  name: string
  location: string
  postedDate: string
  description: string
  farmer: string
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant="outline" className="bg-amber-50 text-amber-800">
            Wanted
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="text-xs text-gray-500 mb-3">{postedDate}</div>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
            {farmer.charAt(0)}
          </div>
          <div className="text-sm font-medium">{farmer}</div>
        </div>
        <Button size="sm">I Have These</Button>
      </CardFooter>
    </Card>
  )
}

function ExchangeCard({
  seedName,
  status,
  date,
  withFarmer,
  location,
}: {
  seedName: string
  status: "Pending" | "Completed" | "Cancelled"
  date: string
  withFarmer: string
  location: string
}) {
  const getStatusColor = () => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return ""
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
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
                className="text-green-600"
              >
                <path d="M11 18a5 5 0 0 1-5-5V7" />
                <path d="M11 18a5 5 0 0 0 5-5V7" />
                <path d="M11 7V3" />
                <path d="m7 14 4 4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">{seedName}</h3>
              <div className="text-sm text-gray-500">
                With {withFarmer} from {location}
              </div>
              <div className="text-sm text-gray-500">{date}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge className={getStatusColor()}>{status}</Badge>
            <Button variant="outline" size="sm">
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

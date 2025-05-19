"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Search, Filter, WifiOff, Bookmark, BookmarkCheck } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Sample seed catalog data
const seedCategories = ["All Seeds", "Indigenous", "Vegetables", "Grains", "Fruits", "Medicinal", "Drought-Resistant"]

const seedCatalog = [
  {
    id: 1,
    name: "Amaranth",
    scientificName: "Amaranthus spp.",
    category: "Indigenous",
    description: "Nutritious leafy vegetable and grain crop, drought-tolerant and heat-resistant.",
    growingConditions: "Full sun, well-drained soil, drought-tolerant",
    plantingInstructions: "Sow seeds directly after last frost, 0.5cm deep",
    harvestTime: "45-60 days for leaves, 90-120 days for grain",
    storageInstructions: "Store seeds in cool, dry place for up to 3 years",
    image: "/placeholder.svg?height=200&width=200",
    isDownloaded: true,
  },
  {
    id: 2,
    name: "Bambara Groundnut",
    scientificName: "Vigna subterranea",
    category: "Indigenous",
    description: "Drought-tolerant legume native to Africa with high protein content.",
    growingConditions: "Full sun, sandy loam soil, low rainfall areas",
    plantingInstructions: "Plant 3-5cm deep, 20cm apart in rows 50cm apart",
    harvestTime: "110-150 days after planting",
    storageInstructions: "Store dried nuts in airtight containers for up to 1 year",
    image: "/placeholder.svg?height=200&width=200",
    isDownloaded: false,
  },
  {
    id: 3,
    name: "African Eggplant",
    scientificName: "Solanum aethiopicum",
    category: "Vegetables",
    description: "Bitter-tasting small eggplant variety popular in traditional dishes.",
    growingConditions: "Full sun, fertile well-drained soil, regular watering",
    plantingInstructions: "Start indoors 6-8 weeks before last frost, transplant when soil is warm",
    harvestTime: "70-80 days after transplanting",
    storageInstructions: "Seeds viable for 3-4 years when properly stored",
    image: "/placeholder.svg?height=200&width=200",
    isDownloaded: true,
  },
  {
    id: 4,
    name: "Sorghum",
    scientificName: "Sorghum bicolor",
    category: "Grains",
    description: "Drought-resistant grain crop with multiple uses including food and animal feed.",
    growingConditions: "Full sun, wide range of soils, drought-tolerant",
    plantingInstructions: "Sow 2-3cm deep when soil temperature reaches 18°C",
    harvestTime: "90-120 days depending on variety",
    storageInstructions: "Store dried grain in cool, dry conditions for 2-3 years",
    image: "/placeholder.svg?height=200&width=200",
    isDownloaded: false,
  },
  {
    id: 5,
    name: "Spider Plant",
    scientificName: "Cleome gynandra",
    category: "Indigenous",
    description: "Nutritious leafy vegetable rich in vitamins and minerals.",
    growingConditions: "Partial shade to full sun, well-drained soil",
    plantingInstructions: "Direct sow seeds at start of rainy season, barely cover with soil",
    harvestTime: "3-4 weeks for young leaves",
    storageInstructions: "Seeds remain viable for 1-2 years in cool, dry storage",
    image: "/placeholder.svg?height=200&width=200",
    isDownloaded: true,
  },
  {
    id: 6,
    name: "Cowpea",
    scientificName: "Vigna unguiculata",
    category: "Drought-Resistant",
    description: "Versatile legume used for food, animal fodder, and soil improvement.",
    growingConditions: "Full sun, wide range of soils, drought-tolerant",
    plantingInstructions: "Sow 2-3cm deep after all danger of frost has passed",
    harvestTime: "60-70 days for green pods, 90-120 days for dry beans",
    storageInstructions: "Dried seeds store for 3-4 years in cool, dry conditions",
    image: "/placeholder.svg?height=200&width=200",
    isDownloaded: false,
  },
]

export default function OfflineCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Seeds")
  const [activeTab, setActiveTab] = useState("all")

  const filteredSeeds = seedCatalog.filter((seed) => {
    const matchesSearch =
      seed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seed.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seed.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Seeds" || seed.category === selectedCategory
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "downloaded" && seed.isDownloaded) ||
      (activeTab === "bookmarked" && seed.isDownloaded) // Using isDownloaded as a proxy for bookmarked in this demo

    return matchesSearch && matchesCategory && matchesTab
  })

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Offline Seed Catalog</h1>
            <p className="text-gray-600">Access seed information even without internet connection</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <Badge variant="outline" className="flex items-center gap-1 mr-4">
              <WifiOff className="h-3 w-3" />
              <span>Offline Mode Available</span>
            </Badge>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Download All</span>
            </Button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search seeds by name or description..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button variant="outline" className="flex gap-2 w-full md:w-auto justify-center">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {seedCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Catalog Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Seeds</TabsTrigger>
            <TabsTrigger value="downloaded">Downloaded</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <SeedGrid seeds={filteredSeeds} />
          </TabsContent>

          <TabsContent value="downloaded" className="mt-0">
            <SeedGrid seeds={filteredSeeds} />
          </TabsContent>

          <TabsContent value="bookmarked" className="mt-0">
            <SeedGrid seeds={filteredSeeds} />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

function SeedGrid({ seeds }: { seeds: typeof seedCatalog }) {
  return (
    <>
      {seeds.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seeds.map((seed) => (
            <SeedCard key={seed.id} seed={seed} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No seeds found matching your criteria.</p>
        </div>
      )}
    </>
  )
}

function SeedCard({ seed }: { seed: (typeof seedCatalog)[0] }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="h-48 relative">
          <Image src={seed.image || "/placeholder.svg"} alt={seed.name} fill className="object-cover" />
        </div>
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge className="bg-green-600">{seed.category}</Badge>
          {seed.isDownloaded && (
            <Badge variant="outline" className="bg-white">
              <WifiOff className="h-3 w-3 mr-1" />
              <span>Offline</span>
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{seed.name}</CardTitle>
            <CardDescription className="italic">{seed.scientificName}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-green-600">
            {seed.isDownloaded ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 line-clamp-3">{seed.description}</p>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 border-t">
        <Button variant="link" className="p-0 h-auto text-green-600">
          View Details
        </Button>
        {!seed.isDownloaded && (
          <Button size="sm" variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

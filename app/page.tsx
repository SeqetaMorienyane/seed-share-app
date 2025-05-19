import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, MessageCircle, SproutIcon as Seedling, Server, Share2, SproutIcon } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LanguageSelector from "@/components/language-selector"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-800 to-green-600 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">SeedShare Network</h1>
              <p className="text-lg md:text-xl mb-6">
                Connecting South African farmers through seed exchange, promoting biodiversity and sustainable farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Find Seeds</Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-green-800"
                >
                  Share Seeds
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=400"
                  alt="South African farmers sharing seeds"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/placeholder.svg?height=64&width=1200')] bg-repeat-x opacity-20"></div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-green-800">How SeedShare Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Share2 className="h-10 w-10 text-green-600" />}
              title="P2P Seed Exchange"
              description="Trade or donate seeds with other farmers in your local area, reducing costs and promoting biodiversity."
            />
            <FeatureCard
              icon={<SproutIcon className="h-10 w-10 text-green-600" />}
              title="Seed Quality Checker"
              description="Use our AI-powered tool to verify seed quality through images, ensuring you receive healthy seeds."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10 text-green-600" />}
              title="Seed Bank Directory"
              description="Access a comprehensive directory of government and NGO seed banks across South Africa."
            />
          </div>
        </section>

        {/* App Preview Section */}
        <section className="py-12 md:py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800">App Features</h2>

            <Tabs defaultValue="marketplace" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 h-auto">
                <TabsTrigger value="marketplace" className="py-2">
                  Marketplace
                </TabsTrigger>
                <TabsTrigger value="quality" className="py-2">
                  Quality Check
                </TabsTrigger>
                <TabsTrigger value="directory" className="py-2">
                  Seed Banks
                </TabsTrigger>
                <TabsTrigger value="offline" className="py-2">
                  Offline Catalog
                </TabsTrigger>
                <TabsTrigger value="community" className="py-2">
                  Community
                </TabsTrigger>
              </TabsList>

              <TabsContent value="marketplace" className="mt-6">
                <AppFeatureCard
                  title="P2P Seed Marketplace"
                  description="Find and exchange seeds with farmers in your area. Filter by seed type, distance, and exchange method."
                  imageSrc="/placeholder.svg?height=400&width=300"
                  imageAlt="Seed marketplace interface"
                />
              </TabsContent>

              <TabsContent value="quality" className="mt-6">
                <AppFeatureCard
                  title="AI Seed Quality Checker"
                  description="Take a photo of seeds to detect quality issues, diseases, or defects before exchanging."
                  imageSrc="/placeholder.svg?height=400&width=300"
                  imageAlt="Seed quality checker interface"
                />
              </TabsContent>

              <TabsContent value="directory" className="mt-6">
                <AppFeatureCard
                  title="Seed Bank Directory"
                  description="Find official seed banks and repositories near you with contact information and available varieties."
                  imageSrc="/placeholder.svg?height=400&width=300"
                  imageAlt="Seed bank directory interface"
                />
              </TabsContent>

              <TabsContent value="offline" className="mt-6">
                <AppFeatureCard
                  title="Offline Seed Catalog"
                  description="Access seed information even without internet connection, perfect for rural areas with limited connectivity."
                  imageSrc="/placeholder.svg?height=400&width=300"
                  imageAlt="Offline seed catalog interface"
                />
              </TabsContent>

              <TabsContent value="community" className="mt-6">
                <AppFeatureCard
                  title="Community Forums"
                  description="Connect with other farmers to share knowledge, tips, and best practices for seed saving and cultivation."
                  imageSrc="/placeholder.svg?height=400&width=300"
                  imageAlt="Community forum interface"
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImpactCard
              title="Lower Input Costs"
              description="Farmers save on seed expenses through direct exchanges, making farming more profitable."
              icon={<Leaf className="h-8 w-8 text-green-600" />}
            />
            <ImpactCard
              title="Biodiversity Promotion"
              description="Preserving indigenous and climate-resilient seed varieties that might otherwise be lost."
              icon={<Seedling className="h-8 w-8 text-green-600" />}
            />
            <ImpactCard
              title="Community Strengthening"
              description="Building stronger rural farming communities through knowledge sharing and cooperation."
              icon={<MessageCircle className="h-8 w-8 text-green-600" />}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join the SeedShare Network Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of the movement to make quality seeds accessible to all South African farmers.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 h-auto">
              Download the App
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-4 right-4 z-50">
        <LanguageSelector />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center text-center pb-2">
        {icon}
        <CardTitle className="mt-4 text-xl text-green-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function AppFeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:w-1/3 p-4 flex justify-center">
        <div className="relative w-48 h-96 md:w-56 md:h-96">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg border border-gray-200"
          />
        </div>
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-xl font-bold text-green-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Button variant="link" className="mt-4 text-green-600 p-0">
          Learn more →
        </Button>
      </div>
    </div>
  )
}

function ImpactCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-green-50 p-3 rounded-full">{icon}</div>
        <CardTitle className="text-lg text-green-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, Check, AlertTriangle, Info } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function QualityChecker() {
  const [activeTab, setActiveTab] = useState("camera")
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<null | {
    quality: "good" | "fair" | "poor"
    issues: string[]
    confidence: number
    seedType: string
  }>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageCapture = () => {
    // In a real app, this would access the camera
    // For demo purposes, we'll simulate with a placeholder
    setImagePreview("/placeholder.svg?height=400&width=400")
    setAnalyzing(true)

    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzing(false)
      setResults({
        quality: "fair",
        issues: ["Minor discoloration detected", "Some size inconsistency"],
        confidence: 87,
        seedType: "Maize (Indigenous Variety)",
      })
    }, 2000)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, this would handle file uploads
    // For demo purposes, we'll simulate with a placeholder
    setImagePreview("/placeholder.svg?height=400&width=400")
    setAnalyzing(true)

    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzing(false)
      setResults({
        quality: "good",
        issues: [],
        confidence: 94,
        seedType: "Amaranth",
      })
    }, 2000)
  }

  const resetChecker = () => {
    setImagePreview(null)
    setResults(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Seed Quality Checker</h1>
        <p className="text-gray-600 mb-8">Use AI to analyze seed quality before exchanging</p>

        {!imagePreview ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Check Seed Quality</CardTitle>
              <CardDescription>
                Take a clear photo of seeds or upload an existing image to analyze quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="camera">Camera</TabsTrigger>
                  <TabsTrigger value="upload">Upload</TabsTrigger>
                </TabsList>

                <TabsContent value="camera" className="mt-6">
                  <div className="bg-gray-100 rounded-lg h-64 flex flex-col items-center justify-center">
                    <Camera className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 mb-4">Position seeds on a plain background</p>
                    <Button onClick={handleImageCapture}>Take Photo</Button>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Tips for best results:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Use good lighting</li>
                      <li>Place seeds on a contrasting background</li>
                      <li>Include multiple seeds for better analysis</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="upload" className="mt-6">
                  <div className="bg-gray-100 rounded-lg h-64 flex flex-col items-center justify-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 mb-4">Select a clear image of seeds</p>
                    <Button>
                      <label className="cursor-pointer">
                        Upload Image
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                      </label>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <div className="text-sm text-gray-500">
                <Info className="h-4 w-4 inline mr-1" />
                Your images are processed locally and not stored
              </div>
            </CardFooter>
          </Card>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Seed Analysis</CardTitle>
                  {results && (
                    <Badge
                      className={
                        results.quality === "good"
                          ? "bg-green-100 text-green-800"
                          : results.quality === "fair"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {results.quality === "good"
                        ? "Good Quality"
                        : results.quality === "fair"
                          ? "Fair Quality"
                          : "Poor Quality"}
                    </Badge>
                  )}
                </div>
                <CardDescription>{analyzing ? "Analyzing seed quality..." : "Analysis results"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden h-64 w-full">
                      <Image src={imagePreview || "/placeholder.svg"} alt="Seed image" fill className="object-cover" />
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    {analyzing ? (
                      <div className="h-full flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mb-4"></div>
                        <p>Analyzing seed quality...</p>
                        <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
                      </div>
                    ) : results ? (
                      <div>
                        <h3 className="font-medium text-lg mb-2">Detected: {results.seedType}</h3>
                        <p className="text-sm text-gray-500 mb-4">Confidence: {results.confidence}%</p>

                        <h4 className="font-medium mb-2">Quality Assessment:</h4>
                        {results.issues.length > 0 ? (
                          <ul className="space-y-2 mb-4">
                            {results.issues.map((issue, index) => (
                              <li key={index} className="flex items-start">
                                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{issue}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="flex items-center mb-4">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span>No issues detected</span>
                          </div>
                        )}

                        <h4 className="font-medium mb-2">Recommendation:</h4>
                        <p>
                          {results.quality === "good"
                            ? "These seeds appear to be of good quality and suitable for exchange or planting."
                            : results.quality === "fair"
                              ? "These seeds are acceptable for exchange but may have slightly reduced germination rates."
                              : "These seeds may have significant quality issues. Not recommended for exchange."}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" onClick={resetChecker}>
                  Check Another Sample
                </Button>
                {results && <Button>Save Results</Button>}
              </CardFooter>
            </Card>

            {results && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-green-800 mb-4">Similar Seeds in Marketplace</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="flex">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Similar seed"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{results.seedType}</h3>
                      <p className="text-sm text-gray-500">15 km away • Trade or Donate</p>
                      <Button variant="link" className="p-0 h-auto mt-1 text-green-600">
                        View Details
                      </Button>
                    </div>
                  </Card>
                  <Card className="flex">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Similar seed"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{results.seedType} - Organic</h3>
                      <p className="text-sm text-gray-500">30 km away • Trade Only</p>
                      <Button variant="link" className="p-0 h-auto mt-1 text-green-600">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

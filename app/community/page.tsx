import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ThumbsUp, Share2, User, Calendar, Eye, Filter, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Sample forum data
const forumCategories = [
  "All Topics",
  "Seed Saving",
  "Growing Tips",
  "Seed Exchange",
  "Indigenous Knowledge",
  "Climate Adaptation",
  "Success Stories",
]

const forumPosts = [
  {
    id: 1,
    title: "Best practices for saving tomato seeds",
    category: "Seed Saving",
    author: "Thabo M.",
    date: "2 days ago",
    content:
      "I've been trying different methods for saving tomato seeds and wanted to share what works best in our climate...",
    likes: 24,
    comments: 8,
    views: 156,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Indigenous seed storage techniques from Eastern Cape",
    category: "Indigenous Knowledge",
    author: "Nomsa K.",
    date: "1 week ago",
    content:
      "My grandmother taught me these traditional methods for storing seeds that have been used for generations...",
    likes: 42,
    comments: 15,
    views: 230,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Growing drought-resistant maize varieties in Limpopo",
    category: "Climate Adaptation",
    author: "John S.",
    date: "2 weeks ago",
    content:
      "After three years of testing different varieties, I've found these drought-resistant maize types perform best...",
    likes: 36,
    comments: 21,
    views: 312,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Monthly seed exchange meetup in Johannesburg",
    category: "Seed Exchange",
    author: "Lerato P.",
    date: "3 days ago",
    content: "We're organizing a monthly seed exchange meetup in Johannesburg. The first one will be held at...",
    likes: 18,
    comments: 7,
    views: 143,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    title: "How I tripled my vegetable yield using companion planting",
    category: "Growing Tips",
    author: "Sipho N.",
    date: "5 days ago",
    content:
      "I want to share my experience with companion planting that has dramatically improved my vegetable garden...",
    likes: 53,
    comments: 19,
    views: 278,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    title: "From small seeds to community food security: Our village's journey",
    category: "Success Stories",
    author: "Grace M.",
    date: "1 month ago",
    content:
      "I want to share how our village transformed from food insecurity to abundance through seed saving and sharing...",
    likes: 87,
    comments: 32,
    views: 456,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Community Forums</h1>
            <p className="text-gray-600">Connect with farmers and share knowledge about seeds and farming</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-green-600 hover:bg-green-700">New Post</Button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Input type="search" placeholder="Search forum posts..." className="pl-10" />
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
            {forumCategories.map((category) => (
              <Button
                key={category}
                variant={category === "All Topics" ? "default" : "outline"}
                size="sm"
                className={category === "All Topics" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Forum Tabs */}
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            <TabsTrigger value="my-posts">My Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="mt-0">
            <div className="space-y-6">
              {forumPosts.map((post) => (
                <ForumPostCard key={post.id} post={post} />
              ))}

              <div className="mt-8 text-center">
                <Button variant="outline" className="mx-auto">
                  Load More Posts
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="space-y-6">
              {[...forumPosts]
                .sort((a, b) => b.likes - a.likes)
                .map((post) => (
                  <ForumPostCard key={post.id} post={post} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="unanswered" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">No unanswered posts at the moment.</p>
            </div>
          </TabsContent>

          <TabsContent value="my-posts" className="mt-0">
            <div className="text-center py-12">
              <p className="text-gray-500">You need to sign in to view your posts.</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700">Sign In</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Highlights */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-green-800 mb-6">Community Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-green-100 text-green-800 p-2 rounded-md flex flex-col items-center justify-center min-w-[50px]">
                      <span className="text-sm font-bold">MAY</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Seed Exchange Meetup</h3>
                      <p className="text-sm text-gray-500">Johannesburg Community Center</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-green-100 text-green-800 p-2 rounded-md flex flex-col items-center justify-center min-w-[50px]">
                      <span className="text-sm font-bold">MAY</span>
                      <span className="text-lg font-bold">22</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Seed Saving Workshop</h3>
                      <p className="text-sm text-gray-500">Online Webinar</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-green-100 text-green-800 p-2 rounded-md flex flex-col items-center justify-center min-w-[50px]">
                      <span className="text-sm font-bold">JUN</span>
                      <span className="text-lg font-bold">05</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Indigenous Knowledge Forum</h3>
                      <p className="text-sm text-gray-500">Cape Town Agricultural Center</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 h-auto text-green-600">
                  View All Events
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">T</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Thabo M.</h3>
                      <p className="text-sm text-gray-500">124 posts · 356 comments</p>
                    </div>
                    <Badge className="bg-amber-600">Top Seed Saver</Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">N</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Nomsa K.</h3>
                      <p className="text-sm text-gray-500">98 posts · 412 comments</p>
                    </div>
                    <Badge className="bg-green-600">Knowledge Keeper</Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">J</div>
                    <div className="flex-1">
                      <h3 className="font-medium">John S.</h3>
                      <p className="text-sm text-gray-500">76 posts · 289 comments</p>
                    </div>
                    <Badge className="bg-blue-600">Climate Expert</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 h-auto text-green-600">
                  View All Contributors
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-md p-3">
                    <h3 className="font-medium">Seed Saving Guide</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Comprehensive guide for saving seeds from various crops
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Download PDF
                    </Button>
                  </div>

                  <div className="border rounded-md p-3">
                    <h3 className="font-medium">Indigenous Crop Calendar</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Seasonal planting guide for indigenous South African crops
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Download PDF
                    </Button>
                  </div>

                  <div className="border rounded-md p-3">
                    <h3 className="font-medium">Seed Quality Assessment</h3>
                    <p className="text-sm text-gray-500 mb-2">Visual guide to assessing seed quality and viability</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 h-auto text-green-600">
                  View All Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ForumPostCard({ post }: { post: (typeof forumPosts)[0] }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="hidden sm:block">
            <div className="w-16 h-16 relative rounded-md overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-lg hover:text-green-700">
                <Link href="#">{post.title}</Link>
              </h3>
              <Badge className="w-fit bg-green-600">{post.category}</Badge>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>

            <div className="flex flex-wrap items-center justify-between gap-y-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{post.views} views</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

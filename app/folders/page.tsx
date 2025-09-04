"use client"

import { useState } from "react"
import { Copy, Heart, MoreVertical, Folder, Plus, Menu } from "lucide-react"
import MobileNavigation from "@/components/mobile-navigation"
import SearchBar from "@/components/search-bar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function PromptFoldersPage() {
  const [folders] = useState([
    {
      id: 1,
      name: "Marketing Campaigns",
      color: "from-blue-400 to-purple-500",
      promptCount: 8,
      prompts: [
        {
          id: 1,
          title: "Social Media Copy",
          description: "Generate engaging social media posts for campaigns",
          emoji: "📱",
          isFavorited: true,
        },
        {
          id: 2,
          title: "Email Marketing",
          description: "Create compelling email marketing content",
          emoji: "📧",
          isFavorited: true,
        },
      ],
    },
    {
      id: 2,
      name: "Development Tools",
      color: "from-green-400 to-blue-500",
      promptCount: 5,
      prompts: [
        {
          id: 3,
          title: "Code Review Assistant",
          description: "Help review and improve code quality",
          emoji: "💻",
          isFavorited: true,
        },
        {
          id: 4,
          title: "Bug Finder",
          description: "Identify and suggest fixes for code issues",
          emoji: "🐛",
          isFavorited: true,
        },
      ],
    },
    {
      id: 3,
      name: "Creative Writing",
      color: "from-pink-400 to-red-500",
      promptCount: 12,
      prompts: [
        {
          id: 5,
          title: "Story Generator",
          description: "Create engaging short stories and narratives",
          emoji: "📚",
          isFavorited: true,
        },
        {
          id: 6,
          title: "Character Creator",
          description: "Develop detailed character profiles",
          emoji: "🎭",
          isFavorited: true,
        },
      ],
    },
  ])

  const handleSearch = (query: string) => {
    console.log("Searching folders and prompts for:", query)
    // TODO: Implement search logic for folders and prompts
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Hamburger Menu */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-black mb-2">PROMPT FOLDERS</h1>
            <p className="text-gray-600 text-lg">Organize your favorite prompts into custom folders</p>
          </div>

          <div className="flex items-center gap-3">
            <SearchBar placeholder="Search folders and prompts..." onSearch={handleSearch} />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-xl border-2 border-black bg-transparent">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="border-r-4 border-black p-0">
                <MobileNavigation />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Create New Folder Button */}
        <div className="mb-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            CREATE NEW FOLDER
          </button>
        </div>

        {/* Folders Grid */}
        <div className="space-y-8">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="bg-gray-50 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_#000]"
            >
              {/* Folder Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${folder.color} rounded-xl border-2 border-black flex items-center justify-center`}
                  >
                    <Folder className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black">{folder.name}</h2>
                    <p className="text-gray-600">{folder.promptCount} prompts</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Prompts in Folder */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {folder.prompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="bg-white border-4 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${folder.color} rounded-lg border-2 border-black flex items-center justify-center text-lg`}
                        >
                          {prompt.emoji}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-black leading-tight">{prompt.title}</h3>
                          {prompt.isFavorited && (
                            <div className="flex items-center gap-1 mt-1">
                              <Heart className="w-3 h-3 text-red-500 fill-current" />
                              <span className="text-xs text-red-500 font-bold">FAVORITED</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 text-xs leading-relaxed">{prompt.description}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-3 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 flex items-center justify-center gap-1 text-xs">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

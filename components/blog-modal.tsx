"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  blog: {
    title: string
    date: string
    image: string
    content: string
  } | null
}

export default function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  if (!blog) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</DialogTitle>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {blog.date}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <div className="aspect-video overflow-hidden rounded-lg mb-6">
            <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">{blog.content}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

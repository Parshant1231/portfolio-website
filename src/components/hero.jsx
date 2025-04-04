import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Intro() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Parshant</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Computer Science Graduate</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            A passionate developer with a strong foundation in web development and a keen interest in building
            innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <div className="w-full h-full bg-blue-100 flex items-center justify-center">
              <span className="text-6xl font-bold text-blue-600">P</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


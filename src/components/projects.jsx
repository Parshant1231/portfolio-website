import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, CreditCard } from "lucide-react"

export  function Projects() {
  const projects = [
    {
      id: 1,
      title: "Health AI Chatbot",
      description:
        "An AI-powered chatbot using the Gemini API for health-related queries with an interactive chat interface for seamless user experience.",
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      technologies: ["React", "JavaScript", "Gemini API", "CSS"],
    },
    {
      id: 2,
      title: "Simple Payment Application (Paytm Clone)",
      description:
        "A basic payment application with transaction sessions, balance display, and user-to-user payment functionality. Ensures smooth transaction handling with a simple UI.",
      icon: <CreditCard className="h-10 w-10 text-green-500" />,
      technologies: ["Node.js", "Express", "MongoDB", "React", "JavaScript"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">{project.icon}</div>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


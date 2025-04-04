import { Code, Database, Globe, Server, Cpu, Users } from "lucide-react"

export  function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 2,
      title: "Backend",
      icon: <Server className="h-8 w-8 text-green-500" />,
      skills: ["Node.js", "Express"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-8 w-8 text-purple-500" />,
      skills: ["MongoDB"],
    },
    {
      id: 4,
      title: "Programming",
      icon: <Code className="h-8 w-8 text-red-500" />,
      skills: ["JavaScript", "C++", "Python"],
    },
    {
      id: 5,
      title: "Tools",
      icon: <Cpu className="h-8 w-8 text-orange-500" />,
      skills: ["Git", "VS Code", "Postman"],
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: <Users className="h-8 w-8 text-teal-500" />,
      skills: ["Team Collaboration", "Communication", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


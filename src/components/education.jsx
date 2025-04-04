import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Sant Baba Bhag Singh University",
      location: "Punjab, India",
      period: "August 2024 - ongoing",
      icon: <GraduationCap className="h-10 w-10 text-blue-500" />,
    },
    {
      id: 2,
      degree: "Bachelor of Science (B.Sc) in Computer Science",
      institution: "Govt College, Dhaliara",
      location: "HP, India",
      period: "Graduated: 2024",
      icon: <GraduationCap className="h-10 w-10 text-green-500" />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 ${
                index !== education.length - 1 ? "pb-12 border-b border-gray-200" : ""
              }`}
            >
              <div className="flex-shrink-0 p-4 bg-gray-50 rounded-full">{item.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.degree}</h3>
                <h4 className="text-lg font-medium text-gray-700 mb-2">{item.institution}</h4>
                <p className="text-gray-600 mb-2">{item.location}</p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


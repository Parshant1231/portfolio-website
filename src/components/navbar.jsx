"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export  function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800">
          Parshant
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">
            Skills
          </a>
          <a href="#education" className="text-gray-600 hover:text-gray-900">
            Education
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Home
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#education" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Education
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}


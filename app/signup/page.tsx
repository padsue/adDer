"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log("Sign up attempt:", formData)
  }

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl p-4 bg-[#FFFFFF]/30 shadow-lg">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logo.png"
              alt="DermAI Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <p className="text-3xl font-bold text-[#C43670]">Derm</p>
            <p className="text-3xl font-bold text-[#F283AF]">AI</p>
          </div>
          <h1 className="text-2xl font-bold text-[#831843] mb-2">Create Admin Account</h1>
          <p className="text-gray-600">Join the DermAI admin platform</p>
        </div>

        {/* Sign Up Form */}
        <div className="rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="bg-white w-full px-4 py-3 border border-[#C43670] rounded-lg focus:ring-2 focus:ring-[#be185d] focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="bg-white w-full px-4 py-3 border border-[#C43670] rounded-lg focus:ring-2 focus:ring-[#be185d] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="admin@dermplatform.com"
                className="bg-white w-full px-4 py-3 border border-[#C43670] rounded-lg focus:ring-2 focus:ring-[#be185d] focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminCode" className="text-sm font-medium text-gray-700">
                Admin Access Code
              </Label>
              <Input
                id="adminCode"
                name="adminCode"
                type="text"
                value={formData.adminCode}
                onChange={handleInputChange}
                placeholder="Enter admin access code"
                className="bg-white w-full px-4 py-3 border border-[#C43670] rounded-lg focus:ring-2 focus:ring-[#be185d] focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500">Contact your system administrator for the access code</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className="bg-white w-full px-4 py-3 pr-12 border border-[#C43670] rounded-lg focus:shadow-gray-300/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="bg-white w-full px-4 py-3 pr-12 border border-[#C43670] rounded-lg focus:shadow-gray-300/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="bg-white w-4 h-4 text-[#C43670] border-[#C43670] rounded focus:ring-[#be185d] mt-1"
                required
              />
              <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="text-[#be185d] hover:text-[#831843] font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#be185d] hover:text-[#831843] font-medium">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Link href= "/dashboard">
              <Button
              type="submit"
              className="w-full bg-[#be185d] hover:bg-[#831843] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Create Admin Account
            </Button>
            </Link>
            
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an admin account?{" "}
              <Link href="/signin" className="text-[#be185d] hover:text-[#831843] font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">© 2024 DermAI. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log("Sign in attempt:", { email, password })
  }

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl p-4 bg-[#FFFFFF]/30 shadow-lg" >
        {/* Logo and Header */}
        <div className="text-center mb-4">
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
          <h1 className="text-2xl font-bold text-[#831843] mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your admin account</p>
        </div>

        {/* Sign In Form */}
        <div className="rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@dermplatform.com"
                className="bg-white w-full px-4 py-3 border border-[#C43670] rounded-lg focus:ring-2 focus:ring-[#be185d] focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-[#be185d] border-gray-300 rounded focus:ring-[#be185d]"
                />
                <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#be185d] hover:text-[#831843] font-medium">
                Forgot password?
              </Link>
            </div>

            <Link href= "/dashboard"> 
              <Button
                type="submit"
                className="w-full bg-[#be185d] hover:bg-[#831843] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Sign In
              </Button>
            </Link>
            
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an admin account?{" "}
              <Link href="/signup" className="text-[#be185d] hover:text-[#831843] font-medium">
                Sign up here
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

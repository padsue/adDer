"use client"

import {
  Bell,
  Users,
  MessageSquare,
  FileText,
  DollarSign,
  Settings,
  Activity,
  LogOut,
  ChevronDown,
  ChevronRight,
  Edit,
  File,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContentCommunicationPage() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#C43670] text-white p-6">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center mb-8">
            <p className="text-3xl font-bold text-white">Derm</p>
            <p className="text-3xl font-bold text-[#F283AF]">AI</p>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer"
          >
            <Activity className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/user-management"
            className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer"
          >
            <Users className="w-5 h-5" />
            <span>User Management</span>
          </Link>
          <div className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer">
            <MessageSquare className="w-5 h-5" />
            <span>Consultation Oversight</span>
          </div>
          <div className="text-[#C43670] bg-white bg-opacity-20 rounded-lg p-3 flex items-center gap-3">
            <FileText className="w-5 h-5" />
            <span>Content & Communication</span>
          </div>
          <div className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer">
            <DollarSign className="w-5 h-5" />
            <span>Financial Reports</span>
          </div>
          <div className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer">
            <Settings className="w-5 h-5" />
            <span>System Settings</span>
          </div>
        </nav>

        {/* System Status */}
        <div className="mt-12">
          <h3 className="text-sm font-medium mb-3">System Status</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
            <span className="text-sm">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#831843] mb-1">Super Admin Dashboard</h1>
            <p className="text-gray-600">Complete platform management and oversight</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#f59e0b] rounded-full flex items-center justify-center text-xs text-white font-medium">
                9
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-[#be185d]">Super Admin</div>
              <div className="text-xs text-gray-500">admin@dermplatform.com</div>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-[#be185d] rounded-full flex items-center justify-center text-white font-medium">
                  A
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">Super Admin</p>
                    <p className="text-xs text-gray-500">admin@dermplatform.com</p>
                  </div>
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content & Communication Management Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#831843] mb-6">Content & Communication Management</h2>

          <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl">
            <h3 className="text-lg font-semibold text-[#831843] mb-6">Content Management</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#be185d] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-[#be185d]" />
                  </div>
                  <span className="font-medium text-gray-900">Manage FAQ Section</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#be185d] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Edit className="w-4 h-4 text-[#be185d]" />
                  </div>
                  <span className="font-medium text-gray-900">Edit Terms of Use</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#be185d] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <File className="w-4 h-4 text-[#be185d]" />
                  </div>
                  <span className="font-medium text-gray-900">Update About Page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

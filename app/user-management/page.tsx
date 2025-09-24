"use client"

import {
  Bell,
  Users,
  MessageSquare,
  FileText,
  DollarSign,
  Settings,
  Activity,
  ChevronDown,
  LogOut,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function UserManagement() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const users = [
    {
      name: "Dr. Sarah Johnson",
      email: "sarah@dermclinic.com",
      type: "dermatologist",
      status: "active",
      joinDate: "2024-01-15",
      consultations: 234,
    },
    {
      name: "John Smith",
      email: "john@email.com",
      type: "patient",
      status: "active",
      joinDate: "2024-02-20",
      consultations: 12,
    },
    {
      name: "Dr. Michael Chen",
      email: "mchen@skincare.com",
      type: "dermatologist",
      status: "suspended",
      joinDate: "2024-01-08",
      consultations: 189,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-[#10b981] bg-opacity-20 text-[#10b981]"
      case "suspended":
        return "bg-[#f59e0b] bg-opacity-20 text-[#f59e0b]"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "dermatologist":
        return "bg-[#10b981] bg-opacity-20 text-[#10b981]"
      case "patient":
        return "bg-[#ec4899] bg-opacity-20 text-[#ec4899]"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

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
            className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer "
          >
            <Activity className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/user-management"
            className="text-[#C43670] bg-white bg-opacity-20 rounded-lg p-3 flex items-center gap-3"
          >
            <Users className="w-5 h-5" />
            <span>User Management</span>
          </Link>
          <Link
            href="/consultation-oversight"
            className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Consultation Oversight</span>
          </Link>
          <Link
            href="/content-communication"
            className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer"
          >
            <FileText className="w-5 h-5" />
            <span>Content & Communication</span>
          </Link>
          <Link
            href="/financial-reports"
            className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer"
          >
            <DollarSign className="w-5 h-5" />
            <span>Financial Reports</span>
          </Link>
          <Link
            href="/system-settings"
            className="p-3 flex items-center gap-3 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer"
          >
            <Settings className="w-5 h-5" />
            <span>System Settings</span>
          </Link>
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

        <div className="bg-white rounded-xl shadow-sm">
          {/* User Management Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#be185d]" />
              <h2 className="text-xl font-semibold text-[#831843]">User & Dermatologist Management</h2>
            </div>
            <button className="bg-[#be185d] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#831843] transition-colors">
              <Plus className="w-4 h-4" />
              Add New User
            </button>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Join Date</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Consultations</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="p-4 text-sm text-gray-600">{user.email}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(user.type)}`}>
                        {user.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{user.joinDate}</td>
                    <td className="p-4 text-sm text-gray-600">{user.consultations}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-xs px-2 py-1 rounded hover:bg-blue-50">
                          Edit
                        </button>
                        <button className="text-[#f59e0b] hover:text-[#d97706] text-xs px-2 py-1 rounded hover:bg-yellow-50">
                          Suspend
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-xs px-2 py-1 rounded hover:bg-red-50">
                          Delete
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-xs px-2 py-1 rounded hover:bg-gray-50">
                          Reset Password
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

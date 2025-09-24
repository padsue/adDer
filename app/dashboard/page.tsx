"use client"

import {
  Bell,
  Users,
  MessageSquare,
  FileText,
  DollarSign,
  Settings,
  Activity,
  Clock,
  Zap,
  AlertTriangle,
  LogOut,
  ChevronDown,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DermAIDashboard() {
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
          <div className="text-[#C43670] bg-white bg-opacity-20 rounded-lg p-3 flex items-center gap-3">
            <Activity className="w-5 h-5" />
            <span>Dashboard</span>
          </div>
          <Link
            href="/user-management"
            className="p-3 flex items-center gap-3 hover:bg-white/50  rounded-lg cursor-pointer"
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
          <div className="p-3 flex items-center gap-3 hover:bg-white/50 rounded-lg cursor-pointer">
            <DollarSign className="w-5 h-5" />
            <span>Financial Reports</span>
          </div>
          <div className="p-3 flex items-center gap-3 hover:bg-white/50  rounded-lg cursor-pointer">
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
        <div className="space-y-8">
          {/* --- Top Row Cards --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Dermatologists */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#be185d] font-medium mb-1">Total Dermatologists</p>
                <p className="text-3xl font-bold text-[#831843]">128</p>
              </div>
              <div className="mt-4 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-[#be185d]" />
              </div>
            </div>

            {/* Total Patients */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#be185d] font-medium mb-1">Total Patients</p>
                <p className="text-3xl font-bold text-[#831843]">1,542</p>
              </div>
              <div className="mt-4 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            {/* Total Consultations */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#be185d] font-medium mb-1">Total Consultations</p>
                <p className="text-3xl font-bold text-[#831843]">3,287</p>
              </div>
              <div className="mt-4 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
            </div>

            {/* System Alerts (summary card) */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#be185d] font-medium mb-1">System Alerts</p>
                <p className="text-3xl font-bold text-[#831843]">3</p>
              </div>
              <div className="mt-4 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* --- Bottom Row Cards --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Platform Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              {/* Section Header */}
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-[#be185d]" />
                <h2 className="text-lg font-semibold text-[#831843]">Today's Platform Activity</h2>
              </div>

              {/* Activity Stats */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Consultations Today */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#be185d] font-medium mb-1">Consultations Today</p>
                      <p className="text-xl font-bold text-[#831843]">156</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Activity className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  {/* Peak Hours */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#be185d] font-medium mb-1">Peak Hours</p>
                      <p className="text-lg font-bold text-[#831843]">2:00 PM - 4:00 PM</p>
                    </div>
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-red-600" />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Active Users */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#be185d] font-medium mb-1">Active Users</p>
                      <p className="text-xl font-bold text-[#831843]">89</p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                  </div>

                  {/* Avg Response Time */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#be185d] font-medium mb-1">Avg Response Time</p>
                      <p className="text-lg font-bold text-[#831843]">12 minutes</p>
                    </div>
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Alerts & Escalations */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              {/* Section Header */}
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-[#be185d]" />
                <h2 className="text-lg font-semibold text-[#831843]">System Alerts & Escalations</h2>
              </div>

              {/* Alerts List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                  <p className="text-sm text-red-700 font-medium">High Server Load Detected</p>
                  <span className="text-xs text-red-600 font-semibold">Critical</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <p className="text-sm text-yellow-700 font-medium">Minor Latency Issues</p>
                  <span className="text-xs text-yellow-600 font-semibold">Warning</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <p className="text-sm text-green-700 font-medium">All Systems Operational</p>
                  <span className="text-xs text-green-600 font-semibold">Stable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

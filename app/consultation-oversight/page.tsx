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
  ChevronDown,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ConsultationOversight() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const consultations = [
    {
      patient: "John Smith",
      dermatologist: "Dr. Sarah Johnson",
      dateTime: "2024-03-15 3:30 PM",
      type: "Acne Treatment",
      status: "completed",
      revenue: "$150",
    },
    {
      patient: "Emma Wilson",
      dermatologist: "Dr. Michael Chen",
      dateTime: "2024-03-15 3:45 PM",
      type: "Skin Cancer Screening",
      status: "ongoing",
      revenue: "$200",
    },
    {
      patient: "David Brown",
      dermatologist: "Dr. Sarah Johnson",
      dateTime: "2024-03-14 1:15 PM",
      type: "Eczema Consultation",
      status: "disputed",
      revenue: "$120",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "ongoing":
        return "bg-blue-100 text-blue-800"
      case "disputed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
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
          
          <div className="text-[#C43670] bg-white bg-opacity-20 rounded-lg p-3 flex items-center gap-3">
            <MessageSquare className="w-5 h-5" />
            <span>Consultation Oversight</span>
          </div>
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
            <h1 className="text-2xl font-bold text-[#831843] mb-1">Consultation Oversight</h1>
            <p className="text-gray-600">Monitor and manage all platform consultations</p>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Today</p>
                <p className="text-3xl font-bold text-[#831843]">156</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ongoing Sessions</p>
                <p className="text-3xl font-bold text-[#831843]">23</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Disputed Cases</p>
                <p className="text-3xl font-bold text-[#f59e0b]">2</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Consultations Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Patient</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Dermatologist</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Date & Time</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Type</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Revenue</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {consultations.map((consultation, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6 text-sm text-gray-900">{consultation.patient}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{consultation.dermatologist}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{consultation.dateTime}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{consultation.type}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusBadge(consultation.status)}`}
                      >
                        {consultation.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{consultation.revenue}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="text-[#be185d] hover:text-[#831843] text-sm font-medium">View</button>
                        {consultation.status === "disputed" && (
                          <button className="text-[#f59e0b] hover:text-[#d97706] text-sm font-medium">
                            Reschedule
                          </button>
                        )}
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

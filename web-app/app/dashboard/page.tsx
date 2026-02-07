import { BatchCard } from "@/components/BatchCard";
import { Button } from "@/components/ui/button";
import {
  Users,
  IndianRupee,
  MessageSquare,
  PlusCircle,
  Clock,
  ClipboardList,
  MoreVertical,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const stats = [
    {
      title: "Students",
      value: "1,250",
      icon: Users,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Fee Due",
      value: "₹ 45k",
      icon: IndianRupee,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Tests",
      value: "3",
      icon: ClipboardList,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "SMS Left",
      value: "4.5k",
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const batches = [
    {
      name: "Class 10 - Math",
      subject: "Math",
      time: "10:00 AM",
      students: 45,
    },
    {
      name: "Class 12 - Physics",
      subject: "Physics",
      time: "11:30 AM",
      students: 32,
    },
    {
      name: "Class 9 - Science",
      subject: "Science",
      time: "04:00 PM",
      students: 50,
    },
    {
      name: "Class 11 - Chemistry",
      subject: "Chemistry",
      time: "06:00 PM",
      students: 28,
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-0">
      {/* Header / Welcome */}
      <div className="flex items-center justify-between px-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500">Welcome, Vijay Institute</p>
        </div>
        <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
          <Plus className="mr-1 h-4 w-4" /> Add Batch
        </Button>
      </div>

      {/* Stats Summary - Mobile Friendly Horizontal Scroll or Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 px-2">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-lg border bg-white p-4 text-center shadow-sm"
          >
            <div
              className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full ${stat.color}`}
            >
              <stat.icon className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-gray-900">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500">{stat.title}</span>
          </div>
        ))}
      </div>

      {/* Recent Batches Section */}
      <div className="px-2">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Your Batches</h3>
          <Link
            href="/dashboard/batches"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-xl border bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              {/* Batch Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{batch.name}</h4>
                  <p className="text-sm text-gray-500">{batch.subject}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-gray-600"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              {/* Batch Meta */}
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>{batch.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-green-500" />
                  <span>{batch.students} Students</span>
                </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="mt-5 grid grid-cols-3 gap-2 border-t pt-4">
                <Link href="/dashboard/attendance">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-blue-100 bg-blue-50 px-2 text-xs text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                  >
                    <Users className="mr-1.5 h-3.5 w-3.5" /> Attend
                  </Button>
                </Link>
                <Link href="/dashboard/fees">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-green-100 bg-green-50 px-2 text-xs text-green-700 hover:bg-green-100 hover:text-green-800"
                  >
                    <IndianRupee className="mr-1.5 h-3.5 w-3.5" /> Fees
                  </Button>
                </Link>
                <Link href="/dashboard/sms">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-orange-100 bg-orange-50 px-2 text-xs text-orange-700 hover:bg-orange-100 hover:text-orange-800"
                  >
                    <MessageSquare className="mr-1.5 h-3.5 w-3.5" /> SMS
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          {/* Add New Batch Card */}
          <button className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-gray-400 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600">
            <PlusCircle className="mb-2 h-8 w-8" />
            <span className="font-medium">Create New Batch</span>
          </button>
        </div>
      </div>
    </div>
  );
}

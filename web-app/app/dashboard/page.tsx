import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  IndianRupee,
  MessageSquare,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,250",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Fees Collected",
      value: "₹ 45,000",
      icon: IndianRupee,
      color: "text-green-600",
    },
    {
      title: "SMS Balance",
      value: "4,500",
      icon: MessageSquare,
      color: "text-orange-600",
    },
    {
      title: "Pending Tests",
      value: "3",
      icon: FileText,
      color: "text-purple-600",
    },
  ];

  const recentBatches = [
    { name: "Class 10 - Math", time: "10:00 AM", students: 45 },
    { name: "Class 12 - Physics", time: "11:30 AM", students: 32 },
    { name: "Class 9 - Science", time: "04:00 PM", students: 50 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h2>
          <p className="text-muted-foreground">Welcome back, Vijay Institute</p>
        </div>
        <Button className="hidden md:flex bg-blue-700 hover:bg-blue-800">
          <Plus className="mr-2 h-4 w-4" /> New Batch
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                +20% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Actions / Quick Links */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Actions Card */}
        <Card className="col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Button
              variant="outline"
              className="flex h-24 flex-col items-center justify-center gap-2 border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
            >
              <Users className="h-6 w-6" />
              <span>Attendance</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-24 flex-col items-center justify-center gap-2 border-green-100 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800"
            >
              <IndianRupee className="h-6 w-6" />
              <span>Collect Fee</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-24 flex-col items-center justify-center gap-2 border-purple-100 bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
            >
              <FileText className="h-6 w-6" />
              <span>Add Marks</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-24 flex-col items-center justify-center gap-2 border-orange-100 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Bulk SMS</span>
            </Button>
          </CardContent>
        </Card>

        {/* Batches List */}
        <Card className="col-span-2 lg:col-span-1 shadow-sm">
          <CardHeader>
            <CardTitle>Today's Batches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBatches.map((batch, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">{batch.name}</p>
                    <p className="text-sm text-gray-500">{batch.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {batch.students} Students
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 w-full text-blue-600">
              View All Batches
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

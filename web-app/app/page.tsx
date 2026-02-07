import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Smartphone, Shield, Download, Star } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-blue-700" />
            <span className="text-xl font-bold tracking-tight text-blue-900">
              Teachers App
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Log In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                Revolutionary Attendance Management
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Manage your institute on the go.
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl">
                Forget the bunch of registers. Track attendance, manage fees,
                and send automatic SMS alerts—all from your Android phone.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white gap-2 h-12"
                >
                  <Download className="h-5 w-5" />
                  Download for Android
                </Button>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 bg-blue-50 text-blue-700 h-12 hover:bg-blue-100"
                  >
                    SMS Login
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[350px]">
              {/* App Screenshot */}
              <div className="relative rounded-[2rem] border-8 border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
                 <div className="aspect-[9/18] bg-white w-full flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="./screenshots/1.jpeg" alt="Teachers App Interface" className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to run your coaching class efficiently.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Smart Attendance",
                desc: "Track student attendance on mobile devices instantly.",
              },
              {
                title: "Fee Management",
                desc: "Record payments and send automated fee reminders with one click.",
              },
              {
                title: "Test Results",
                desc: "Manage test marks and send scores via SMS to parents.",
              },
              {
                title: "Bulk SMS",
                desc: "Promote your institute or send alerts using integrated SMS service.",
              },
              {
                title: "Offline Mode",
                desc: "Fully offline capable. Data is stored locally on your phone.",
              },
              {
                title: "Excel Export",
                desc: "Export class data in CSV format for editing in MS Excel.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-start rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start with a one-month free trial. No credit card required.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-10 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Standard</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  ₹1000
                </span>
                <span className="ml-1 text-sm font-semibold text-gray-500">
                  /year
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Ideally for individual teachers.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 1
                  Device License
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                  Unlimited Students
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> All
                  Core Features
                </li>
              </ul>
              <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700">
                Buy License
              </Button>
            </div>

            {/* Combo Pack */}
            <div className="flex flex-col rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-lg relative">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900">Combo Pack</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  ₹2100
                </span>
                <span className="ml-1 text-sm font-semibold text-gray-500">
                  /year
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Best value for growing institutes.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 1 Year
                  App License
                </li>
                <li className="flex items-center text-sm font-semibold text-blue-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-blue-500" /> 5,000
                  SMS Credits
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                  Priority Support
                </li>
              </ul>
              <Button className="mt-8 w-full bg-blue-700 hover:bg-blue-800">
                Get Combo
              </Button>
            </div>

            {/* Bulk SMS */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">SMS Pack</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  ₹1100
                </span>
                <span className="ml-1 text-sm font-semibold text-gray-500">
                  /5k SMS
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Top up your messages anytime.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 3 Year
                  Validity
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 22
                  paisa/SMS
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> High
                  Delivery Rate
                </li>
              </ul>
              <Button variant="outline" className="mt-8 w-full">
                View Bulk Rates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">
                  Teachers App
                </span>
              </div>
              <p className="text-sm">
                Manage your institute efficiently with our mobile-first
                solution.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">
                303, Sapphire Square, Tower Square, Indore, India.
              </p>
              <p className="text-sm mb-2">info@teachersapp.in</p>
              <p className="text-sm">+91 8770440466</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Developer</h4>
              <p className="text-sm">Vijay Dembla</p>
              <p className="text-xs text-gray-500 mt-1">
                Software Engineer & Management Teacher
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Teachers App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
/ /   U p d a t e  
 
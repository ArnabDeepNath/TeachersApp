"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="space-y-6 pb-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upgrade your plan</h2>
        <p className="mt-4 text-lg text-gray-600">Choose the best plan for your institute.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8 max-w-5xl mx-auto">
        {/* Standard Plan */}
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Standard</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-extrabold tracking-tight">₹1000</span>
            <span className="ml-1 text-sm font-semibold text-gray-500">/year</span>
          </div>
          <p className="mt-4 text-gray-600 text-sm">Ideally for individual teachers.</p>
          <ul className="mt-6 space-y-3 flex-1">
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 1 Device License
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Unlimited Students
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> All Core Features
            </li>
          </ul>
          <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700">Buy License</Button>
        </div>

        {/* Combo Pack */}
        <div className="flex flex-col rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-lg relative">
          <div className="absolute top-0 right-0 -mr-2 -mt-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">Popular</div>
          <h3 className="text-xl font-bold text-gray-900">Combo Pack</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-extrabold tracking-tight">₹2100</span>
            <span className="ml-1 text-sm font-semibold text-gray-500">/year</span>
          </div>
          <p className="mt-4 text-gray-600 text-sm">Best value for growing institutes.</p>
          <ul className="mt-6 space-y-3 flex-1">
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 1 Year App License
            </li>
            <li className="flex items-center text-sm font-semibold text-blue-700">
              <CheckCircle className="mr-2 h-4 w-4 text-blue-500" /> 5,000 SMS Credits
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Priority Support
            </li>
          </ul>
          <Button className="mt-8 w-full bg-blue-700 hover:bg-blue-800">Get Combo</Button>
        </div>

        {/* Bulk SMS */}
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">SMS Pack</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-extrabold tracking-tight">₹1100</span>
            <span className="ml-1 text-sm font-semibold text-gray-500">/5k SMS</span>
          </div>
          <p className="mt-4 text-gray-600 text-sm">Top up your messages anytime.</p>
          <ul className="mt-6 space-y-3 flex-1">
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 3 Year Validity
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> 22 paisa/SMS
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> High Delivery Rate
            </li>
          </ul>
          <Button variant="outline" className="mt-8 w-full">View Bulk Rates</Button>
        </div>
      </div>
    </div>
  );
}

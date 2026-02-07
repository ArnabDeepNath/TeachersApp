"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";
import { useState } from "react";

// Mock Data
const batches = [
  { id: "b1", name: "Class 10 - Math" },
  { id: "b2", name: "Class 12 - Physics" },
];

const mockStudents = [
  { id: "s1", name: "Aarav Sharma", roll: "101", phone: "9876543210" },
  { id: "s2", name: "Vihaan Gupta", roll: "102", phone: "9876543211" },
  { id: "s3", name: "Aditya Patel", roll: "103", phone: "9876543212" },
  { id: "s4", name: "Sai Kumar", roll: "104", phone: "9876543213" },
  { id: "s5", name: "Reyansh Singh", roll: "105", phone: "9876543214" },
];

export default function AttendancePage() {
  const [selectedBatch, setSelectedBatch] = useState(batches[0].id);
  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    mockStudents.reduce((acc, s) => ({ ...acc, [s.id]: true }), {})
  );
  const [sendSms, setSendSms] = useState(true);

  const toggleAttendance = (id: string) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = async () => {
    const absentees = mockStudents.filter((s) => !attendance[s.id]);
    const presentCount = Object.values(attendance).filter(Boolean).length;
    
    // Mock API Call
    console.log("Submitting Attendance", {
      batchId: selectedBatch,
      present: presentCount,
      absent: absentees.length,
      sendSms,
    });

    alert(
      `Attendance Saved!\nPresent: ${presentCount}\nAbsent: ${absentees.length}\n${
        sendSms ? "SMS sent to absentees." : "SMS not sent."
      }`
    );
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col gap-4 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:rounded-lg">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Mark Attendance</h2>
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center gap-2">
           <select 
             className="w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
             value={selectedBatch} 
             onChange={(e) => setSelectedBatch(e.target.value)}
           >
              <option value="" disabled>Select Batch</option>
              {batches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
           </select>
        </div>
      </div>

      {/* Student List */}
      <div className="rounded-lg border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b p-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search student..."
              className="pl-9"
            />
          </div>
          <div className="hidden text-sm text-gray-500 md:block">
            Total: {mockStudents.length}
          </div>
        </div>

        <div className="divide-y">
          {mockStudents.map((student) => {
            const isPresent = attendance[student.id];
            return (
              <div
                key={student.id}
                className={`flex items-center justify-between p-4 transition-colors ${
                  !isPresent ? "bg-red-50" : "hover:bg-gray-50"
                }`}
                onClick={() => toggleAttendance(student.id)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      isPresent
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.roll}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <p className="text-xs text-gray-500">+91 {student.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isPresent
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {isPresent ? "Present" : "Absent"}
                  </div>
                  {/* <Checkbox checked={isPresent} onCheckedChange={() => toggleAttendance(student.id)} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 shadow-lg md:relative md:border-0 md:bg-transparent md:p-0 md:shadow-none">
        <div className="container mx-auto flex max-w-4xl items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                 <input
                    type="checkbox"
                    id="send-sms"
                    checked={sendSms}
                    onChange={(e) => setSendSms(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                 />
                 <label htmlFor="send-sms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Send SMS to Absentees
                 </label>
            </div>
            
            <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800 gap-2">
                <Send className="h-4 w-4" /> Save Attendance
            </Button>
        </div>
      </div>
    </div>
  );
}

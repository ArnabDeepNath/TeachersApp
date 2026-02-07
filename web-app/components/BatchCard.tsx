import { Button } from "./ui/button";
import {
  Users,
  IndianRupee,
  ClipboardList,
  MessageSquare,
  Clock,
  MoreVertical,
} from "lucide-react";
import Link from "next/link";

interface BatchProps {
  name: string;
  subject: string;
  schedule: string;
  studentCount: number;
}

export function BatchCard({
  name,
  subject,
  schedule,
  studentCount,
}: BatchProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm font-medium text-blue-600">{subject}</p>
        </div>
        <Button variant="ghost" size="icon" className="-mr-2 text-gray-400">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      {/* Details */}
      <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{schedule}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{studentCount} Students</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-4 divide-x border-t pt-3">
        <Link
          href="/attendance"
          className="flex flex-col items-center gap-1 text-center hover:bg-gray-50"
        >
          <Users className="h-5 w-5 text-blue-600" />
          <span className="text-[10px] font-medium text-gray-600">Attend</span>
        </Link>
        <Link
          href="/fees"
          className="flex flex-col items-center gap-1 text-center hover:bg-gray-50"
        >
          <IndianRupee className="h-5 w-5 text-green-600" />
          <span className="text-[10px] font-medium text-gray-600">Fees</span>
        </Link>
        <Link
          href="/tests"
          className="flex flex-col items-center gap-1 text-center hover:bg-gray-50"
        >
          <ClipboardList className="h-5 w-5 text-purple-600" />
          <span className="text-[10px] font-medium text-gray-600">Tests</span>
        </Link>
        <Link
          href="/sms"
          className="flex flex-col items-center gap-1 text-center hover:bg-gray-50"
        >
          <MessageSquare className="h-5 w-5 text-orange-600" />
          <span className="text-[10px] font-medium text-gray-600">SMS</span>
        </Link>
      </div>
    </div>
  );
}

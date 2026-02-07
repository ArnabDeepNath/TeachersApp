import { Menu, Search, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

export function Header({
  title,
  onMenuClick,
}: {
  title: string;
  onMenuClick?: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between bg-blue-700 px-4 text-white shadow-md">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600"
        >
          <Search className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-600"
        >
          <MoreVertical className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}

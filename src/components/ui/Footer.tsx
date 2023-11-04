import { CopyrightIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center h-20 mb-2">
      <div className="flex gap-2 items-center">
        <CopyrightIcon size={16} />
        <p className="text-lg font-bold">
          2023 Zenith Hub. all rights reserved.
        </p>
      </div>
    </footer>
  );
}

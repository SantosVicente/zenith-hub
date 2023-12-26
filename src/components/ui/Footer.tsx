import { CopyrightIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex gap-2 items-center h-full justify-center">
      <CopyrightIcon size={16} />
      <p className="text-base sm:text-lg font-bold">
        2023 Zenith Hub. all rights reserved.
      </p>
    </footer>
  );
}

// PathName.tsx (client)
"use client";
import { usePathname } from "next/navigation";

export default function PathName() {
  const pathName = usePathname();
  return <div className="mb-5">Current path: {pathName}</div>;
}

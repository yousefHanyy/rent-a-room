import Link from "next/link";
import PathName from "./PathName";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Category" },
  { href: "/products", label: "Products" },
];

export default function Navbar() {
  return (
    <>
      <ul className="flex justify-around">
        {navLinks.map((link) => (
          <li className="p-3 hover:underline " key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <PathName />
    </>
  );
}

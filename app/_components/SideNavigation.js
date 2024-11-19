import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "My learning",
    href: "/account/enrollments",
    icon: <MdLaptopChromebook />,
  },
];

export default function SideNavigation() {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col h-full gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import { auth } from "../_lib/auth";

async function Navbar() {
  const session = await auth();

  const linkStyle =
    "text-grayishBlue hover:text-white text-lg font-medium cursor-pointer";

  return (
    <nav className={` w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-grayishBlue text-[18px] font-bold cursor-pointer flex">
            Galaxia
          </p>
        </Link>
        <ul className="flex-row hidden gap-5 list-none sm:flex">
          <li className={linkStyle}>
            <Link href="/courses">
              <button className="px-4 py-1">Courses</button>
            </Link>
          </li>

          {session?.user && (
            <li className={linkStyle}>
              <Link href="/account">
                <div className="flex items-center gap-1">
                  <img
                    referrerPolicy="no-referrer"
                    className="h-8 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                  />
                  <p>{session.user.name}</p>
                </div>
              </Link>
            </li>
          )}

          {!session?.user && (
            <li className={linkStyle}>
              <Link href="/api/auth/signin">
                <button
                  className="relative px-4 py-1 text-white font-semibold text-lg 
             rounded-lg overflow-hidden shadow-lg
             bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 
             before:content-[''] before:absolute before:inset-0 before:bg-stars 
             hover:before:animate-stars-glow
             hover:shadow-[0px_0px_15px_rgba(130,0,255,0.7)] 
             transition duration-300 ease-in-out"
                >
                  Sign In
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

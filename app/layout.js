import "@/app/_styles/globals.css";
import Navbar from "./_components/Navbar";
import { StarsCanvas } from "./_canvas";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export const metadata = {
  title: "Galaxia courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="relative z-0">
          <Navbar />
          {children}
          {/* <StarsCanvas /> */}
        </div>
      </body>
    </html>
  );
}

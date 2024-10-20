import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashritha Battula",
  description:
    "Master's Student in Computer Science, Avid Programmer, Nature Enthusiast, Passionate Software Developer,Specialist in Web Development, Data Enthusiast,AI Explorer and and a Culinary Adventurer blending flavors and code!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


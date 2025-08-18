import { DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ThemeProvider from "./theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Explore Singapore Tours | Discover Amazing Destinations",
  description:
    "Discover the best Singapore tours and attractions with our comprehensive travel guide. Expert recommendations for unforgettable experiences.",
  keywords: "Singapore tours, travel, attractions, tourism",
  authors: [{ name: "Raktch Technology & Software" }],
  openGraph: {
    title: "Explore Singapore Tours",
    description: "Discover the best Singapore tours and attractions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>
          
        <div className="min-h-screen flex flex-col">
          <section className=" sticky top-0" >
            <Navbar />
          </section>

          <main className="min-h-screen bg-white  " >{children}</main>

          <footer >
            <Footer />
          </footer>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

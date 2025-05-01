// --- Let's refine based on common Next.js patterns --- 
// It's more common to put providers *inside* the body and wrap the actual page content.
// The Layout component itself often handles Header/Footer.

// Revised RootLayout:

import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header"; // Import Header directly
import Footer from "@/components/Footer"; // Import Footer directly

const inter = Inter({ subsets: ["latin"] });

// Enhanced Metadata for SEO
export const metadata = {
  metadataBase: new URL('http://localhost:3001'), // Replace with actual domain upon deployment
  title: {
    default: 'Books.shyamnagar - Discount beyond your expectations',
    template: '%s | Books.shyamnagar',
  },
  description: "Shop Books.shyamnagar for great discounts on books, skincare, instruments, gifts, experimental items, and more. Discount beyond your expectations.",
  keywords: ["books", "skincare", "instruments", "gifts", "experimental items", "online shopping", "discount store", "Shyamnagar", "Kolkata"],
  // Open Graph tags for social sharing
  openGraph: {
    title: 'Books.shyamnagar - Discount beyond your expectations',
    description: 'Find amazing deals on a variety of products.',
    // url: 'https://yourdomain.com', // Replace with actual domain
    siteName: 'Books.shyamnagar',
    // images: [ // Add a default image for sharing
    //   {
    //     url: '/images/og-image.jpg', // Path to your Open Graph image
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  // Optional: Twitter card metadata
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Books.shyamnagar - Discount beyond your expectations',
  //   description: 'Find amazing deals on a variety of products.',
  //   // images: ['/images/twitter-image.jpg'], // Path to your Twitter image
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}> {/* Added light bg */}
        <CartProvider> {/* Provider wraps components that need the context */}
          <Header />
          <main className="flex-grow">
            {children} {/* Page content goes here */}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}


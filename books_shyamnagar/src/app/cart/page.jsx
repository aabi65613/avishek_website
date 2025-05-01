"use client"; // Add this directive because CartPageContent uses the useCart hook

import Layout from "@/components/Layout"; // Layout might not be needed if using root layout
import CartPageContent from "@/components/CartPageContent";

// Note: The root layout.jsx already includes Header and Footer.
// If Layout component is just a wrapper without additional structure, 
// we might not need it here. Let's assume CartPageContent is the main content.

export default function CartPage() {
  return (
    // <Layout> // Remove Layout wrapper if root layout handles structure
      <CartPageContent />
    // </Layout>
  );
}


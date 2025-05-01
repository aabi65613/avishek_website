// This component might be redundant if the root layout handles Header/Footer.
// For now, let's make it just pass children through.

const Layout = ({ children }) => {
  // The root layout (src/app/layout.jsx) already includes Header and Footer.
  // This component should likely just return the children or be removed.
  return <>{children}</>; 
};

export default Layout;


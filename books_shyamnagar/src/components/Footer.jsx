const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="font-semibold">Contact Us:</p>
          <p>Address: Shyamnagar, Laxmiraya Club, Kolkata</p>
          <p>Phone: 7059068366</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Books.shyamnagar. All rights reserved.</p>
        <p className="text-sm mt-2">Discount beyond your expectations.</p>
        <p className="text-xs mt-4">Made by Manus AI</p> 
      </div>
    </footer>
  );
};

export default Footer;


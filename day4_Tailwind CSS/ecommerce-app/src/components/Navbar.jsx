import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">

      <div className="flex justify-between">

        <h1 className="font-bold text-xl">
          ShopEasy
        </h1>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart</a>
        </div>

      </div>

      {open && (
        <div className="flex flex-col mt-3 gap-2 md:hidden">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart</a>
        </div>
      )}

    </nav>
  );
}
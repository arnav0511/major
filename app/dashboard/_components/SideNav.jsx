"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Sidenav() {
  const [isOpen, setIsOpen] = useState(true);
  const MenuList = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "History",
      path: "/dashboard/history",
    },
    {
      name: "Account Settings",
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  return (
    <div
      className={`fixed h-screen bg-[#F5F5DC] text-[#2F4F4F] p-4 flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}
    >
      {/* Toggle Button */}
      <button
        className={`absolute top-4 right-4 p-2 text-[#FFA500] bg-[#F5F5DC] rounded-full border border-[#FFA500] hover:bg-[#FFA500] hover:text-[#F5F5DC] hover:border-[#F5F5DC] transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">{isOpen ? '...' : '...'}</span>
      </button>

      {/* Menu Section */}
      <nav className="flex flex-col flex-grow mt-8 space-y-4">
        {MenuList.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={`flex items-center p-4 text-lg font-semibold rounded-md transition-colors ${path === menu.path ? 'bg-[#FFA500] text-white shadow-lg' : 'hover:bg-[#20B2AA] hover:text-white'} ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            {isOpen && <span className="ml-2">{menu.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Home Button */}
      <div className="mt-auto flex justify-center">
        <Link href="/" passHref>
          <button
            className={`p-2 text-[#FFA500] bg-[#F5F5DC] rounded-full border border-[#FFA500] transition-colors hover:bg-[#FFA500] hover:text-white ${isOpen ? 'w-12' : 'w-10'} flex items-center justify-center`}
          >
            <span className="material-icons">home</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;

import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-900 text-white">
      <div className="text-2xl font-bold">Kairos</div>

      <nav className="flex gap-4">
        <a>Home</a>
        <a>Anime List</a>
      </nav>

      <div className="flex gap-2">
        <input type="text" placeholder="Search anime..." className="px-3 py-1 rounded-md text-black" />
        {/* <Button>Search</Button> */}
      </div>
    </header>
  );
}

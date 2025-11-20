import React from "react";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-950">
      {/* <div className="max-w-[1920px] h-16 mx-auto w-full flex justify-between items-center gap-12 py-2 px-16"> */}
      <div className="max-w-[1920px] h-16 mx-auto w-full flex justify-between items-center gap-12">
        <div className="flex items-center w-full gap-12">
          <h1 className="text-white text-2xl font-medium">
            Kairos
          </h1>
          {/* <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo Image"
            className=""
          /> */}

          <div className="flex items-center w-full relative">
            <Search className="absolute text-white ml-2" size={20} />
            <input
              type="text"
              placeholder="Search anime..."
              className="max-w-[520px] w-full bg-neutral-800 text-white px-10 py-2 placeholder-white rounded-md"
            />
          </div>
        </div>

        <nav className="flex justify-end items-center w-full gap-8 [&>a]:text-white [&>a]:font-medium">
          <a>Home</a>
          <a>Anime List</a>
          <a>Page 3</a>
          <a>Page 4</a>
        </nav>
      </div>
    </header>
  );
}

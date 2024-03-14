"use client";

import { DrawerProvider } from "@/context/DrawerContext";
import { AddNew, DownArrow, MenuIcon, UploadIcon } from "@/utils/icons/Icons";
import { useContext } from "react";

const Header = () => {
  const { drawer, setDrawer } = useContext(DrawerProvider);

  return (
    <>
      <header className="w-full">
        <div className="w-full h-[62px] flex justify-between sm:justify-start items-center text-white p-[8px]">
          <button
            className="sm:hidden text-[25px]"
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </button>
          {drawer ? (
            ""
          ) : (
            <button>
              <AddNew />
            </button>
          )}
          <h1 className="px-[8px] py-[12px] hover:bg-onHover rounded-lg cursor-pointer flex gap-2 items-center lg:mr-auto font-semibold">
            ChatGPT <span className="font-normal text-[#9b9b9b]">3.5</span>{" "}
            <DownArrow color="#9b9b9b" />
          </h1>
          <button className="bg-onHover border rounded p-1 border-gray-700">
            <UploadIcon />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

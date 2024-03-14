"use client";

import { DrawerProvider } from "@/context/DrawerContext";
import { AddNew, MenuIcon } from "@/utils/icons/Icons";
import { useContext } from "react";

const Header = () => {
  const { drawer, setDrawer } = useContext(DrawerProvider);

  return (
    <>
      <header className="relative lg:sticky top-0 w-full flex justify-between items-center px-2">
        <div className="block lg:hidden">
          <button onClick={() => setDrawer(true)}>
            <MenuIcon />
          </button>
        </div>
        <div>
          <button className="py-2 px-3">
            <p>
              ChatGPT <span>3.5</span>
            </p>
          </button>
        </div>
        <div>
          <AddNew />
        </div>
      </header>
    </>
  );
};

export default Header;

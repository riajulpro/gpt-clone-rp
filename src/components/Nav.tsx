"use client";

import { DrawerProvider } from "@/context/DrawerContext";
import {
  AddNew,
  ChatGPTLogo,
  CloseIcon,
  UpgradeIcon,
} from "@/utils/icons/Icons";
import Image from "next/image";
import { useContext } from "react";

const Nav = () => {
  const { drawer, setDrawer } = useContext(DrawerProvider);

  return (
    <>
      <nav
        className={`absolute lg:static ${
          drawer ? "left-0" : "-left-[320px]"
        } top-0 bottom-0 w-[320px] h-screen bg-gray-100 dark:bg-slate-800 z-10 flex flex-col justify-between px-[14px] pb-[12px]`}
      >
        <section className="flex justify-between items-center gap-2">
          <div className="p-2">
            <ChatGPTLogo
              h="28"
              w="28"
              className="bg-white rounded-full text-black p-1"
            />
          </div>
          <p className="mr-auto">New chat</p>
          <AddNew />
        </section>
        <section className="mb-auto overflow-y-auto text-sm">
          <h5>Today</h5>
          <div>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
            <p>New Chat 01</p>
          </div>
        </section>
        <section>
          <div className="py-[10px] px-2 flex items-center gap-2">
            <div className="border border-black/10 rounded-full">
              <UpgradeIcon />
            </div>
            <div>
              <h5>Upgrade plan</h5>
              <p className="text-xs line-clamp-1">
                Get GPT-4, DELL-E, and more
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-2">
            <Image
              src="/profile-gpt.jpg"
              alt="User Profile"
              height={32}
              width={32}
              className="rounded-full"
            />
            <p>RIAJUL PRO</p>
          </div>
        </section>
        {drawer ? (
          <div className="block lg:hidden absolute -right-10 top-2">
            <button className="p-1 border" onClick={() => setDrawer(false)}>
              <CloseIcon />
            </button>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Nav;

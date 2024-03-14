"use client";

import { DrawerProvider } from "@/context/DrawerContext";
import {
  AddNew,
  ChatGPTLogo,
  CloseIcon,
  UpgradeIcon,
} from "@/utils/icons/Icons";
import { chats } from "@/utils/mocks/Chats";
import Image from "next/image";
import { useContext } from "react";

const Aside = () => {
  const { drawer, setDrawer } = useContext(DrawerProvider);

  return (
    <>
      <aside
        className="fixed left-0 top-0 min-w-[260px] max-w-[260px] p-[15px] h-screen dark:bg-[#171717] dark:text-white duration-[0.3s] sm:relative flex justify-between flex-col"
        style={
          drawer
            ? {}
            : {
                maxWidth: "0px",
                minWidth: "0px",
                height: "0px",
                overflow: "hidden",
                padding: "0px",
              }
        }
      >
        <section className="flex justify-between items-center gap-2 hover:bg-onHover p-1 rounded-md cursor-pointer">
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
        <section className="px-2 my-5 niceScroll overflow-y-auto">
          <h5 className="text-xs text-[#9b9b9b] mb-2">Today</h5>
          <div>
            {chats.slice(0, 2).map((chat, index) => (
              <div
                key={index}
                className={`p-2 text-sm hover:bg-onHover rounded-md cursor-pointer line-clamp-1 ${
                  index === 0 ? "bg-onHover" : ""
                }`}
              >
                {chat.chatName}
              </div>
            ))}
          </div>
          <h5 className="text-xs text-[#9b9b9b] mb-2 mt-10">Previous 7 days</h5>
          <div>
            {chats.slice(2, chats.length).map((chat, index) => (
              <div
                key={index}
                className={`p-2 text-sm hover:bg-onHover rounded-md cursor-pointer line-clamp-1`}
              >
                {chat.chatName}
              </div>
            ))}
          </div>
        </section>
        <section className="mt-auto">
          <div className="hover:bg-onHover rounded-md mb-1 cursor-pointer py-[10px] px-2 flex items-center gap-2">
            <div className="border border-black/10 rounded-full">
              <UpgradeIcon />
            </div>
            <div>
              <h5>Upgrade plan</h5>
              <p className="text-xs line-clamp-1 text-[#9b9b9b]">
                Get GPT-4, DELL-E, and more
              </p>
            </div>
          </div>
          <div className="hover:bg-onHover rounded-md mb-1 py-2 cursor-pointer flex items-center gap-2 px-2">
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
        <div
          className="visible lg:invisible absolute border -right-8 top-4"
          onClick={() => setDrawer(false)}
        >
          <CloseIcon />
        </div>
      </aside>

      <div
        className={`absolute z-[99] ${
          drawer ? "left-[264px]" : "left-0"
        } top-1/2 -translate-y-1/2 invisible lg:visible`}
      >
        <div
          className="flex h-6 w-6 flex-col items-center"
          onClick={() => setDrawer(!drawer)}
        >
          <div
            className="h-3 w-1 rounded-full"
            style={{
              background: "rgb(228, 228, 228)",
              transform: !drawer
                ? "translateY(0.15rem) rotate(-15deg) translateZ(0px)"
                : "translateY(0.15rem) rotate(0deg) translateZ(0px)",
            }}
          ></div>
          <div
            className="h-3 w-1 rounded-full"
            style={{
              background: "rgb(228, 228, 228)",
              transform: !drawer
                ? "translateY(-0.15rem) rotate(15deg) translateZ(0px)"
                : "translateY(-0.15rem) rotate(0deg) translateZ(0px)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Aside;

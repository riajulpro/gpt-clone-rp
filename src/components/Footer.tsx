import { UpArrow } from "@/utils/icons/Icons";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-[8px] items-center justify-center pb-[8px]">
      <div className="w-[90%] lg:w-[766px] border-[1.5px] dark:border-[#5d5d5d] py-[10px] px-[12px] rounded-lg flex justify-between items-center">
        <textarea
          name=""
          placeholder="Message ChatGPT..."
          className="bg-transparent outline-none resize-none w-full h-full text-white"
          style={{ height: "25px" }}
        />
        <button className="rounded-lg  dark:bg-[#383838] dark:text-[#818181] transition-colors p-[8px]">
          <UpArrow />
        </button>
      </div>
      <p className="dark:text-[#b4b4b4] text-[12px] text-center">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import { TfiAngleRight } from "react-icons/tfi";

const Topics = () => {
  return (
    <div className= "border-b bg-white px-2 sml:px-4 py-4 flex items-center justify-between gap-2 flex-wrap">
      <div className="min-w-[250px]">
        <p className="font-semibold sml:text-lg text-gray-800">
          The Importance of Establishing a strong Online presence for Small
          Businesses
        </p>
        <div className="flex gap-2 flex-wrap pt-2">
          <p
            className={`border border-[#ffdd75] rounded px-1 pb-1 text-sm font-semibold text-[#ffdd75] bg-[#fdf8e8]`}
          >
            online presence
          </p>
          <p
            className={`border border-[#5ad8b4] rounded px-1 pb-1 text-sm font-semibold text-[#5ad8b4] bg-[#e5faf5]`}
          >
            small businesses
          </p>
          <p
            className={`border border-[#f28d8c] rounded px-1 pb-1 text-sm font-semibold text-[#f28d8c] bg-[#ffe7e6]`}
          >
            small businesses
          </p>
          <p
            className={`border border-[#ffdd75] rounded px-1 pb-1 text-sm font-semibold text-[#ffdd75] bg-[#fdf8e8]`}
          >
            branding
          </p>
        </div>
      </div>
      <button className="flex items-center gap-1 text-white bg-[#fd5829] px-2 py-2 h-fit">
        <span className={``}>Write</span>
        <TfiAngleRight className="w-4 h-4 " />
      </button>
    </div>
  );
};

export default Topics;

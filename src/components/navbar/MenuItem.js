import React from "react";

export default function MenuItem(props) {
  return (
    <div
      className="
                block
                text-xl
                font-semibold
                lg: p-1
                rounded-full
                border-2
                md:border-white
                hover:border-slate-300
                transition
                cursor-pointer
                "
    >
      {props.item}
    </div>
  );
}

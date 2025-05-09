import React from "react";
import { buttonVariants } from "./ui/button";

export default function Button({ priority }) {
  const style = {
    high: {
      text: "text-[rgba(55,59,83,1)]",
      bg: "#FFCDD2",
    },
    medium: {
      text: "text-[#33D69F]",
      bg: "#C8E6C9",
    },
    low: {
      text: "text-[#FF8F00]",
      bg: "#BBDEFB",
    },
  };

  return (
    <div>
      <span
        className={buttonVariants({ variant: "outline" })}
        style={{ backgroundColor: style[priority].bg }}
      >
        {priority}
      </span>
    </div>
  );
}

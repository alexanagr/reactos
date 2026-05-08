// hooks
import { useMenu } from "@/hooks/use-menu";
import { useClickAway } from "react-use";
import { useRef } from "react";

import { menuOptions } from "@/types/menu";

import "./_index.css";
// components
import Option from "./Option";

export default function MenuDraw() {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, close } = useMenu("apps-menu");

  useClickAway(ref, (e) => {
    const target = e.target as Node;

    if (ref.current?.contains(target)) return;

    close();
  });

  if (!isOpen) return null;

  return (
    <div ref={ref} className={`menudraw ${isOpen ? "open" : "closed"}`}>
      {menuOptions.map((option) => {
        return <Option option={option} />;
      })}
    </div>
  );
}

import "./_index.css";
import { type CSSProperties, type ReactNode } from "react";

import useConfig from "@/hooks/use-config";

interface Props {
  children?: ReactNode;
}

export default function Desktop({ children }: Props) {
  const { background } = useConfig();

  const style: CSSProperties = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="desktop" style={style}>
      {children}
    </div>
  );
}

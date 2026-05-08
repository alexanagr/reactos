import "./_index.css";
import { type RemixiconComponentType as RemixType } from "@remixicon/react";

import { useRef } from "react";
import Draggable from "react-draggable";


interface Props {
  icon: RemixType;
  label?: string;
}

function Launcher({ label, icon }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const Icon = icon;

  return (
    <Draggable nodeRef={ref}>
      <div className="launcher" ref={ref}>
        <div>
          <Icon size={45} />
        </div>
        <div>{label}</div>
      </div>
    </Draggable>
  );
}

export default Launcher;

import "./_index.css";

// components
import StartBtn from "./StartBtn";
import NetState from "./NetState";
import TimeBox from "./TimeBox";
import Toggler from "./Toggler";
import Language from "./Language";

export default function StatusBar() {
  return (
    <div className="statusbar">
      <StartBtn />

      <div className="right-panel">
        <TimeBox />
        <Toggler />
        <NetState />
        <Language/>
      </div>
    </div>
  );
}

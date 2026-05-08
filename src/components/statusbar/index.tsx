import "./_index.css";
// components
import StartBtn from "./StartBtn";
import NetState from "./NetState";
import TimeBox from "./TimeBox";
import Toggler from "./Toggler";

export default function StatusBar() {
  return (
    <div className="statusbar">
      <StartBtn />

      <div className="right-panel">
        <TimeBox />
        <Toggler />
        <NetState />
      </div>
    </div>
  );
}

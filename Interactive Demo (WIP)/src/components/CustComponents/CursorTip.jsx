import { useRef, useEffect } from "react";
import { connect } from "react-redux";

function CursorTip(props) {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!props.finger_locx) return;
  
    const cursorStyle = cursorRef.current.style;
    cursorStyle.display = "flex";
    cursorStyle.left = `${window.innerWidth - props.finger_locx[8].x * window.innerWidth}px`;
    cursorStyle.top = `${props.finger_locx[8].y * window.innerHeight}px`;
  
    const interval = setTimeout(() => {
      cursorStyle.display = "none";
    }, 500);
  
    return () => clearTimeout(interval);
  }, [props.finger_locx]);

  let bg = "bg-white";
  let showBorder = false;

  if (props.gesture) {
    const firstCharacter = props.gesture[0];
    if (firstCharacter === "C") {
      bg = "bg-green-500";
      showBorder = true;
    } else if (firstCharacter === "G") {
      bg = "bg-blue-500";
      showBorder = true;
    } else if (firstCharacter === "B") {
      bg = "bg-red-500";
      showBorder = true;
    }
  }

  return (
    <div className={`absolute w-10 h-10 text-xl rounded-full z-50 hidden items-center justify-center font-bold ${bg}`} ref={cursorRef}>
      {props.gesture && props.gesture[0]}
      {showBorder && <div className="border-2 border-dashed border-orange-500 rounded-full absolute -inset-2 animate-spin" style={{ animationDuration: "4s" }}></div>}
    </div>
  );
}

const PropMapFromState = (state) => ({
  gesture: state.hand.gesture,
  finger_locx: state.hand.finger_locx,
});

export default connect(PropMapFromState)(CursorTip);
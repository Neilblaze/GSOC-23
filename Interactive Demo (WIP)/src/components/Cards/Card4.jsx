import { useRef, useState } from "react";
import { connect } from "react-redux";

function actionPose(el) {
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return { x: lx, y: ly };
}

function Card4(props) {
  const cardRef = useRef(null);
  const [lastClicked, setLastClicked] = useState(Date.now());

  const isHovering = () => {
    if (!props.finger_locx) return false;
    const pos = actionPose(cardRef.current);
    if (pos.x === 0) return false;

    const hpos = {
      x: window.innerWidth - props.finger_locx[8].x * window.innerWidth,
      y: props.finger_locx[8].y * window.innerHeight
    };

    if (
      pos.x <= hpos.x &&
      hpos.x <= pos.x + cardRef.current.offsetWidth - 12 &&
      pos.y <= hpos.y &&
      hpos.y <= pos.y + cardRef.current.offsetHeight - 12
    )
      return true;
    else return false;
  };

  if (isHovering() && props.gesture === "CLICK" && props.onClick && Date.now() - 1000 > lastClicked) {
    props.onClick();
    setLastClicked(Date.now());
  }

  return (
    <div
      ref={cardRef}
      className={`w-128 border-2 p-4 rounded-xl border-green-400${
        isHovering() ? " bg-green-200 bg-opacity-30 transform transition duration-500 scale-125" : ""
      }${props.className ? ` ${props.className}` : ""}`}
    >
      {props.children}
    </div>
  );
}

const PropMapFromState = (state) => ({
  gesture: state.hand.gesture,
  finger_locx: state.hand.finger_locx
});

export default connect(PropMapFromState)(Card4);

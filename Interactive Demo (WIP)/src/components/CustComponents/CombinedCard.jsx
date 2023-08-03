import { useRef, useState } from "react";
import { connect } from "react-redux";

function actionPose(el) {
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return { x: lx, y: ly };
}

function CombinedCard(props) {
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

  let classesName, bgClass;

  switch (props.type) {
    case 'default':
      classesName = 'w-64 rounded border-yellow-400';
      bgClass = 'bg-yellow-200 bg-opacity-30';
      break;
    case 'card2':
      classesName = 'w-128 rounded-xl border-green-400';
      bgClass = 'border-green-400 bg-green-300 bg-opacity-30 hover-gradient-green';
      break;
    case 'card2b':
      classesName = 'w-128 rounded-xl border-red-400';
      bgClass = 'border-red-400 bg-red-300 bg-opacity-30 hover-gradient-red';
      break;
    case 'card3':
      classesName = 'w-64 rounded border-yellow-400';
      bgClass = 'bg-purple-400 bg-opacity-30 transform transition duration-500 scale-105';
      break;
    case 'card4':
      classesName = 'w-128 rounded-xl border-green-400';
      bgClass = 'bg-green-200 bg-opacity-30 transform transition duration-500 scale-125';
      break;
    default:
      classesName = '';
      bgClass = '';
      break;
  }

  return (
    <div
      ref={cardRef}
      className={`border-2 p-4 ${classesName} ${isHovering() ? bgClass : ""} ${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      {props.children}
    </div>
  );  
}

const mapStateToProps = (state) => ({
  gesture: state.hand.gesture,
  finger_locx: state.hand.finger_locx,
});

export default connect(mapStateToProps)(CombinedCard);

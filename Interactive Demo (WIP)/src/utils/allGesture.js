function allGesture(landmarks) {
  const [thumbIsOpen, indexIsOpen, middleIsOpen, ringIsOpen, littleIsOpen] = [
    landmarks[3].x < landmarks[2].x && landmarks[4].x < landmarks[2].x,
    landmarks[7].y < landmarks[6].y && landmarks[8].y < landmarks[6].y,
    landmarks[11].y < landmarks[10].y && landmarks[12].y < landmarks[10].y,
    landmarks[15].y < landmarks[14].y && landmarks[16].y < landmarks[14].y,
    landmarks[19].y < landmarks[17].y && landmarks[18].y < landmarks[17].y
  ];

  // https://github.com/google/mediapipe/blob/master/docs/solutions/hands.md#hand-landmark-model

  if (!thumbIsOpen && !indexIsOpen && !middleIsOpen && !ringIsOpen && !littleIsOpen) {
    return "GRAB";
  } else if (Math.sqrt(Math.pow(landmarks[4].x - landmarks[8].x, 2) + Math.sqrt(Math.pow(landmarks[4].y - landmarks[8].y, 2))) < 0.25) {
    return "CLICK";
  } else if (thumbIsOpen && indexIsOpen && middleIsOpen && ringIsOpen && littleIsOpen && landmarks[0].y > landmarks[12].y) {
    return "BACKSPACE";
  } else {
    return "HOVER";
  }
}

export default allGesture;

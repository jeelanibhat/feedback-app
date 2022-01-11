import React, { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ClickAudio = () => {
  const { audioPlay } = useContext(FeedbackContext);

  useEffect(() => {
    // play audio
    if (audioPlay === true) {
      let playAudio = document.getElementById("audioClick");
      playAudio.play();
    }
  }, [audioPlay]);

  return (
    <div>
      {/* audio clip */}
      <audio id="audioClick">
        <source
          src="https://css-tricks.com/examples/SoundOnHover/audio/beep.ogg"
          type="audio/ogg"
        ></source>
      </audio>
    </div>
  );
};

export default ClickAudio;

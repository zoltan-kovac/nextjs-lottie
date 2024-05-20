"use client";

import * as React from "react";
// import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import { InView } from "react-intersection-observer";

type CustomPlayerProps = {
  src: string;
};

const CustomPlayer: React.FC<CustomPlayerProps> = ({ src }): JSX.Element => {
  const [dotLottie, setDotLottie] = React.useState<DotLottie | null>(null);

  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  function play() {
    if (dotLottie) {
      dotLottie.play();
    }
  }

  function pause() {
    if (dotLottie) {
      dotLottie.pause();
    }
  }

  function stop() {
    if (dotLottie) {
      dotLottie.stop();
    }
  }

  // Deprecated react player implementation
  //
  // const playerRef = React.useRef(null);
  //
  // <Player
  //     ref={playerRef}
  //     autoplay
  //     loop
  //     src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
  //     //   src="/Celebration.json"
  //     style={{ height: "300px", width: "300px" }}
  //   >
  //     <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
  //     <button
  //       onClick={() => {
  //         playerRef?.current?.stop();
  //       }}
  //     >
  //       asdad
  //     </button>
  //   </Player>

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} style={{ width: "100%" }}>
          {inView && (
            <div
              style={{
                margin: "60px",
                width: "600px",
                textAlign: "center",
              }}
            >
              <DotLottieReact
                dotLottieRefCallback={dotLottieRefCallback}
                src={src}
                loop
                autoplay
                style={{ height: "600px", width: "600px" }}
              />
              <button
                style={{
                  marginTop: "20px",
                }}
                onClick={() => (dotLottie?.isPlaying ? stop() : play())}
              >
                Play/Stop
              </button>
            </div>
          )}
        </div>
      )}
    </InView>
  );
};

export default CustomPlayer;

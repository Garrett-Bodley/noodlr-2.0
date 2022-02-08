import React, { useCallback, useState } from "react";
import { usePlayPause } from "../../utilities/ToneProvider";
import "./playpausebutton.css";
import PlayPauseIcon from "./Icons/PlayPauseIcon";
import { animated, config, useSpring } from "react-spring";

const parseConfig = (isPressed, isActive, isHovered) => {
  if (isActive) return config.stiff;
  if (isPressed || isHovered) return config.wobbly;
  return { friction: 50, tension: 250 };
};

const PlayPauseButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const togglePlay = usePlayPause()

  const pressButton = (e) => {
    e.preventDefault();
    togglePlay();
    setIsPressed(!isPressed);
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const startHover = () => {
    setIsHovered(true);
  };

  const stopHover = () => {
    setIsHovered(false);
  };

  const shadowCallback = useCallback(() => {
    if (isActive) return "translate(0px, 0px) scaleY(0.94) scaleX(1)";
    if (isPressed) return "translate(1px, 2px) scaleY(1) scaleX(1.01)";
    if (isHovered) return "translate(2px, 3px) scaleY(1) scaleX(1.02)";
    return "translate(1px, 2px) scaleY(1) scaleX(1.01)";
  }, [isPressed, isHovered, isActive]);

  const shadowProps = useSpring({
    from: { transform: "translate(2px, 3px) scaleX(1)" },
    to: { transform: shadowCallback() },
    config: () => parseConfig(isPressed, isActive, isHovered)
  });

  const edgeCallback = useCallback(() => {
    if (isActive) return "translateY(2px) scaleY(0.925)";
    if (isPressed) return "translateY(2px) scaleY(0.925)";
    return "translateY(0px) scaleY(1)";
  }, [isPressed, isActive]);

  const edgeProps = useSpring({
    from: { transform: "translateY(0px) scaleY(1)" },
    to: {
      transform: edgeCallback()
    },
    config: () => parseConfig(isPressed, isActive, isHovered)
  });

  const frontCallback = useCallback(() => {
    if (isActive) return "translateY(2px) scaleY(0.925)";
    if (isPressed) return "translateY(-1px) scaleY(1)";
    if (isHovered) return "translateY(-3px) scaleY(1)";
    return "translateY(-2px) scaleY(1)";
  }, [isHovered, isPressed, isActive]);

  const frontProps = useSpring({
    from: {
      transform: "translateY(-3px) scaleY(1)"
    },
    to: {
      transform: frontCallback()
    },
    config: () => parseConfig(isPressed, isActive, isHovered)
  });

  const innerShadowCallback = useCallback(() => {
    if (isActive) return { opacity: "70%" };
    return { opacity: "0%" };
  }, [isActive]);

  const innerShadowProps = useSpring({
    from: { opacity: "0%" },
    to: innerShadowCallback(),
    config: { ...() => parseConfig(isPressed, isActive, isHovered), delay: 300 }
  });

  const iconCallback = useCallback(() => {
    if (isActive) return "translateY(2px)";
    if (isPressed) return "translateY(-1px)";
    if (isHovered) return "translateY(-5px)";
    return "translateY(-3px)";
  }, [isHovered, isPressed, isActive]);

  const iconProps = useSpring({
    from: { transform: "translateY(-3px" },
    to: { transform: iconCallback() },
    config: () => parseConfig(isPressed, isActive, isHovered)
  });

  const svgProps = useSpring({
    from: { fill: "grey" },
    to: { fill: isPressed ? "greenyellow" : "grey" },
    config: config.stiff
  });

  return (
    <button
      onMouseEnter={startHover}
      onMouseLeave={stopHover}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
      className="button-wrapper"
      onClick={pressButton}
    >
      <animated.span
        aria-disabled="true"
        style={shadowProps}
        className="shadow"
      />
      <animated.span aria-disabled="true" style={edgeProps} className="edge" />
      <animated.span aria-disabled="true" style={frontProps} className="front">
        <animated.span
          aria-disabled="true"
          style={innerShadowProps}
          className="inner-shadow"
        ></animated.span>
      </animated.span>
      <animated.div style={iconProps} className="playpause-icon">
        <PlayPauseIcon
          style={svgProps}
        />
      </animated.div>
    </button>
  );
};

export default PlayPauseButton;

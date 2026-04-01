import type { CSSProperties } from "react";

const rings = [
  {
    className: "volcan-orbit volcan-orbit-a",
    style: {
      width: "30rem",
      height: "30rem",
      top: "8%",
      left: "-6%",
      animationDelay: "-7s",
    },
  },
  {
    className: "volcan-orbit volcan-orbit-b",
    style: {
      width: "24rem",
      height: "24rem",
      top: "12%",
      right: "8%",
      animationDelay: "-11s",
    },
  },
  {
    className: "volcan-orbit volcan-orbit-c",
    style: {
      width: "42rem",
      height: "42rem",
      bottom: "6%",
      left: "18%",
      animationDelay: "-19s",
    },
  },
];

const nodes = [
  { x: "10%", y: "18%", size: "0.85rem", delay: "0s" },
  { x: "26%", y: "30%", size: "1.2rem", delay: "-4s" },
  { x: "44%", y: "16%", size: "0.7rem", delay: "-8s" },
  { x: "63%", y: "24%", size: "1rem", delay: "-3s" },
  { x: "78%", y: "14%", size: "1.4rem", delay: "-10s" },
  { x: "16%", y: "58%", size: "1.15rem", delay: "-5s" },
  { x: "34%", y: "48%", size: "0.8rem", delay: "-13s" },
  { x: "58%", y: "62%", size: "1.3rem", delay: "-2s" },
  { x: "80%", y: "56%", size: "0.75rem", delay: "-9s" },
  { x: "70%", y: "78%", size: "1.1rem", delay: "-15s" },
];

const beams = [
  {
    width: "36rem",
    top: "20%",
    left: "-8%",
    rotation: "-16deg",
    delay: "-6s",
  },
  {
    width: "30rem",
    top: "48%",
    right: "-4%",
    rotation: "14deg",
    delay: "-13s",
  },
  {
    width: "26rem",
    bottom: "10%",
    left: "22%",
    rotation: "-8deg",
    delay: "-18s",
  },
];

const DigitalSystemsBackdrop = () => {
  return (
    <div className="volcan-bg" aria-hidden="true">
      <div className="volcan-bg__gradient" />
      <div className="volcan-bg__grid" />
      <div className="volcan-bg__mesh" />

      {beams.map((beam, index) => (
        <div
          key={`beam-${index}`}
          className="volcan-beam"
          style={
            {
              width: beam.width,
              top: beam.top,
              right: beam.right,
              bottom: beam.bottom,
              left: beam.left,
              "--beam-rotation": beam.rotation,
              animationDelay: beam.delay,
            } as CSSProperties
          }
        />
      ))}

      {rings.map((ring, index) => (
        <div
          key={`ring-${index}`}
          className={ring.className}
          style={ring.style}
        />
      ))}

      {nodes.map((node, index) => (
        <div
          key={`node-${index}`}
          className="volcan-node"
          style={
            {
              left: node.x,
              top: node.y,
              width: node.size,
              height: node.size,
              animationDelay: node.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default DigitalSystemsBackdrop;

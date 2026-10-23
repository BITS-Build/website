"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { CSSProperties } from "react";
import { flowBranches, flowConnections, flowStrands } from "@/components/flow-geometry";
import { usePathname } from "next/navigation";

const stageValues = [0, 1, 2, 3, 4];

export function HeroFlow() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const stageTarget = useMotionValue(0);
  const focusTarget = useMotionValue(0);
  const stage = useSpring(stageTarget, { stiffness: 55, damping: 22, mass: 0.8 });
  const focus = useSpring(focusTarget, { stiffness: 65, damping: 24 });

  useEffect(() => {
    const stages = Array.from(document.querySelectorAll<HTMLElement>("[data-flow-stage]"));
    const footer = document.querySelector<HTMLElement>(".site-footer");
    const stageNodes = footer ? [...stages, footer] : stages;
    const stageObserver = new IntersectionObserver(() => {
      const center = window.innerHeight * 0.5;
      const active = stageNodes
        .map((node) => {
          const bounds = node.getBoundingClientRect();
          return { node, distance: Math.abs((bounds.top + bounds.bottom) / 2 - center), visible: bounds.top < center + 150 && bounds.bottom > center - 150 };
        })
        .filter((item) => item.visible)
        .sort((a, b) => a.distance - b.distance)[0];

      if (active) stageTarget.set(Number(active.node.dataset.flowStage ?? 4));
    }, { rootMargin: "-25% 0px -25% 0px", threshold: [0, 0.2, 0.5] });

    stageNodes.forEach((node) => stageObserver.observe(node));

    const capabilities = Array.from(document.querySelectorAll<HTMLElement>("[data-flow-focus]"));
    if (!capabilities.length) focusTarget.set(0);
    const focusObserver = new IntersectionObserver((entries) => {
      const center = window.innerHeight * 0.5;
      const active = capabilities
        .map((node) => {
          const bounds = node.getBoundingClientRect();
          return { node, distance: Math.abs((bounds.top + bounds.bottom) / 2 - center), visible: bounds.top < center + 120 && bounds.bottom > center - 120 };
        })
        .filter((item) => item.visible)
        .sort((a, b) => a.distance - b.distance)[0];

      if (active) focusTarget.set(Number(active.node.dataset.flowFocus ?? 0) - 1);
    }, { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.25, 0.6] });

    capabilities.forEach((node) => focusObserver.observe(node));
    return () => {
      stageObserver.disconnect();
      focusObserver.disconnect();
    };
  }, [focusTarget, pathname, stageTarget]);

  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -10, 9, -8, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 12, -7, 10, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.4, 0.65, 0.85, 1], [0.68, 0.52, 0.4, 0.3, 0.24, 0.16]);
  const compression = useTransform(scrollYProgress, [0, 0.8, 0.94, 1], [1, 1, 0.76, 0.48]);
  const organization = useTransform(stage, stageValues, [0.66, 1, 0.82, 0.58, 0.3]);
  const branchesOpacity = useTransform(stage, stageValues, [0.06, 0.88, 0.48, 0.25, 0.08]);
  const connectionsOpacity = useTransform(stage, stageValues, [0.15, 0.9, 0.76, 0.35, 0.12]);
  const focusShift = useTransform(focus, [-1, 0, 1], [-5, 0, 5]);
  const distantParallax = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const nearParallax = useTransform(scrollYProgress, [0, 1], [0, 16]);

  return (
    <div className="home-flow-journey" aria-hidden="true">
      <motion.svg className="home-flow-journey__visual" viewBox="0 0 640 600" style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y, opacity: reduceMotion ? 0.34 : opacity }}>
        <defs>
          <linearGradient id="journey-filament-light" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#dce9f6" stopOpacity=".08" />
            <stop offset=".42" stopColor="#83b9ff" stopOpacity=".44" />
            <stop offset=".55" stopColor="#eaf4ff" stopOpacity=".74" />
            <stop offset=".72" stopColor="#83b9ff" stopOpacity=".42" />
            <stop offset="1" stopColor="#dce9f6" stopOpacity=".1" />
          </linearGradient>
          <radialGradient id="journey-junction-light">
            <stop offset="0" stopColor="#b8d9fa" stopOpacity=".15" />
            <stop offset="1" stopColor="#83b9ff" stopOpacity="0" />
          </radialGradient>
          <mask id="journey-filament-fade">
            <linearGradient id="journey-field-fade" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="black" />
              <stop offset=".13" stopColor="white" />
              <stop offset=".87" stopColor="white" />
              <stop offset="1" stopColor="black" />
            </linearGradient>
            <rect width="640" height="600" fill="url(#journey-field-fade)" />
          </mask>
        </defs>

        <motion.g style={{ scaleX: reduceMotion ? 1 : compression, transformOrigin: "278px 300px" }} mask="url(#journey-filament-fade)">
          <motion.g style={{ y: reduceMotion ? 0 : distantParallax }}>
            <circle cx="278" cy="300" r="180" fill="url(#journey-junction-light)" />
            {flowStrands.filter(({ index }) => index % 2 === 0).map(({ d, index }) => (
              <path key={index} className={`hero-flow__strand hero-flow__strand--${index % 3}`} d={d} style={{ "--strand-delay": `${index * -1.7}s` } as CSSProperties} />
            ))}
          </motion.g>

          <motion.g style={{ y: reduceMotion ? 0 : nearParallax, scaleY: reduceMotion ? 1 : organization, transformOrigin: "278px 300px" }}>
            {flowStrands.filter(({ index }) => index % 2 === 1).map(({ d, index }) => (
              <path key={index} className={`hero-flow__strand hero-flow__strand--${index % 3}`} d={d} style={{ "--strand-delay": `${index * -1.7}s` } as CSSProperties} />
            ))}
            <motion.g style={{ opacity: reduceMotion ? 0.3 : branchesOpacity, x: reduceMotion ? 0 : focusShift }} className="home-flow-journey__branches">
              {flowBranches.map((d) => <path key={d} d={d} />)}
            </motion.g>
            <motion.g style={{ opacity: reduceMotion ? 0.3 : connectionsOpacity }} className="hero-flow__connections">
              {flowConnections.map((d, index) => <path key={d} d={d} style={{ "--strand-delay": `${(index + 3) * -2}s` } as CSSProperties} />)}
            </motion.g>
            <g className="hero-flow__nodes">
              {[2, 5, 8, 11].map((index) => <circle key={index} cx="278" cy={flowStrands[index].junction} r={index === 5 || index === 8 ? 3 : 2.2} />)}
              {[0, 3, 9, 12].map((index) => <circle key={index} className="hero-flow__terminal" cx="610" cy={flowStrands[index].exit} r="1.8" />)}
            </g>
            <g className="hero-flow__binary">
              <text x="486" y="222">01</text>
              <text x="521" y="378">10</text>
              <text x="106" y="344">0·1</text>
            </g>
          </motion.g>
        </motion.g>
      </motion.svg>
    </div>
  );
}

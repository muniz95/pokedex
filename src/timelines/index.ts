import { TimelineMax as Timeline, Power1 } from "gsap";

const getDefaultTimeline = (node: { querySelector?: any }, delay: number) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector(".content");
  const contentInner = node.querySelector(".content--inner");

  timeline
    .from(node, 0.3, {
      display: "none",
      autoAlpha: 0,
      delay,
      ease: Power1.easeIn,
    })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, {
      autoAlpha: 0,
      delay: 0.15,
      ease: Power1.easeIn,
    });

  return timeline;
};

export const play = (node: HTMLElement, appears: boolean) => {
  const delay = appears ? 0 : 0.5;
  let timeline: Timeline = getDefaultTimeline(node, delay);

  (window as any).loadPromise.then(() =>
    requestAnimationFrame(() => timeline.play())
  );
};

export const exit = (node: HTMLElement) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
};

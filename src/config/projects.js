const images = import.meta.glob("../assets/*.png", { eager: true });

export const PROJECTS = {
  "/front-end": [
    {
      title: "Brazil Travel - Landing Page",
      path: "/brazil-travel",
      cover: images["../assets/brazil-travel-cover.png"].default,
    },
    {
      title: "Brazilian Restaurant - Page",
      path: "/brazilian-restaurant",
      cover: images["../assets/brazilian-restaurant-cover.png"].default,
    },
  ],
  "/ux-ui": [
    {
      title: "NaturCycle - App",
      path: "/naturcycle",
      cover: images["../assets/naturcycle-cover.png"].default,
    },
    {
      title: "Skill Flow - App",
      path: "/skill-flow",
      cover: images["../assets/skill-flow-cover.png"].default,
    },
  ],
  "/rebranding": [
    {
      title: "Alessi",
      path: "/alessi",
      cover: images["../assets/alessi-cover.png"].default,
    },
  ],
  "/motion-design": [
    {
      title: "Logo Reveal",
      path: "/logo-reveal",
      cover: images["../assets/logo-reveal-cover.png"].default,
    },
    {
      title: "Animated Poster",
      path: "/animated-poster",
      cover: images["../assets/animated-poster-cover.png"].default,
    },
    {
      title: "Lyrics Animation",
      path: "/lyrics-animation",
      cover: images["../assets/lyrics-animation-cover.png"].default,
    },
    {
      title: "Toronto Video",
      path: "/toronto-video",
      cover: images["../assets/toronto-video-cover.png"].default,
    },
  ],
};

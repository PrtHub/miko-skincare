import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miko — Skincare Routine Builder",
    short_name: "Miko",
    description:
      "Point it at any bottle. Miko reads the label, flags ingredients for your skin, and maps your weekly routine.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F2",
    theme_color: "#FBF7F2",
    icons: [
      {
        src: "/miko-mark-master.jpg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

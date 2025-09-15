"use client";
import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

const slugs = [
  "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
  "express", "nextdotjs", "socketdotio", "vercel", "git", "github",
  "visualstudiocode", "c", "tailwindcss", "mongodb", "postman"
];

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      margin: "auto",
    },
  },
  options: {
    reverse: false,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, 0.02],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const iconColor = theme === "light" ? "#000000" : "#ffffff";
  const bgHex = theme === "light" ? "#ffffff" : "#0a0a0a";

  return renderSimpleIcon({
    icon: { ...icon, hex: iconColor },
    bgHex,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

type IconsGlobeProps = {
  theme: "light" | "dark";
};

export function IconsGlobe({ theme }: IconsGlobeProps) {
  const [data, setData] = useState<Awaited<ReturnType<typeof fetchSimpleIcons>> | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon, theme));
  }, [data, theme]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}

"use client"
import { useEffect, useMemo, useState } from "react";
import {Cloud,fetchSimpleIcons,ICloud,renderSimpleIcon,SimpleIcon,} from "react-icon-cloud";
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "socketdotio",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "c",
  "tailwindcss",
  "mongodb",
  "postman"
];

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      margin:"auto"
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
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};


export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;





export function IconsGlobe() {
    const [data, setData] = useState<IconData | null>(null);

      useEffect(() => {
    fetchSimpleIcons({ slugs: slugs }).then(setData);
  }, [slugs]);

    const renderedIcons = useMemo(() => {
    if (!data) return null;


    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon,"dark"),
    );
  }, [data, ]);
  return (
   
        <Cloud  {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
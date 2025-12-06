"use client"
import GithubI from "@/svgs/github";
import InstagramI from "@/svgs/instagram";
import LinkedInI from "@/svgs/linkedIn";
import FacebookI from "@/svgs/facebook";

export default function SvgIcons() {
  let icons = [{ Icon: GithubI, link: "http://github.com" },
    {Icon:InstagramI,link:"http://instagram.com"},
    {Icon:LinkedInI,link:"http://"},
    {Icon:FacebookI,link:"http://"}
  ];
  return (
    <>
      {icons.map(({Icon}, i) => (
        <Icon key={i} className="icon" />
      ))}
    </>
  );
}

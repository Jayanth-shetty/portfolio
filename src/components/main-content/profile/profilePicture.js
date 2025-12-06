import profilePic from "./DSC12.png";
import * as React from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="blob-size" viewBox="0 0 200 200" {...props}>
    <clipPath id="a">
      <path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486Z" />
    </clipPath>
    <image
      width={200}
      height={240}
      clipPath="url(#a)"
      href={profilePic.src}
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
)
export default SvgComponent


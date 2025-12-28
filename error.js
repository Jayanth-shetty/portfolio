"use client";
import Link from "next/link";
export default function Error() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <h1>An error Occurred!</h1>
      <Link>RETURN</Link>
      <div>RETURN HOME</div>
      <div>CONTACT</div>
    </div>
  );
}

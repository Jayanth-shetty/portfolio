"use client";
import Link from "next/link";
export default function Error() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <h1>An error Occurred!</h1>
      <Link href={"/"}>RETURN</Link>
      <Link
        href="https://wa.me/918867094596"
        target="_blank"
        className="bg-amber-700"
      >
        Contact
      </Link>
    </div>
  );
}

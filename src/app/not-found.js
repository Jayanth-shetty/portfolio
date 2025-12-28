import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <h1> Not found</h1>
      <Link href={"/"}>
        <div>Return Home</div>
      </Link>
    </div>
  );
}

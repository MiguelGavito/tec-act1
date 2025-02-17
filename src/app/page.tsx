import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-5 gap-2">
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />

        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />

        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />

        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />

        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
        <Rectangle color="black" />
        <Rectangle color="white" />
      </div>
      <Link href="/page2" className="text-blue-500 hover:underline">
        Go to Page 2
      </Link>
    </div>   
  );
}

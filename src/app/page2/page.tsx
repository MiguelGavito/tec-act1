import Link from "next/link";
import Rectangle from "../components/Rectangle";




export default function Page2() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <table className="border-collapse">
        <tbody>
          <tr>
            <td className="w-24 h-24 border border-black bg-white text-center"></td>
            <td className="w-24 h-24 border border-black bg-black text-center"></td>
            <td className="w-24 h-24 border border-black bg-white text-center"></td>
          </tr>
          <tr>
            <td className="w-24 h-24 border border-black bg-black text-center"></td>
            <td className="w-24 h-24 border border-black bg-white text-center"></td>
            <td className="w-24 h-24 border border-black bg-black text-center"></td>
          </tr>
          <tr>
            <td className="w-24 h-24 border border-black bg-white text-center"></td>
            <td className="w-24 h-24 border border-black bg-black text-center"></td>
            <td className="w-24 h-24 border border-black bg-white text-center"></td>
          </tr>
        </tbody>
      </table>
      <a>
        \n
      </a>
      
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
      
    </div>
  );
}

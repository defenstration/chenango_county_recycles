// Description: Header component for the Chenango County Recycles website.
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="banner p-4">
      <Image
        className="logo"
        src="/Assets/Recyclinglogo2024.png"
        alt="Chenango County Recycles logo."
        width={100}
        height={100}
      />
      <Navbar />
    </header>
  );
}
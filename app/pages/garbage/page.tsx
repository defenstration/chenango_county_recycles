import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function Garbage() {
  return (
    <div>
      <header className="banner">
        <Image
          className="logo"
          src="/Assets/Recyclinglogo.png"
          alt="Chenango County Recycles logo."
          width={100}
          height={100}
        />
        <div>
          <h1>Chenango County Recycles</h1>
          <h4>Chenango County's guide for all things recycling.</h4>
        </div>
        <div className="information">
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contacts">Contact Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
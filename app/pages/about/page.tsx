import Image from "next/image";
import "../globals.css";

export default function About() {
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
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contacts">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
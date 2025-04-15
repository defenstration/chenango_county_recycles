import Link from 'next/link'


export default function Navbar() {
    return (
        <nav className = "w-full">
            <ul className="navbar flex justify-between">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/contacts">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}
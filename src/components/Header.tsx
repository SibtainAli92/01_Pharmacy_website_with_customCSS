import Link from "next/link";
import "../style/header.css"; // Ensure the path is correct

export default function Header() {
    return (
        <div className="header-box">
            <div className="header-content">
                <h1>Pharmacy Store</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/product">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
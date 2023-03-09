import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/global.png" width={50} height={50} alt="logo" />
        </Link>
      </div>
      <Link href="/">หน้าแรก</Link>      
      <Link href="/products">สินค้าทั้งหมด</Link>
      <Link href="/about">เกี่ยวกับเรา</Link>
    </nav>
  );
}

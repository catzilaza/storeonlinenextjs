import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Product.module.css";
import Link from "next/link";
//https://dummyjson.com/products?limit=12

export async function getStaticProps() {
  const res: any = await fetch("https://dummyjson.com/products?limit=12");
  const data: any = await res.json();
  console.log(data);
  return {
    props: { products: data.products },
  };
}

export default function Index({ products }: any) {
  return (
    <>
      <Head>
        <title>หน้าแสดงสินค้า ร้านค้าออนไลน์</title>
        <meta
          name="keywords"
          content="storeonline,travel,streetfood,souvenir"
        />
      </Head>
      <h1> สินค้าทั้งหมด</h1>
      <div className={styles.container}>
        {products.map((item: any) => (
          <div key={item.id}>
            <Link href={"/products/" + item.id}>
              <h2 className={styles.title}>
                {item.title} | ราคา $ {item.price}
              </h2>
              <Image
                src={item.thumbnail}
                width={300}
                height={200}
                alt={item.title}
                priority
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

//import { useRouter } from "next/router";
//https://dummyjson.com/products?limit=12

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Detail.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map((item: any) => {
    return {
      params: { id: String(item.id) },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const id: any = params.id;
  const res: any = await fetch("https://dummyjson.com/products/" + id);
  const data: any = await res.json();
  console.log(data);
  return {
    props: { product: data },
  };
}

export default function ProductDetail({ product }: any) {
  // const router=useRouter() {id}
  // const {id} = router.query

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className={styles.container}>
        <div>
          <Image
            src={product.thumbnail}
            width={600}
            height={500}
            alt={product.title}
            priority
          />
        </div>
        <div className={styles.detail}>
          <h1>รหัสสินค้า : {product.id} </h1>
          <h2>ชื่อสินค้า : {product.title} </h2>
          <h2>ราคา : $ {product.price} </h2>
          <h2>หมวดหมู่ : {product.category} </h2>
          <h3>แบรนด์ : {product.brand} </h3>
          <h4>ข้อมูลพื้นฐาน : {product.description} </h4>          
          <h4>เรตติ้ง : {product.rating} / 5 </h4>          
        </div>
      </div>
    </>
  );
}

/*
      <div className={styles.container}>
        <div key={product.id}>
          <h2 className={styles.title}>
            {product.title} | ราคา {product.price}
          </h2>
          <Image
            src={product.thumbnail}
            width={300}
            height={200}
            alt={product.title}
            priority
          />
        </div>
        <h2>รายละเอียด {product.description}</h2>
      </div>
*/

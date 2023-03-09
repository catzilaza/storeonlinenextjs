import styles from "@/styles/About.module.css";
import Image from "next/image";
import Head from "next/head";

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>หน้าเกี่ยวกับ ร้านค้าออนไลน์</title>
        <meta
          name="keywords"
          content="storeonline,travel,streetfood,souvenir"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับร้านค้าออนไลน์</h1>
        <Image src="/data-store.jpg" width={400} height={300} alt="logo" priority/>
      </div>
    </>
  );
}

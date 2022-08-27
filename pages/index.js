import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyle.headingMd}>
          私はフルスタックエンジニアを目指しています。好きな言語はJavaScriptです！
        </p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}

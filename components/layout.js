import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Brittany Renee Mayes";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="All about Brittany Renee Mayes" />
        {/* TODO: UPDATE META DATA */}
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <main className={!home && utilStyles.layoutContainer}>
        {children}

        {!home && (
          <div>
            <p className={utilStyles.maxWidth1020}>
              <Link href="/">← Take me home</Link>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

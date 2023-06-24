import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { useRouter } from "next/router";

export const siteTitle = "Brittany Renee Mayes";

export default function Layout({ children, home }) {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="All about Brittany Renee Mayes" />
        <meta name="og:title" content={siteTitle} />
        {/* TODO: UPDATE META DATA */}
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <main className={!home && utilStyles.layoutContainer}>
        {children}

        {!home && (
          <div>
            <p className={utilStyles.maxWidth1020}>
              <button
                className={utilStyles.back}
                type="button"
                onClick={() => router.back()}
              >
                ← Take me back
              </button>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

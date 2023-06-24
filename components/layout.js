import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { useRouter } from "next/router";

export const siteTitle = "Brittany Renee Mayes";

export default function Layout({ children, home }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="All about Brittany Renee Mayes" />
        <meta name="og:title" content={siteTitle} />
        <meta
          property="og:image"
          content="https://brmayes.github.io/images/social-brm.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={!home ? utilStyles.layoutContainer : undefined}>
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

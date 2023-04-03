import Head from "next/head";
import Link from "next/link";
import indexStyles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div className={indexStyles.container}>
      <Head>
        <title>Brittany Renee Mayes</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={utilStyles.maxWidth1020}>
        <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
          Hi there, I'm&nbsp;Brittany.
        </h1>

        <p
          className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
        >
          I'm the{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            Engineering&nbsp;Lead
          </Link>{" "}
          for Election&nbsp;Features at The&nbsp;Washington&nbsp;Post. I like to{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            work&nbsp;and&nbsp;lead
          </Link>{" "}
          with empathy and kindness. I was a{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            graphics
          </Link>{" "}
          and{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            social issues
          </Link>{" "}
          reporter in a previous life, among other things. Want to know more?{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            Let's chat
          </Link>
          .
        </p>
      </main>

      {/* Previously, I was a{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            graphics&nbsp;reporter
          </Link>{" "}
          and a local{" "}
          <Link href="/" className={utilStyles.hoverUnderlineAnimation}>
            reporting fellow
          </Link>{" "}
          among other things. */}

      {/* <footer>
        <p>Created with Next.js, React and ♡</p>
      </footer> */}

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}

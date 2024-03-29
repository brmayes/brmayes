import Head from "next/head";
import Link from "next/link";
import indexStyles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <div className={indexStyles.container}>
        <Head>
          <title>Brittany Renee Mayes</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            Hi there, I'm&nbsp;Brittany.
          </h1>

          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
          >
            I'm the{" "}
            <Link
              href="/elections"
              className={utilStyles.hoverUnderlineAnimation}
            >
              Engineering&nbsp;Lead
            </Link>{" "}
            for Election&nbsp;Features at The&nbsp;Washington&nbsp;Post. I like
            to{" "}
            <Link
              href="/how-i-work"
              className={utilStyles.hoverUnderlineAnimation}
            >
              work&nbsp;and&nbsp;lead
            </Link>{" "}
            with empathy and kindness. I was a{" "}
            <Link
              href="/graphics"
              className={utilStyles.hoverUnderlineAnimation}
            >
              graphics
            </Link>{" "}
            and{" "}
            <Link
              href="/social-issues"
              className={utilStyles.hoverUnderlineAnimation}
            >
              social issues
            </Link>{" "}
            reporter in a previous life, among other things. Want to know more?{" "}
            <Link
              href="/contact"
              className={utilStyles.hoverUnderlineAnimation}
            >
              Let's chat
            </Link>
            .
          </p>
        </main>
      </div>
    </Layout>
  );
}

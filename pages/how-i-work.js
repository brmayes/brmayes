import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData("content/beliefs");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function HowIWork() {
  return (
    <Layout page>
      <div>
        <Head>
          <title>How I work.</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            How I work.
          </h1>

          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
          >
            I care deeply about creating healthy and supportive work
            environments. I strive to always lead with empathy, kindness, care,
            transparency and open communication. I believe in Brian Boyer's
            general framework of happy teams comprised of{" "}
            <Link
              href="/beliefs/rituals"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.purple}`}
            >
              rituals
            </Link>
            ,{" "}
            <Link
              href="/beliefs/roles"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.yellow}`}
            >
              roles
            </Link>
            ,{" "}
            <Link
              href="/beliefs/goals"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.green}`}
            >
              goals
            </Link>{" "}
            and{" "}
            <Link
              href="/beliefs/norms"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.orange}`}
            >
              norms
            </Link>
            . Read more on{" "}
            <Link
              href="https://source.opennews.org/articles/healthy-work-culture-rituals-norms/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.blue}`}
            >
              the Source <span>&raquo;</span>
            </Link>
          </p>
        </main>
      </div>
    </Layout>
  );
}

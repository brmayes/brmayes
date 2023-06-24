import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function WhatIDo() {
  return (
    <Layout page>
      <div>
        <Head>
          <title>What I do.</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            What I do.
          </h1>

          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
          >
            I work on The Post's Elections Engineering team where I manage a
            team of full-stack engineers (and sometimes get my hands dirty,
            too). The Features team designs and builds products for election
            coverage on various platforms: The Post's{" "}
            <Link
              href="https://www.washingtonpost.com/elections/midterms-2022/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.green}`}
            >
              homepage
            </Link>
            ,{" "}
            <Link
              href="https://www.washingtonpost.com/election-results/2022/arizona/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.orange}`}
            >
              results pages
            </Link>
            , and mobile apps; on television for{" "}
            <Link
              href="https://www.youtube.com/live/Wx88VGFBTpw?feature=share&t=1912"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.purple}`}
            >
              The Post's live show
            </Link>
            ; and even in print for elections in the DMV.
          </p>
        </main>
      </div>
    </Layout>
  );
}

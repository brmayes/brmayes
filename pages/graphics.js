import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Graphics() {
  return (
    <Layout page>
      <div>
        <Head>
          <title>Graphics.</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            Graphics.
          </h1>

          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
          >
            Some of my favorites:{" "}
            <Link
              href="https://www.washingtonpost.com/elections/2020/how-to-vote/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.red}`}
            >
              How to vote
            </Link>{" "}
            in your state,{" "}
            <Link
              href="https://www.washingtonpost.com/graphics/2020/business/black-owned-bookstores-anti-racist-literature/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.pink}`}
            >
              black-owned bookstores
            </Link>{" "}
            & anti-racist lit, the{" "}
            <Link
              href="https://www.washingtonpost.com/graphics/2020/politics/house-freshman-class/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.orange}`}
            >
              2018 House
            </Link>{" "}
            freshman, which{" "}
            <Link
              href="https://www.washingtonpost.com/graphics/politics/policy-2020/quiz-which-candidate-agrees-with-me/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.yellow}`}
            >
              democrats
            </Link>{" "}
            you agree with, how the{" "}
            <Link
              href="https://www.washingtonpost.com/graphics/2019/investigations/opioid-pills-overdose-analysis/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.green}`}
            >
              opioid epidemic
            </Link>{" "}
            evolved, the business of being{" "}
            <Link
              href="https://www.npr.org/sections/therecord/2018/04/05/599592959/the-business-of-being-cardi-b"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.blue}`}
            >
              Cardi B
            </Link>
            , the{" "}
            <Link
              href="https://www.npr.org/2017/06/02/526417478/the-trump-russia-comey-imbroglio-it-s-complicated"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.purple}`}
            >
              Trump-Russia
            </Link>{" "}
            imbroglio, and live coverage of the{" "}
            <Link
              href="https://www.npr.org/2016/11/08/500427835/live-blog-election-night-2016"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.gray}`}
            >
              2016 election
            </Link>
            .
          </p>
        </main>
      </div>
    </Layout>
  );
}

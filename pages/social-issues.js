import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function SocialIssues() {
  return (
    <Layout page>
      <div>
        <Head>
          <title>Social issues.</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            Social issues.
          </h1>

          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
          >
            Some of my favorites: immigrants leaving{" "}
            <Link
              href="https://www.washingtonpost.com/dc-md-va/2021/04/05/trump-immigration-sanctuary/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.red}`}
            >
              sanctuary
            </Link>{" "}
            in churches,{" "}
            <Link
              href="https://www.washingtonpost.com/dc-md-va/2021/05/27/sam-rasoul-debate-muslim-question/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.pink}`}
            >
              Muslim candidates
            </Link>{" "}
            getting questions on faith, high tensions in a{" "}
            <Link
              href="https://www.washingtonpost.com/religion/2021/05/28/maryland-catholic-school-abortion-race-tensions/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.orange}`}
            >
              Catholic classroom
            </Link>
            , the growing list of slain{" "}
            <Link
              href="https://www.washingtonpost.com/dc-md-va/2021/06/28/transgender-women-homicides-intimate-partner-violence/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.yellow}`}
            >
              trans women
            </Link>
            , outdoor dining creating barriers for{" "}
            <Link
              href="https://www.washingtonpost.com/dc-md-va/2021/07/13/outdoor-dining-sidewalk-access-disability/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.green}`}
            >
              disabled people
            </Link>
            , America's changing{" "}
            <Link
              href="https://www.washingtonpost.com/nation/interactive/2021/census-maps-race-population-demographics/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.blue}`}
            >
              demographics
            </Link>
            , and{" "}
            <Link
              href="https://www.washingtonpost.com/nation/2021/09/20/texas-state-politics-shifts/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.purple}`}
            >
              Texas's laws
            </Link>{" "}
            versus its demographic shifts.
          </p>
        </main>
      </div>
    </Layout>
  );
}

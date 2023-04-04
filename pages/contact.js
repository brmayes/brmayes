import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import contactStyles from "../styles/Contact.module.css";
import Layout from "../components/layout";

export default function HowIWork() {
  return (
    <Layout page>
      <div>
        <Head>
          <title>Contact me</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            Say hi.
          </h1>

          <div className={contactStyles.contactGroupWrapper}>
            <p
              className={`${utilStyles.headingLg}  ${contactStyles.leadingText}`}
            >
              Want to chat about The Post?
            </p>
            <p
              className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
            >
              <Link
                href="mailto:brittany.mayes@washpost.com"
                target="_blank"
                className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.pink}`}
              >
                brittany.mayes@washpost.com
              </Link>
            </p>
          </div>

          <div className={contactStyles.contactGroupWrapper}>
            <p
              className={`${utilStyles.headingLg} ${contactStyles.leadingText}`}
            >
              Or just me?
            </p>
            <p
              className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
            >
              <Link
                href="mailto:brmayes16@gmail.com"
                target="_blank"
                className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.orange}`}
              >
                brmayes16@gmail.com
              </Link>
            </p>
          </div>

          <div className={contactStyles.contactGroupWrapper}>
            <p
              className={`${utilStyles.headingLg} ${contactStyles.leadingText}`}
            >
              Do you prefer socials?
            </p>
            <p
              className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
            >
              <Link
                href="https://www.linkedin.com/in/brittanymayes/"
                target="_blank"
                className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.yellow}`}
              >
                LinkedIn
              </Link>{" "}
              |{" "}
              <Link
                href="https://twitter.com/BritRenee_"
                target="_blank"
                className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.green}`}
              >
                Twitter
              </Link>{" "}
              |{" "}
              <Link
                href="https://www.goodreads.com/user/show/73046440-brittany-mayes"
                target="_blank"
                className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.blue}`}
              >
                Goodreads
              </Link>
            </p>
          </div>

          <div className={contactStyles.contactGroupWrapper}>
            <p
              className={`${utilStyles.headingLg} ${contactStyles.leadingText}`}
            >
              Care to check out my code?
            </p>
            <p
              className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
            >
              <Link
                href="https://github.com/brmayes"
                target="_blank"
                className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.purple}`}
              >
                Github
              </Link>
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import contactStyles from "../../styles/Contact.module.css";

export default function Post({ postData }) {
  return (
    <Layout page>
      <div>
        <Head>
          <title>{postData.title}.</title>
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1
            className={`${utilStyles.heading5Xl} ${utilStyles.headingFont} ${
              utilStyles[postData.color]
            } ${utilStyles.zeroBottomMargin}`}
          >
            {postData.title}
          </h1>
          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular} ${utilStyles.negativeTopMargin} ${utilStyles.lineHeight100}`}
          >
            ...{postData.tagline}.
          </p>

          <article>
            <div
              className={`${utilStyles.headingLg}  ${contactStyles.leadingText}`}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </main>
      </div>
    </Layout>
  );
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

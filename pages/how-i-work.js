import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function HowIWork() {
  return (
    <Layout page>
      <div>
        <Head>
          <title>How I work</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            How I work
          </h1>

          <p
            className={`${utilStyles.heading2Xl} ${utilStyles.fontWeight200} ${utilStyles.letterSpacingRegular}`}
          >
            I care deeply about creating healthy and supportive work
            environments. I strive to always lead with empathy, kindness, care,
            transparency and open communication. I believe in Brian Boyer's
            general framework of happy teams comprised of{" "}
            <Link
              href="/"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.purple}`}
            >
              rituals
            </Link>
            ,{" "}
            <Link
              href="/"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.yellow}`}
            >
              roles
            </Link>
            ,{" "}
            <Link
              href="/"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.green}`}
            >
              goals
            </Link>{" "}
            and{" "}
            <Link
              href="/"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.orange}`}
            >
              norms
            </Link>
            . Read more in{" "}
            <Link
              href="https://source.opennews.org/articles/healthy-work-culture-rituals-norms/"
              target="_blank"
              className={`${utilStyles.hoverUnderlineAnimation} ${utilStyles.blue}`}
            >
              the Source <span>&raquo;</span>
            </Link>
          </p>
        </main>

        {/* <main className={utilStyles.maxWidth1020}>
          <h1 className={`${utilStyles.heading5Xl} ${utilStyles.headingFont}`}>
            How I work
          </h1>
          <div>
            <p>
              I care deeply about creating healthy and supportive work
              environments. Based on Brian Boyer's general framework of happy
              teams, I believe that a happy team has rituals (what we do every
              day), roles (trusting each other to do their jobs), goals (a
              shared vision), and norms (a collection of rules and boundaries).
            </p>
            <p>
              <b>Rituals</b> keep us grounded when work sweeps us away. My
              favorites: Weekly 1-1s with my direct reports, a celebratory
              birthday treat and any and all team outings.
            </p>
            <p>
              <b>Roles</b> are our tasks and responsibilites. As a people lead,
              it's my job to advocate for my team members, encourage healthy
              work habits by example, and ensure my direct reports feel
              supported not only in their current work but in their continued
              career growth. As a project manager, I keep the work organized and
              on track. If the timeline can't be met without overtime, the
              failure is on the ask and not the engineer. As a technical lead, I
              scope project requirements, make decisions on project architecture
              and review the code of my teammates. As an independent
              contributor, I write software, pair program and communicate my
              progress. My role changes moment to moment, but they are all
              important to the mission.
            </p>
            <p>
              <b>Goals</b> are the mission. Regardless of my position, my goal
              is to make a supportive and empathetic work environment. I want to
              encourage open communication, collaboration, trust, honesty and
              respect, among others.
            </p>
            <p>
              <b>Norms</b> are the rules that we buy into to make a funcitoning
              (work) society. I stand for people and their wellbeing first,
              compromising on work deadlines and requirements if it comes to it.
              I am respectful of my teammates, and foster an environment in
              which *everyone* thrives, not just the majority.
            </p>
          </div>
        </main> */}
      </div>
    </Layout>
  );
}

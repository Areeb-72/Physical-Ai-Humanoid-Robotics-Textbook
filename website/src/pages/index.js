import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">From Digital Intelligence to Embodied Systems</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/physical-ai-overview">
            Modules
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/capstone/project-overview">
            Capstone Project
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/your-repo">
            GitHub Repository
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A university-level textbook on Physical AI and Humanoid Robotics.">
      <HomepageHeader />
      <main>
        <section className={clsx(styles.homepageSection)}>
          <HomepageFeatures />
        </section>
        <section className={clsx(styles.homepageSection)}>
          <div className="container" style={{textAlign: 'center'}}>
            <h2 className="hero__subtitle">Why This Book Matters</h2>
            <p style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem'}}>
              Physical AI is the bridge between algorithms and the real world. This book guides you through the essential concepts, tools, and techniques required to build intelligent systems that can perceive, reason, and act in physical spaces. We focus on humanoid robots as the ultimate platform for general-purpose embodied intelligence, preparing you to tackle the next generation of challenges in robotics and AI.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

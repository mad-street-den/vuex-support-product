import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeaturess from '@site/src/components/HomepageFeaturess';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      
      <div className={styles.heroImageContainer}>
     
        {/* Overlay Text */}
        <div className={styles.overlayText}>
          <h1 className={styles.overlayTitle}>Welcome to Vuex Support</h1>
          <p className={styles.overlayDescription}>Browse our resources, troubleshoot problems,

or shoot us a ticket. We're here to help. </p>
        </div>
        
        {/* Hero Image */}
        <img src="img/desktop-banner.png" alt="Hero Image" className={styles.heroImage} />
        <div className={styles.buttons}></div>
        {/* Overlay Image */}
        <img src="img/Asset 1@2x.png" alt="Overlay Image" className={styles.overlayImage} />
        
        {/* Overlay Text */}
       
      </div>
     
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageFeaturess />
      </main>
    </Layout>
  );
}

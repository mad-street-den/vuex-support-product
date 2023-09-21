import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <a href="docs/Audience Builder">
        User Guides
      </a>
    ),
    Svg: require('/img/Asset 3.svg').default,
    description: (
      <>
        Whether you’re using VueX for the first time or are an advanced user, the guide helps you get the most out of the product.
      </>
    ),
  },
  {
    title: (
      <a href="https://vue.ai/developer/docs/api-reference/recommendations">
        API Documentation
      </a>
    ),
    Svg: require('/img/Asset 1.svg').default,
    description: (
      <>
        Understand how to integrate VueX with your online business with just 2 APIs!
      </>
    ),
  },
  {
    title: (
      <a href="https://vue.ai/products/retail-personalization-platform/">
        About Vuex
      </a>
    ),
    Svg: require('/img/Asset 2.svg').default,
    description: (
      <>
     A great place to start. Everything you need to know about VueX, it’s features, plans and more.
      </>
    ),
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

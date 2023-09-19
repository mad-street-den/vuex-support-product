import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <a href="/user-guides">
        Case Studies
      </a>
    ),
    Svg: require('/img/Asset 4.svg').default,
    description: (
      <>
        

Whether you’re using VueX for the first time or are an advanced user, the guide helps you get the most out of the product.
      </>
    ),
  },
  {
    title: (
      <a href="/user-guides">
        Inspiration Center
      </a>
    ),
    Svg: require('/img/Asset 5.svg').default,
    description: (
      <>
       Listen to retailers from around the world talk about challenges, lessons learned and outcomes.
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

export default function HomepageFeaturess() {
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

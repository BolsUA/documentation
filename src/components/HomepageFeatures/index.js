import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Find the perfect Scholarship',
    Svg: require('@site/static/img/Scholarships.png').default,
    description: (
      <>
        Find the perfect scholarship for you, with the help of our platform.
      </>
    ),
  },
  {
    title: 'Apply with ease',
    Svg: require('@site/static/img/Apply.png').default,
    description: (
      <>
        Apply to the scholarship of your choice with ease, filling out the
        necessary information and documents, all in one place.
      </>
    ),
  },
  {
    title: 'Be notified',
    Svg: require('@site/static/img/Notified.png').default,
    description: (
      <>
        Be notified of the status of your application, receive
        updates on the scholarship you applied to.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={Svg} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

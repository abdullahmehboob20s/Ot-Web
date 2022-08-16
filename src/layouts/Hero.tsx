import Button from "components/Button";
import styles from "scss/layout/Hero.module.scss";

import banner from "assets/images/hero/hero-building.png";

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <img src={banner} className={styles.banner} alt="" />
      <div className="container-wrapper-2">
        <section>
          <h1 className="font-heading fs-64px mb-20px lh-1_2">
            Defi Home Ownership{" "}
            <span className="text-gradient font-heading">Revolution</span>
          </h1>

          <p className="fs-14px white lh-1_9 mb-40px">
            A community-driven token that revolutionizes the way the world
            purchases property. Imagine a future where every home earned passive
            income. A home that when you sell or pass on, continues to provide
            wealth and security that can’t be sold separately from the property.
            Imagine then, that every affordable housing property provided the
            same. That future starts now with Owners Unity.
          </p>

          <div className={styles.buttons}>
            <Button title="Whitelist" variant="pink" />
            <Button title="Whitepaper" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;

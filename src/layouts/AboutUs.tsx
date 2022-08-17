import styles from "scss/layout/AboutUs.module.scss";
import banner from "assets/images/rewards/aboutus-banner.png";
import soldier from "assets/images/rewards/soldier.png";

function AboutUs() {
  return (
    <div className="container-wrapper-2">
      <div className={styles.wrapper}>
        <header>
          <h1 className="font-heading text-gradient text-center fs-48px mb-20px uppercase">
            About Us
          </h1>
          <p className="fs-14px white text-center lh-1_9">
            OUT looks to empower its holders to rewrite the way finance works in
            the property market. By doing this, OUT will return power to the
            hands of the holders and out of the hands of the institutions that
            hold us down. This is why crypto was invented and this is how it
            should be used.
          </p>
        </header>

        <main className="flex">
          <img src={banner} alt="" className="w-full" />
        </main>

        <footer>
          <img src={soldier} alt="" />

          <div>
            <blockquote className="text-gradient-2 fs-14px italic weight-6 text-center mb-15px">
              “ OUR goals are to help people climb onto the property ladder,
              reduce global homelessness, poverty and return the power to you,
              the people. ”
            </blockquote>

            <div>
              <p className="fs-12px white text-center weight-4">placeholder</p>
              <p className="fs-12px weight-7 text-center white">Founder</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;

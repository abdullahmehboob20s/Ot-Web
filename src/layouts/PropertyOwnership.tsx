import PropertyCard from "components/PropertyCard";
import styles from "scss/layout/PropertyOwnership.module.scss";
import banner from "assets/images/property/banner.png";

function PropertyOwnership() {
  return (
    <div className={styles.containerWrapper}>
      <img src={banner} alt="" className={styles.banner} />

      <div className="container-wrapper-2">
        <div className={styles.container}>
          <header className="mb-55px">
            <h1 className="font-heading text-gradient fs-48px weight-7 uppercase mb-15px">
              Property Ownership in a decentralized age
            </h1>

            <p className="fs-14px white lh-1_9 weight-4">
              Building a framework in the Decentralized Finance space, Owners
              Unity Token gives the power back to the buyer and strips it away
              from the lending industry. Owners Unity, long term stability,
              trust and wealth through Decentralized Finance.
            </p>
          </header>

          <main>
            <PropertyCard
              title="Shorter Term"
              description="Using Owners Unity Tokenomics, money generated from your investment helps shave years from your payment plan."
            />
            <PropertyCard
              title="Lower Monthly Payments"
              description="Everyone has the right to a decent standard of home. We keep payment plans sensible during this housing crisis."
            />
            <PropertyCard
              title="Increase Access To Home Ownershop"
              description="Owners Unity increases access to homeownership as our checks are based on affordability and the individual applying."
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwnership;

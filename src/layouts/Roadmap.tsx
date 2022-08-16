import RoadmapCard from "components/RoadmapCard";
import styles from "scss/layout/Roadmap.module.scss";
import strip1 from "assets/images/roadmap/strip1.svg";
import strip2 from "assets/images/roadmap/strip2.svg";
import strip3 from "assets/images/roadmap/strip3.svg";

function Roadmap() {
  return (
    <div>
      <div className="container-wrapper">
        <header className="mb-100px">
          <h1 className="text-gradient fs-48px text-center uppercase font-heading">
            ROADMAP
          </h1>
        </header>

        <main className={styles.roadmapCards}>
          <div>
            <RoadmapCard
              title="Q4 2021 ✅"
              points={[
                "Register Company",
                "Set Up Team",
                "Register Domain",
                "Develop Websitee",
              ]}
            />
            <RoadmapCard
              title="Q4 2021"
              stripe={strip2}
              stripeClassName={styles.stripe2}
              points={[
                "Private Sale",
                "Public Token Sale",
                "Launch Token",
                "Strategic partnership",
                "Coingecko Listing",
              ]}
            />
          </div>
          <div className={styles.right}>
            <RoadmapCard
              title="Q4 2021"
              stripe={strip1}
              stripeClassName={styles.stripe1}
              points={[
                "Develop Contract",
                "Audit contract",
                "Seed Round",
                "Strategic partnership",
                "KYC",
              ]}
            />
            <RoadmapCard
              title="Q4 2021"
              stripe={strip3}
              stripeClassName={styles.stripe3}
              points={[
                "Certik audit",
                "Strategic Partnerships",
                "Exchange Listings",
                "Investment Rewards System",
                "Further Advancements",
              ]}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Roadmap;

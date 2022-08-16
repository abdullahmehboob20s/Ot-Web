import styles from "scss/layout/Tokenomics.module.scss";
import chart from "assets/images/tokenomics/chart.svg";

function Tokenomics() {
  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <h1 className="fs-48px text-gradient font-heading uppercase text-center">
          TOKENOMICS
        </h1>

        <div className={styles.chart}>
          <>
            <img src={chart} className={styles.chartImage} alt="" />
            <p className="fs-14px weight-5 white text-center mb-10px">
              Total Supply
            </p>
            <p className="text-gradient fs-24px weight-9 text-center">100%</p>
          </>

          <div className={styles.card}>
            <p className="fs-16px text-gradient mb-5px weight-7">
              14% - Staking
            </p>
            <p className="fs-12px white weight-4">
              Tokens will be put into the staking pool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;

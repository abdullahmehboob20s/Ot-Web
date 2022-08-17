import FormCard from "components/FormCard";
import LabelAndInput from "components/LabelAndInput";
import styles from "scss/layout/Calculator.module.scss";

function Calculator() {
  return (
    <div className={styles.containerWrapper}>
      <div className="container-wrapper-2">
        <div className={styles.wrapper}>
          <main>
            <h1 className="uppercase text-gradient fs-48px text-center font-heading mb-50px">
              calculator
            </h1>

            <form>
              <header className="mb-30px">
                <LabelAndInput
                  type="number"
                  id="amount"
                  label="Amount Required"
                  placeholder="Enter Your Ammount"
                />
                <LabelAndInput
                  type="number"
                  id="security"
                  label="Security 5%-10%"
                  placeholder="Enter Your Security Strength"
                />
                <LabelAndInput
                  type="number"
                  id="top-up"
                  label="Monthly Top up"
                  placeholder="Enter Monthly Top up"
                />
                <LabelAndInput
                  type="number"
                  id="investmen"
                  label="Investment Multiple"
                  placeholder="Enter Investment Multiple"
                />
              </header>

              <main className={`${styles.cards} mb-40px`}>
                <FormCard title="$15400" subtitle="INVESTMENT PAYOUT" />
                <FormCard title="$26400" subtitle="FIRST YEAR TOTAL" />
                <FormCard title="6.81 years" subtitle="FINANCIAL FREEDOM" />
              </main>

              <footer>
                <button className="fs-16px white weight-7 pointer">
                  Calculate
                </button>
              </footer>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

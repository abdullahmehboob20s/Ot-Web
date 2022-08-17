import styles from "scss/layout/Tokenomics.module.scss";
import { PieChart, Pie, Cell } from "recharts";
import { useCallback, useState } from "react";
import renderActiveShape from "components/renderActiveShape";

const data = [
  { name: "100%", value: 400, color: "#EABDB4" },
  { name: "100%", value: 100, color: "#C8C8C8" },
  { name: "100%", value: 180, color: "#FF5454" },
  { name: "100%", value: 100, color: "#F16EC9" },
  { name: "100%", value: 320, color: "#1CA3FE" },
  { name: "100%", value: 200, color: "#C688FF" },
  { name: "100%", value: 100, color: "#DDFF41" },
  { name: "100%", value: 600, color: "#809FF1" },
  { name: "100%", value: 100, color: "#EA862E" },
];

function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <h1 className="fs-48px text-gradient font-heading uppercase text-center">
          TOKENOMICS
        </h1>

        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={200}
            cy={200}
            innerRadius={150}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* <div className={styles.chart}>
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
        </div> */}
      </div>
    </div>
  );
}

export default Tokenomics;

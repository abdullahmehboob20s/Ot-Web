import styles from "scss/layout/Tokenomics.module.scss";
import { PieChart, Pie, Cell } from "recharts";
import { useCallback, useEffect, useState } from "react";
import RenderActiveShape from "components/RenderActiveShape";

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

// const RenderActiveShapeWrapper = ({
//   wrapperProps,
//   stateProps,
// }: {
//   wrapperProps: any;
//   stateProps: any;
// }) => {
//   useEffect(() => {
//     stateProps(wrapperProps);
//   }, []);
//   return <RenderActiveShape {...wrapperProps} />;
// };

function Tokenomics() {
  const [shapeProps, setShapeProps] = useState<any>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const RADIAN = Math.PI / 180;
  const cos = Math.cos(-RADIAN * shapeProps?.midAngle);
  const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className={styles.containerWrapper}>
      <div className="container-wrapper">
        <div className={styles.wrapper}>
          <h1 className="fs-48px text-gradient font-heading uppercase text-center">
            TOKENOMICS
          </h1>

          {/* <p
            style={{
              position: "absolute",
              top: `${shapeProps?.ex + (cos >= 0 ? 1 : -1) * 12}%` ,
              left: ,
              transform: `translateX(${
                
              }%) translateY(${shapeProps?.ey}%)`,
            }}
          >
            h1
          </p> */}

          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={(props) => (
                // <RenderActiveShapeWrapper
                //   wrapperProps={props}
                //   stateProps={setShapeProps}
                // />
                <RenderActiveShape {...props} />
              )}
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
    </div>
  );
}

export default Tokenomics;

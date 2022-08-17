import styles from "scss/layout/Tokenomics.module.scss";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { useCallback, useEffect, useState } from "react";
import useMediaQuery from "hooks/useMediaQuery";

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

const RenderActiveShape = (props: any) => {
  const isBellow700px = useMediaQuery("(max-width : 700px)");
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <>
      <g>
        <text
          x={cx}
          y={cy}
          dy={-16}
          textAnchor="middle"
          fill={"white"}
          className={`${isBellow700px ? "fs-22px" : "fs-14px"} `}
        >
          Total Supply
        </text>
        <text
          x={cx}
          y={cy}
          dy={isBellow700px ? 8 + 20 : 8 + 13}
          textAnchor="middle"
          fill={"white"}
          className={`${isBellow700px ? "fs-30px" : "fs-24px"} weight-7`}
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey - 10}
          textAnchor={textAnchor}
          fill="white"
          className="anchorTitle"
        >
          {/* {`PV ${value}`} */}
          14% - Staking
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="white"
          className="anchorSubtitle"
        >
          {/* {`(Rate ${(percent * 100).toFixed(2)}%)`} */}
          Tokens will be put into the staking pool
        </text>
      </g>
    </>
  );
};

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

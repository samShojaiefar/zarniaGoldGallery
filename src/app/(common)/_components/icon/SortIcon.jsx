import { Flex } from "antd";
import { Typography } from "antd";
const { Text } = Typography;
export default function SortIcon({ width = 20, height = 20, color }) {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76477 13.2161L5.98085 16.4321L9.19693 13.2161"
        stroke="black"
        strokeWidth="1.20603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.98083 16.4321V3.56781"
        stroke="black"
        strokeWidth="1.20603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19702 3.56781H12.4131"
        stroke="black"
        strokeWidth="1.20603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19702 6.78394H14.8252"
        stroke="black"
        strokeWidth="1.20603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19702 10H17.2372"
        stroke="black"
        strokeWidth="1.20603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

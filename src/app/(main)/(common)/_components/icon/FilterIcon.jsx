import { Flex } from "antd";
import { Typography } from "antd";
const { Text } = Typography;
export default function FilterIcon({ width = 20, height = 20, color }) {
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
        d="M18.0409 2.76379H1.96045L8.39261 10.3698V15.6281L11.6087 17.2362V10.3698L18.0409 2.76379Z"
        stroke="black"
        strokeWidth="1.20603"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

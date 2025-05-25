import { Flex } from "antd";
import { Typography } from "antd";
const { Text } = Typography;
export default function ProfileIcon({ width = 24, height = 24, color }) {
  return (
    <svg
      width={width}
      color={color}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0004 22C17.5232 22 22.0004 17.5228 22.0004 12C22.0004 6.47715 17.5232 2 12.0004 2C6.47752 2 2.00037 6.47715 2.00037 12C2.00037 17.5228 6.47752 22 12.0004 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.001 13C13.6578 13 15.001 11.6569 15.001 10C15.001 8.34315 13.6578 7 12.001 7C10.3441 7 9.00098 8.34315 9.00098 10C9.00098 11.6569 10.3441 13 12.001 13Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00037 20.662V19C7.00037 18.4696 7.21108 17.9609 7.58615 17.5858C7.96123 17.2107 8.46993 17 9.00037 17H15.0004C15.5308 17 16.0395 17.2107 16.4146 17.5858C16.7897 17.9609 17.0004 18.4696 17.0004 19V20.662"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

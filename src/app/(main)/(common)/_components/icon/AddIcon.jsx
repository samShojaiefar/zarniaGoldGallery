export default function AddIcon({ width = 24, height = 24, color ,border}) {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {border&&
      <path
        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        stroke="#715A41"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />}
      <path
        d="M8.5 12H16.5"
        stroke="#715A41"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 8V16"
        stroke="#715A41"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

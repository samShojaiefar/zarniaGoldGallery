export default function TrashIcon({ width = 24, height = 24, color, border }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.5H21"
        stroke="#878787"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 6.5V20.5C19 21.5 18 22.5 17 22.5H7C6 22.5 5 21.5 5 20.5V6.5"
        stroke="#878787"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 6.5V4.5C8 3.5 9 2.5 10 2.5H14C15 2.5 16 3.5 16 4.5V6.5"
        stroke="#878787"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

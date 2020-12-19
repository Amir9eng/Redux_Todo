import * as React from "react";

function BinIcon(props) {
  return (
    <svg
      width={20}
      height={24}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 6.375h18m-1.125 0l-.975 13.66a2.25 2.25 0 01-2.245 2.09h-9.31a2.25 2.25 0 01-2.245-2.09l-.975-13.66h15.75zm-10.125 4.5v6.75-6.75zm4.5 0v6.75-6.75zm1.125-4.5V3a1.125 1.125 0 00-1.125-1.125h-4.5A1.125 1.125 0 006.625 3v3.375h6.75z"
        stroke="#B5B5B9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BinIcon;

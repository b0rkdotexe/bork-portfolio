import React from 'react'

interface Props {
    width: number;
    height: number;
    color: string;
    onClick: () => void;
}

const CloseButton = ({width, height, color, onClick}: Props) => {
    return (
        <div id="close-button" onClick={onClick}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M5 5L19 19M5 19L19 5"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

export default CloseButton;

import React from 'react';

interface IconProps {
    className?: string;
}

export const TriangleIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <polygon points="50,10 90,90 10,90" />
    </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <polygon points="50,10 90,50 50,90 10,50" />
    </svg>
);

export const CircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <circle cx="50" cy="50" r="45" />
    </svg>
);

export const SquareIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <rect x="10" y="10" width="80" height="80" />
    </svg>
);

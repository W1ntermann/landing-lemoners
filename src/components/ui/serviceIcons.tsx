'use client'

import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const WebDevelopmentIcon = (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="15" y="20" width="70" height="55" rx="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="32" r="3" fill="currentColor"/>
        <line x1="25" y1="45" x2="75" y2="45" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="25" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="25" y1="59" x2="65" y2="59" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M 30 68 L 35 78 L 40 68 M 50 68 L 55 78 L 60 68 M 70 68 L 75 78 L 80 68" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

export const UIUXDesignIcon = (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="20" y="15" width="60" height="70" rx="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="35" cy="32" r="5" fill="currentColor" opacity="0.6"/>
        <rect x="48" y="28" width="22" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="25" y1="60" x2="75" y2="60" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="30" cy="72" r="2.5" fill="currentColor"/>
        <circle cx="50" cy="72" r="2.5" fill="currentColor"/>
        <circle cx="70" cy="72" r="2.5" fill="currentColor"/>
    </svg>
);

export const LandingPageIcon = (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M 50 18 L 78 32 L 78 68 L 50 82 L 22 68 L 22 32 Z" stroke="currentColor" strokeWidth="2"/>
        <line x1="50" y1="18" x2="50" y2="82" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <line x1="22" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.7"/>
        <rect x="35" y="40" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
);

export const OptimizationIcon = (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="2"/>
        <path d="M 50 25 L 60 40 L 45 40 Z" fill="currentColor"/>
        <path d="M 50 75 L 40 60 L 55 60 Z" fill="currentColor"/>
        <path d="M 25 50 L 40 40 L 40 60 Z" fill="currentColor"/>
        <path d="M 75 50 L 60 60 L 60 40 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

export const SecurityIcon = (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M 50 20 L 72 32 L 72 55 Q 72 75 50 85 Q 28 75 28 55 L 28 32 Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M 42 52 L 48 60 L 65 38" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
);

export const AnalyticsIcon = (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="20" y1="75" x2="80" y2="75" stroke="currentColor" strokeWidth="2"/>
        <line x1="20" y1="75" x2="20" y2="25" stroke="currentColor" strokeWidth="2"/>
        <rect x="28" y="50" width="8" height="25" fill="currentColor" opacity="0.6"/>
        <rect x="40" y="35" width="8" height="40" fill="currentColor" opacity="0.7"/>
        <rect x="52" y="40" width="8" height="35" fill="currentColor" opacity="0.6"/>
        <rect x="64" y="30" width="8" height="45" fill="currentColor" opacity="0.8"/>
        <circle cx="35" cy="45" r="3" fill="currentColor"/>
        <circle cx="47" cy="30" r="3" fill="currentColor"/>
        <circle cx="59" cy="35" r="3" fill="currentColor"/>
        <circle cx="71" cy="22" r="3" fill="currentColor"/>
    </svg>
);
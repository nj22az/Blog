
import React from 'react';

export const CharacterOne: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(0, 5)">
      <path d="M50 85C25 85 10 65 10 45C10 25 25 10 50 10C75 10 90 25 90 45C90 65 75 85 50 85Z" fill="#F44336"/>
      <path d="M40 70C45 80 55 80 60 70" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="35" cy="45" r="5" fill="#FFF"/>
      <circle cx="65" cy="45" r="5" fill="#FFF"/>
      <path d="M30 40 A 5 5 0 0 1 40 40" stroke="#FFF" strokeWidth="2" fill="none"/>
      <path d="M60 40 A 5 5 0 0 1 70 40" stroke="#FFF" strokeWidth="2" fill="none"/>
      <path d="M50 10 Q 55 0 60 10" fill="#e0e0e0"/>
      <circle cx="55" cy="5" r="3" fill="#F44336"/>
    </g>
  </svg>
);

export const CharacterTwo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <path d="M20 90 H 80 V 50 C 80 30 70 20 50 20 C 30 20 20 30 20 50 Z" fill="#212121"/>
      <rect x="30" y="65" width="40" height="15" fill="#FFF"/>
      <path d="M35 68 V 77" stroke="#212121" strokeWidth="3"/>
      <path d="M45 68 V 77" stroke="#212121" strokeWidth="3"/>
      <path d="M55 68 V 77" stroke="#212121" strokeWidth="3"/>
      <path d="M65 68 V 77" stroke="#212121" strokeWidth="3"/>
      <path d="M35 40 H 65" stroke="#FFF" strokeWidth="4" strokeLinecap="round"/>
      <path d="M35 45 L 30 50" stroke="#FFF" strokeWidth="4" strokeLinecap="round"/>
      <path d="M65 45 L 70 50" stroke="#FFF" strokeWidth="4" strokeLinecap="round"/>
      <path d="M30 25 C 20 15 25 5 35 15" fill="#212121"/>
      <path d="M70 25 C 80 15 75 5 65 15" fill="#212121"/>
    </g>
  </svg>
);

export const CharacterThree: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      <circle cx="50" cy="55" r="35" fill="#f5f5f5"/>
      <path d="M40 60 C 45 55 55 55 60 60" stroke="#212121" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M35 45 L 45 50" stroke="#212121" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 50 L 30 45" stroke="#212121" strokeWidth="3" strokeLinecap="round"/>
      <path d="M65 45 L 55 50" stroke="#212121" strokeWidth="3" strokeLinecap="round"/>
      <path d="M60 50 L 70 45" stroke="#212121" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="48" cy="70" r="3" fill="rgba(0,0,0,0.2)"/>
      <path d="M50 30 L 70 20 L 60 40 Z" fill="#F44336"/>
      <path d="M50 30 L 30 20 L 40 40 Z" fill="#F44336"/>
    </g>
  </svg>
);

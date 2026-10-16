export function RefractionFilters() {
  return (
    <svg aria-hidden="true" className="filter-defs" xmlns="http://www.w3.org/2000/svg">
      <filter id="water-refraction" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.018 0.045" numOctaves="2" seed="7" result="water" />
        <feDisplacementMap in="SourceGraphic" in2="water" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

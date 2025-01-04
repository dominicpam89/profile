export default function GrainyBgComp() {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className="fixed top-0 left-0 z-0 w-full h-full opacity-40 dark:opacity-20"
      >
         <filter id="noiseFilter">
            <feTurbulence
               type="fractalNoise"
               baseFrequency="1.168"
               numOctaves="2"
               stitchTiles="stitch"
            />
         </filter>
         <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
   )
}

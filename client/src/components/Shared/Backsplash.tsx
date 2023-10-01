import React from 'react';
import { Box } from '@chakra-ui/react';

const Backsplash: React.FC = () => {
  return (
    <Box pos='relative' zIndex={11} right='0%' pointerEvents='none'>
      <Box pos='absolute' bottom='10rem' left='-10dvw'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='768'
          height='660'
          viewBox='0 0 864 784'
          fill='none'
        >
          <g opacity='0.4' filter='url(#filter0_f_64_1236)'>
            <path
              d='M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z'
              fill='#43D9AD'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_64_1236'
              x='0'
              y='0.827728'
              width='863.983'
              height='782.77'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='87'
                result='effect1_foregroundBlur_64_1236'
              />
            </filter>
          </defs>
        </svg>
      </Box>
      <Box pos='absolute' bottom='0' left='0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='768'
          height='660'
          viewBox='0 0 868 831'
          fill='none'
        >
          <g opacity='0.4' filter='url(#filter0_f_64_1235)'>
            <path
              d='M477.946 656.519L264.032 605.132L174.663 540.469L201.226 369.957L376.649 350.391L375.041 228.647L577.309 174.392L707.602 205.691L625.165 471.797L497.892 504.987L477.946 656.519Z'
              fill='#4D5BCE'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_64_1235'
              x='0.663574'
              y='0.391769'
              width='880.938'
              height='830.128'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='87'
                result='effect1_foregroundBlur_64_1235'
              />
            </filter>
          </defs>
        </svg>
      </Box>
    </Box>
  );
};

export default Backsplash;

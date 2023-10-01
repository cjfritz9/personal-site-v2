import React, { useContext } from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import { CodleContext } from '../../../../context/Codle.context';
import CodleBoard from './Board';

import { BoltProps, CodleProps } from '../../../../@types/props';
import { CodleInterface } from '../../../../@types/context';


const Codle: React.FC<CodleProps> = ({ styles }) => {
  const { solution, gameWon, gameLost } = useContext(
    CodleContext
  ) as CodleInterface;

  return (
    <Box
      w={[null, null, null, '424px', '512px']}
      p='2rem'
      pt='1rem'
      border='1px solid'
      borderColor='Primary.black'
      bg='linear-gradient(154deg, rgba(23, 85, 83, 0.70) 0%, rgba(67, 217, 173, 0.15) 100%)'
      boxShadow='0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset'
      borderRadius='.5rem'
      pos='relative'
      zIndex={12}
      {...styles}
    >
      <Bolt variant='top-left' />
      <Bolt variant='top-right' />
      <Bolt variant='bottom-left' />
      <Bolt variant='bottom-right' />
      <Stack gap='0'>
        <Heading variant='subHeadline' textAlign='center'>
          Codle
        </Heading>
        <Text
          variant='label'
          textAlign='center'
          color={
            gameWon
              ? 'Accent.emerald !important'
              : gameLost
              ? 'Accent.purple !important'
              : 'Accent.orange !important'
          }
        >
          {gameWon
            ? 'You win!'
            : gameLost
            ? `You lose! Answer: "${solution}"`
            : 'Wordle for Programmers'}
        </Text>
        <Stack>
          <CodleBoard />
        </Stack>
      </Stack>
    </Box>
  );
};

const Bolt: React.FC<BoltProps> = ({ variant }) => {
  const styles = {
    top: variant.includes('top') ? '12px' : undefined,
    bottom: variant.includes('bottom') ? '12px' : undefined,
    left: variant.includes('left') ? '12px' : undefined,
    right: variant.includes('right') ? '12px' : undefined
  };

  return (
    <Box pos='absolute' {...styles}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
      >
        <g filter='url(#filter0_di_64_1304)'>
          <circle
            cx='9.23047'
            cy='9.27106'
            r='6.5'
            fill='url(#paint0_radial_64_1304)'
          />
        </g>
        <path
          d='M6.46094 11.5657L11.9995 6.97635M6.46094 6.97635L11.9995 11.5657'
          stroke='#114944'
        />
        <defs>
          <filter
            id='filter0_di_64_1304'
            x='0.730469'
            y='0.771057'
            width='21'
            height='21'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dx='2' dy='2' />
            <feGaussianBlur stdDeviation='2' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_64_1304'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_64_1304'
              result='shape'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1' />
            <feGaussianBlur stdDeviation='1' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.101667 0 0 0 0 0.508333 0 0 0 0 0.466409 0 0 0 1 0'
            />
            <feBlend
              mode='normal'
              in2='shape'
              result='effect2_innerShadow_64_1304'
            />
          </filter>
          <radialGradient
            id='paint0_radial_64_1304'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(9.23047 6.27106) rotate(90) scale(9.5)'
          >
            <stop offset='0.151042' stopColor='#196C6A' />
            <stop offset='1' stopColor='#114B4A' />
          </radialGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default Codle;

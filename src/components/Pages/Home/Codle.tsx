import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';

import { CodleContext } from '../../../context/CodleContext';
import { BoltProps, CodleInputRowProps } from '../../../@types/props';
import { CodleInterface } from '../../../@types/context';
import { getStyleMap, handleUpdateBoard } from '../../../utils/codle';
import { updatePlayerData } from '../../../hooks/requests';
import { GameBoard } from '../../../models/Codle';
import { StyleMap } from '../../../@types/codle';

const Codle: React.FC = () => {
  const { solution, gameWon, gameLost } = useContext(
    CodleContext
  ) as CodleInterface;

  return (
    <Box
      display={['none', 'none', 'none', 'block']}
      w={[null, null, null, '424px', '512px']}
      p='2rem'
      pt='1rem'
      border='1px solid'
      borderColor='Primary.black'
      bg='linear-gradient(154deg, rgba(23, 85, 83, 0.70) 0%, rgba(67, 217, 173, 0.15) 100%)'
      boxShadow='0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset'
      borderRadius='.5rem'
      pos='relative'
      zIndex={1}
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
            : 'Programming Themed Wordle'}
        </Text>
        <Stack>
          <CodleBoard />
        </Stack>
      </Stack>
    </Box>
  );
};

const CodleBoard: React.FC = () => {
  const { setGameLost } = useContext(CodleContext) as CodleInterface;
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    if (activeRow >= 6) {
      setGameLost(true);
    }
  }, [activeRow]);

  return (
    <Stack w='100%' h='100%' justifyContent='center' alignItems='center'>
      {Array.from(new Array(6)).map((_, i) => {
        return (
          <CodleInputRow
            key={i}
            isActive={activeRow === i}
            setActiveRow={setActiveRow}
            index={i}
          />
        );
      })}
    </Stack>
  );
};

const CodleInputRow: React.FC<CodleInputRowProps> = ({
  isActive,
  setActiveRow,
  index
}) => {
  const { playerId, solution, startingBoard, isLoading, setGameWon } =
    useContext(CodleContext) as CodleInterface;

  const [currentBoard, setCurrentBoard] =
    React.useState<GameBoard>(startingBoard);
  const [guess, setGuess] = useState('');
  const [styleMap, setStyleMap] = useState<StyleMap>(getStyleMap(index === 0));

  const firstInputRef = useRef(null);

  const handleRowSubmission = () => {
    const { wonGame, map } = handleUpdateBoard(guess, solution);
    if (wonGame) {
      currentBoard.setGameWon();
      setGameWon(wonGame);
    } else {
      setActiveRow((prev) => prev + 1);
    }
    currentBoard.addGuess(guess);
    currentBoard.addRowStyle(map);
    setStyleMap(map);
    setCurrentBoard(currentBoard);
    (async () => {
      await updatePlayerData(playerId, {
        didWin: wonGame,
        guesses: currentBoard.guesses,
        guessMap: JSON.stringify(currentBoard.boardStyle)
      });
    })();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (currentBoard.isWon) return;
    if (e.key === 'Enter' && guess.length === 5) {
      return handleRowSubmission();
    }
    if (e.key === 'Backspace' && guess.length) {
      return setGuess((prev) => prev.slice(0, -1));
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (alphabet.includes(e.key.toLowerCase()) && guess.length < 5) {
      return setGuess((prev) => prev + e.key);
    }
  };

  const handleClick = () => {
    if (firstInputRef.current) {
      (firstInputRef.current as HTMLInputElement).focus();
    }
  };

  useEffect(() => {
    if (isActive && firstInputRef && firstInputRef.current) {
      const firstInput: HTMLInputElement = firstInputRef.current;
      firstInput.focus();
    }
    setStyleMap(currentBoard.boardStyle[index] ?? getStyleMap(isActive));
  }, [isActive]);

  useEffect(() => {
    console.log(isActive);
    console.log(currentBoard.currentRow);
    setCurrentBoard(startingBoard);
    setStyleMap(startingBoard.boardStyle[index] ?? getStyleMap(isActive));
    setActiveRow(startingBoard.currentRow);
    console.log('re-render');
  }, [startingBoard]);

  return (
    <Flex
      gap='.5rem'
      cursor={'text'}
      onClick={isActive ? handleClick : undefined}
    >
      <Input
        bgColor={isLoading ? 'gray.600' : styleMap[0].bgColor}
        transition='all .75s ease'
        ref={firstInputRef}
        variant='codle'
        maxLength={1}
        pointerEvents={isActive && !currentBoard.isWon ? 'auto' : 'none'}
        onKeyDown={(e) => handleKeyDown(e)}
        value={
          (currentBoard.guesses[index] && currentBoard.guesses[index][0]) ||
          guess[0] ||
          ''
        }
        readOnly
      />
      <Input
        bgColor={isLoading ? 'gray.600' : styleMap[1].bgColor}
        transition='all .75s ease'
        variant='codle'
        maxLength={1}
        cursor={'text'}
        pointerEvents='none'
        onKeyDown={(e) => handleKeyDown(e)}
        value={
          (currentBoard.guesses[index] && currentBoard.guesses[index][1]) ||
          guess[1] ||
          ''
        }
        readOnly
      />
      <Input
        bgColor={isLoading ? 'gray.600' : styleMap[2].bgColor}
        transition='all .75s ease'
        variant='codle'
        maxLength={1}
        cursor={'text'}
        pointerEvents='none'
        onKeyDown={(e) => handleKeyDown(e)}
        value={
          (currentBoard.guesses[index] && currentBoard.guesses[index][2]) ||
          guess[2] ||
          ''
        }
        readOnly
      />
      <Input
        bgColor={isLoading ? 'gray.600' : styleMap[3].bgColor}
        transition='all .75s ease'
        variant='codle'
        maxLength={1}
        cursor={'text'}
        pointerEvents='none'
        onKeyDown={(e) => handleKeyDown(e)}
        value={
          (currentBoard.guesses[index] && currentBoard.guesses[index][3]) ||
          guess[3] ||
          ''
        }
        readOnly
      />
      <Input
        bgColor={isLoading ? 'gray.600' : styleMap[4].bgColor}
        transition='all .75s ease'
        variant='codle'
        maxLength={1}
        cursor={'text'}
        pointerEvents='none'
        onKeyDown={(e) => handleKeyDown(e)}
        value={
          (currentBoard.guesses[index] && currentBoard.guesses[index][4]) ||
          guess[4] ||
          ''
        }
        readOnly
      />
    </Flex>
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

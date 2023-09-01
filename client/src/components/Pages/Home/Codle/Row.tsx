import { useContext, useEffect, useRef, useState } from 'react';
import { Flex, Input } from '@chakra-ui/react';

import { SiteContext } from '../../../../context/Site.context';
import { CodleContext } from '../../../../context/Codle.context';
import { getStyleMap, handleUpdateBoard } from '../../../../utils/codle';

import { CodleInputRowProps } from '../../../../@types/props';
import { StyleMap } from '../../../../@types/codle';
import { CodleInterface, SiteInterface } from '../../../../@types/context';

const CodleInputRow: React.FC<CodleInputRowProps> = ({
  isActive,
  currentBoard,
  onUpdateBoard,
  index
}) => {
  const { solution, isLoading } = useContext(CodleContext) as CodleInterface;
  const { isUsingTerminal } = useContext(SiteContext) as SiteInterface;
  const [guess, setGuess] = useState('');
  const [styleMap, setStyleMap] = useState<StyleMap>(getStyleMap(index === 0));

  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleRowSubmission = () => {
    const { wonGame, map } = handleUpdateBoard(guess, solution);
    if (wonGame) {
      currentBoard.setGameWon();
    }
    currentBoard.addGuess(guess);
    currentBoard.addRowStyle(map);
    setStyleMap(map);
    onUpdateBoard(currentBoard);
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
    if (isActive && !isUsingTerminal) {
      firstInputRef.current?.focus();
    }
    setStyleMap(currentBoard.boardStyle[index] ?? getStyleMap(isActive));
  }, [isActive, currentBoard.boardStyle]);

  return (
    <Flex
      gap='.5rem'
      cursor={'text'}
      onClick={isActive ? handleClick : undefined}
    >
      {Array.from(new Array(5)).map((_, i) => {
        return (
          <Input
            key={i}
            bgColor={isLoading ? 'gray.600' : styleMap[i].bgColor}
            ref={i === 0 ? firstInputRef : undefined}
            variant='codle'
            maxLength={1}
            pointerEvents={isActive && !currentBoard.isWon ? 'auto' : 'none'}
            onKeyDown={(e) => handleKeyDown(e)}
            value={
              (currentBoard.guesses[index] && currentBoard.guesses[index][i]) ||
              guess[i] ||
              ''
            }
            readOnly
          />
        );
      })}
    </Flex>
  );
};

export default CodleInputRow;

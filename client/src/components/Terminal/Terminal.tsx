import React, {
  ChangeEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Flex, Text, Input, Badge, keyframes } from '@chakra-ui/react';

import Suggestions from './Suggestions';
import {
  AutoCompletionResult,
  CDResult,
  TerminalModes
} from '../../@types/props';
import { getCdList, terminalSuggestions } from '../../lib/terminal';
import { SiteContext } from '../../context/Site.context';
import { SiteInterface } from '../../@types/context';

const blink = keyframes`
  0% { opacity: 0; }
  49% { opacity: 0; }
  50% { opacity: 1; }
`;
const blinkAnimation = `${blink} infinite 1s linear`;

const Terminal: React.FC = () => {
  const {
    isUsingTerminal,
    location,
    navigate,
    setIsUsingTerminal,
    setIsSudoUser
  } = useContext(SiteContext) as SiteInterface;
  const [terminalInput, setTerminalInput] = useState('');
  const [mode, setMode] = useState<TerminalModes>('auto-complete');
  const [suggestionResults, setSuggestionResults] =
    useState<AutoCompletionResult[]>(terminalSuggestions);
  const [cdResults, setCdResults] = useState<CDResult[]>(
    getCdList(location.pathname)
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const comparisonValue = e.target.value.toLowerCase().trim();
    setTerminalInput(comparisonValue);

    if (!comparisonValue.length && mode === 'auto-complete') {
      setShowSuggestions(true);
    }

    if (mode === 'cd') {
      const results = getCdList(location.pathname + location.search).filter(
        (result) => result.dirname.includes(comparisonValue)
      );
      if (!results[0]) {
        setCdResults([
          {
            dirname: `no matches for ${comparisonValue}`,
            handle: location.pathname
          }
        ]);
      } else {
        setCdResults(
          getCdList(location.pathname + location.search).filter(
            (result) =>
              result.dirname !== 'PARENT' &&
              result.dirname.includes(comparisonValue)
          )
        );
      }
    }

    if (mode === 'auto-complete') {
      const results = terminalSuggestions.filter(
        (suggestion) =>
          suggestion.type.includes(comparisonValue) ||
          suggestion.description.includes(comparisonValue)
      );
      if (!results[0]) {
        setSuggestionResults([
          {
            type: 'Error',
            description: `no results for ${terminalInput}`
          }
        ]);
      } else {
        setSuggestionResults(
          terminalSuggestions.filter(
            (suggestion) =>
              suggestion.type.includes(comparisonValue) ||
              suggestion.description.includes(comparisonValue)
          )
        );
      }
    }

    if (comparisonValue.includes('cd:') || comparisonValue.includes('cd ')) {
      setMode('cd');
      setTerminalInput((prev) => prev.slice(3));
    }
    if (comparisonValue.includes('sudo:')) {
      setMode('sudo');
      setTerminalInput((prev) => prev.slice(5));
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      if (mode === 'cd') {
        if (
          cdResults[0] &&
          !cdResults[0].dirname.includes('no matches') &&
          !cdResults[0].dirname.includes('PARENT')
        ) {
          setTerminalInput(cdResults[0].dirname);
          setCdResults([cdResults[0]]);
        }
      }
      if (mode === 'auto-complete') {
        if (terminalInput === 'cd') {
          setMode('cd');
          setTerminalInput((prev) => prev.slice(3));
        }
        if (terminalInput.includes('ho')) {
          setTerminalInput('home');
        }
        if (terminalInput.includes('su')) {
          setMode('sudo');
          setTerminalInput((prev) => prev.slice(7));
        }
      }
    }

    if (e.key === 'Enter') {
      if (mode === 'cd') {
        if (!terminalInput.length) {
          setMode('auto-complete');
          setSuggestionResults(terminalSuggestions);
          return navigate('/');
        }
        if (terminalInput === '..') {
          const parentDir = getCdList(location.pathname + location.search).find(
            (result) => result.dirname === 'PARENT'
          ) as CDResult;
          return navigate(parentDir.handle);
        }
        const result = cdResults.filter(
          (result) => result.dirname === terminalInput
        )[0];
        if (!result) return;
        navigate(result.handle);
      }
      if (mode === 'auto-complete') {
        if (terminalInput.includes('home')) {
          setSuggestionResults(terminalSuggestions);
          navigate('/');
        }
      }

      if (mode === 'sudo') {
        if (terminalInput === 'cjfritz9') {
          setIsSudoUser(true);
          window.localStorage.setItem('sudo-user', 'cjfritz9');
          setSuggestionResults([
            { type: 'success', description: 'welcome back, cjfritz9' }
          ]);
          setTimeout(() => {
            setMode('auto-complete');
            setTerminalInput('');
            setSuggestionResults(terminalSuggestions);
          }, 2000);
        } else {
          setSuggestionResults([
            {
              type: 'error',
              description: `${terminalInput} is not a valid credential`
            }
          ]);
          setTimeout(() => {
            setTerminalInput('');
            setSuggestionResults([
              { type: 'sudo', description: 'sign in as superuser' }
            ]);
          }, 2000);
        }
      }
    }

    if (e.key === '.') {
      if (terminalInput === '..') {
        setCdResults([
          {
            dirname: 'return to parent directory',
            handle: location.pathname
          }
        ]);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
    if (e.key === 'Backspace' && terminalInput.length === 0) {
      setMode('auto-complete');
      setSuggestionResults(terminalSuggestions);
    }
  };

  const handleClick = () => {
    setIsUsingTerminal(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    setCdResults(getCdList(location.pathname + location.search));
    setTerminalInput('');
  }, [location]);

  return (
    <Flex
      cursor='text'
      pointerEvents={showSuggestions ? 'none' : 'auto'}
      bg={isUsingTerminal ? 'Primary.dkGray' : 'Primary.dkSlate'}
      pos='relative'
      h='100%'
      grow={1}
      alignItems='center'
      px='1.5rem'
      onClick={handleClick}
      onBlur={() => setIsUsingTerminal(false)}
      overflow='hidden'
    >
      {showSuggestions && (
        <Suggestions
          mode={mode}
          autoCompleteResults={suggestionResults}
          cdResults={cdResults}
        />
      )}
      <Text color='Accent.emerald !important'>{'>'}</Text>
      {mode === 'cd' && (
        <Badge colorScheme='red' mx='.5rem'>
          cd
        </Badge>
      )}
      {mode === 'sudo' && (
        <Badge colorScheme='red' mx='.5rem'>
          sudo
        </Badge>
      )}
      <Input
        ref={inputRef}
        w={terminalInput.length + 1 + 'ch'}
        value={terminalInput}
        pr='0 !important'
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => handleKeyUp(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      <Input
        w='1ch'
        px='0'
        color='Secondary.slate'
        value='_'
        animation={blinkAnimation}
        readOnly
      />
    </Flex>
  );
};

export default Terminal;

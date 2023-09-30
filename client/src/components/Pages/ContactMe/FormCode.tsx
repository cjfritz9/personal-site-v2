import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { Flex, Center, HStack, Stack, Text } from '@chakra-ui/react';
import { ContactContext } from '../../../context/Contact.context';

const FormCode: React.FC = () => {
  const { name, email, message } = useContext(ContactContext)!;
  const [lineCount, setLineCount] = useState(0);
  const codeElementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (codeElementRef?.current) {
      setLineCount(Math.ceil(codeElementRef.current.clientHeight / 23.5));
    }
  }, [codeElementRef.current, name, email, message]);

  return (
    <Flex h='100%' w='100%' justifyContent='center'>
      <HStack mt='7rem' w='75%' alignItems='start' gap='40px'>
        <Stack gap='0px' alignItems='flex-end'>
          {Array.from({ length: lineCount + 2 }, (_, i) => i + 1).map(
            (num: number, i: number) => {
              return (
                <Text key={i} variant='snippet'>
                  {num}
                </Text>
              );
            }
          )}
        </Stack>
        <Stack ref={codeElementRef} gap={'20px'}>
          <Stack gap={0}>
            <HStack gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                {'const ['}
              </Text>
              <Text variant='snippet' color='Accent.orange !important'>
                formState
              </Text>
              <Text variant='snippet'>,</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='Secondary.indigo !important'>
                dispatchFormAction
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {']'}
              </Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet'>{'='}</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='Secondary.indigo !important'>
                useReducer
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {'('}
              </Text>
              <Text variant='snippet' color='Secondary.indigo !important'>
                formReducer
              </Text>
              <Text variant='snippet'>{', {'}</Text>
            </HStack>
            <HStack pl='1.5rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.rose !important'>
                name
              </Text>
              <Text variant='snippet'>:</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='#98C379 !important'>
                '{name.length ? name : 'John Smith'}',
              </Text>
            </HStack>
            <HStack pl='1.5rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.rose !important'>
                email
              </Text>
              <Text variant='snippet'>:</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='#98C379 !important'>
                '{email.length ? email : 'john.smith123@yahoo.com'}',
              </Text>
            </HStack>
            <HStack pl='1.5rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.rose !important'>
                message
              </Text>
              <Text variant='snippet'>:</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text
                variant='snippet'
                maxH='232px'
                color='#98C379 !important'
                pl='1.5rem'
                wordBreak='break-word'
                overflow='hidden'
                textOverflow='ellipsis'
              >
                '
                {message.length
                  ? message
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                '
              </Text>
            </HStack>
            <HStack gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet'>{'}'}</Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {')'}
              </Text>
              <Text variant='snippet'>{';'}</Text>
            </HStack>
          </Stack>
          <Stack gap={0}>
            <HStack gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                const
              </Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='Secondary.indigo !important'>
                handleSubmit
              </Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet'>{'='}</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {'async () => {'}
              </Text>
              <HStack gap={0} pl='1.5rem' wrap='wrap' alignItems='start'>
                <Text variant='snippet' color='Accent.purple !important'>
                  {'const {'}
                </Text>
                <Text variant='snippet'>&nbsp;</Text>
                <Text variant='snippet' color='Accent.orange !important'>
                  isValid
                </Text>
                <Text variant='snippet'>,</Text>
                <Text variant='snippet'>&nbsp;</Text>
                <Text variant='snippet' color='Accent.orange !important'>
                  statusMsg
                </Text>
                <Text variant='snippet'>&nbsp;</Text>
                <Text variant='snippet' color='Accent.purple !important'>
                  {'}'}
                </Text>
                <Text variant='snippet'>&nbsp;</Text>
                <Text variant='snippet'>{'='}</Text>
                <Text variant='snippet'>&nbsp;</Text>
                <Text variant='snippet' color='Secondary.indigo !important'>
                  getFormIsValid
                </Text>
                <Text variant='snippet' color='Accent.purple !important'>
                  {'('}
                </Text>
                <Text variant='snippet' color='Accent.orange !important'>
                  formState
                </Text>
                <Text variant='snippet' color='Accent.purple !important'>
                  {')'}
                </Text>
                <Text variant='snippet'>;</Text>
              </HStack>
            </HStack>
            <HStack pl='1.5rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                if
              </Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet'>{'('}</Text>
              <Text variant='snippet' color='Accent.orange !important'>
                isValid
              </Text>
              <Text variant='snippet'>{')'}</Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {'{'}
              </Text>
            </HStack>
            <HStack pl='3rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                await
              </Text>
              <Text variant='snippet'>&nbsp;</Text>
              <Text variant='snippet' color='Secondary.indigo !important'>
                postContactForm
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {'('}
              </Text>
              <Text variant='snippet' color='Accent.orange !important'>
                formState
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {')'}
              </Text>
              <Text variant='snippet'>;</Text>
            </HStack>
            <HStack pl='3rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Secondary.indigo !important'>
                setSuccess
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {'('}
              </Text>
              <Text variant='snippet' color='Accent.orange !important'>
                statusMsg
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {')'}
              </Text>
              <Text variant='snippet'>;</Text>
            </HStack>
            <HStack pl='1.5rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                {'} else {'}
              </Text>
            </HStack>
            <HStack pl='3rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Secondary.indigo !important'>
                setError
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {'('}
              </Text>
              <Text variant='snippet' color='Accent.orange !important'>
                statusMsg
              </Text>
              <Text variant='snippet' color='Accent.purple !important'>
                {')'}
              </Text>
              <Text variant='snippet'>;</Text>
            </HStack>
            <HStack pl='1.5rem' gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                {'}'}
              </Text>
            </HStack>
            <HStack gap={0} wrap='wrap' alignItems='start'>
              <Text variant='snippet' color='Accent.purple !important'>
                {'}'}
              </Text>
              <Text variant='snippet'>;</Text>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default FormCode;

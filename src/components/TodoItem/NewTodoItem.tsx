import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Textarea, Flex, HStack } from '@chakra-ui/react';
import { useRef, useState, useEffect, ChangeEvent } from 'react';

interface Props {
  setIsTodoAdded: (value: boolean) => void;
}

export const NewTodoItem = ({ setIsTodoAdded }: Props) => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const textAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [textAreaValue]);

  return (
    <>
      <Box
        minW="250px"
        minH="100px"
        borderWidth="1px"
        borderColor="yellow.400"
        rounded="md"
        shadow="sm"
        position="relative"
        bg="gray.700"
      >
        <Flex
          p="4"
          minH="100px"
          w="full"
          justifyContent="center"
          align="center"
        >
          <HStack spacing="1" position="absolute" p="2" top="0" right="0">
            <CheckCircleIcon
              onClick={() => setIsTodoAdded(true)}
              cursor="pointer"
              color="green.300"
            />
          </HStack>
          <Textarea
            mt="2"
            ref={textAreaRef}
            onChange={textAreaChange}
            spellCheck={false}
            overflow="hidden"
            w="full"
            variant="flushed"
            rows={1}
            resize="none"
            color="whiteAlpha.900"
            placeholder="Write your task"
          />
        </Flex>
      </Box>
    </>
  );
};

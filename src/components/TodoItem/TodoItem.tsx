import { Box, Checkbox, Flex, HStack, Icon, Textarea } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ITodoItem } from 'src/types/Todo';
import { MdCancel, MdCheckCircle, MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

export const TodoItem = ({ completed, id, text }: ITodoItem) => {
  const [textAreaValue, setTextAreaValue] = useState<string | null>(text);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean | null>(completed);
  const [cachedValue, setCachedValue] = useState<string>('');

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

  useEffect(() => {
    if (isEditable) {
      setCachedValue(textAreaRef!.current!.value);
    } else {
      setCachedValue('');
    }
  }, [isEditable]);

  return (
    <>
      <Box
        w="250px"
        minH="100px"
        borderWidth="1px"
        borderColor="yellow.400"
        rounded="md"
        shadow="sm"
        position="relative"
        bg="gray.700"
      >
        <Flex
          p="3"
          minH="100px"
          w="full"
          justifyContent="center"
          align="center"
        >
          <HStack>
            {!isEditable && (
              <>
                <Box p="2" position="absolute" top="0" left="0">
                  <Checkbox
                    mr="1"
                    size="md"
                    defaultChecked={isCompleted ?? false}
                    onChange={() => setIsCompleted(!isCompleted)}
                  />
                </Box>
                <HStack spacing="1" p="2" position="absolute" top="0" right="0">
                  <Icon
                    boxSize={4}
                    cursor="pointer"
                    color="yellow.300"
                    as={MdDelete}
                  />
                  <Icon
                    boxSize={4}
                    cursor="pointer"
                    color="yellow.300"
                    as={FaEdit}
                    onClick={() => setIsEditable(true)}
                  />
                </HStack>
              </>
            )}
            {isEditable && (
              <>
                <HStack spacing="1" position="absolute" p="2" top="0" right="0">
                  <>
                    <Icon
                      boxSize={4}
                      cursor="pointer"
                      color="red.300"
                      as={MdCancel}
                      onClick={() => {
                        setTextAreaValue(cachedValue);
                        setIsEditable(false);
                      }}
                    />
                    <Icon
                      boxSize={4}
                      cursor="pointer"
                      color="green.300"
                      as={MdCheckCircle}
                      onClick={() => setIsEditable(false)}
                    />
                  </>
                </HStack>
              </>
            )}
          </HStack>
          <Textarea
            disabled={!isEditable}
            mt="2"
            ref={textAreaRef}
            onChange={textAreaChange}
            spellCheck={false}
            overflow="hidden"
            w="full"
            variant={isEditable ? 'flushed' : 'unstyled'}
            rows={1}
            resize="none"
            color="whiteAlpha.900"
            placeholder="Write your task"
            value={textAreaValue ?? ''}
            textDecorationLine={isCompleted ? 'line-through' : 'none'}
          />
        </Flex>
      </Box>
    </>
  );
};

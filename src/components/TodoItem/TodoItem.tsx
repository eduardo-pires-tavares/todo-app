import {
  Box,
  Flex,
  HStack,
  Icon,
  Textarea,
  Text,
  Button,
  ButtonGroup
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ITodoItem } from 'src/types/types';
import { MdCancel, MdCheckCircle, MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import _ from 'lodash';

interface Props extends DraggableProvidedDragHandleProps {
  item: ITodoItem;
}

export const TodoItem = (props: Props) => {
  const { text, id } = props.item;
  const dragProps = _.omit(props, 'item');

  const [textAreaValue, setTextAreaValue] = useState<string | null>(text);
  const [isEditable, setIsEditable] = useState<boolean>(false);
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
      <Flex p="3" minH="100px" w="full" justifyContent="center" align="center">
        <HStack>
          {!isEditable && (
            <>
              <ButtonGroup
                spacing="1"
                p="2"
                position="absolute"
                top="0"
                right="0"
              >
                <Button p="0" minW="auto" h="auto" colorScheme="transparent">
                  <Icon
                    boxSize={4}
                    cursor="pointer"
                    color="yellow.300"
                    as={MdDelete}
                  />
                </Button>
                <Button
                  p="0"
                  minW="auto"
                  h="auto"
                  colorScheme="transparent"
                  onClick={() => setIsEditable(true)}
                >
                  <Icon
                    boxSize={4}
                    cursor="pointer"
                    color="yellow.300"
                    as={FaEdit}
                  />
                </Button>
              </ButtonGroup>
            </>
          )}
          {isEditable && (
            <>
              <ButtonGroup
                spacing="1"
                position="absolute"
                p="2"
                top="0"
                right="0"
              >
                <>
                  <Button
                    p="0"
                    minW="auto"
                    h="auto"
                    colorScheme="transparent"
                    onClick={() => {
                      setTextAreaValue(cachedValue);
                      setIsEditable(false);
                    }}
                  >
                    <Icon
                      boxSize={4}
                      cursor="pointer"
                      color="red.300"
                      as={MdCancel}
                    />
                  </Button>
                  <Button
                    p="0"
                    minW="auto"
                    h="auto"
                    colorScheme="transparent"
                    onClick={() => setIsEditable(false)}
                  >
                    <Icon
                      boxSize={4}
                      cursor="pointer"
                      color="green.300"
                      as={MdCheckCircle}
                    />
                  </Button>
                </>
              </ButtonGroup>
            </>
          )}
        </HStack>
        {!isEditable && (
          <Flex {...dragProps} pt="3" alignItems="center" h="75px" w="full">
            <Text color="whiteAlpha.900" w="full">
              {textAreaValue}
            </Text>
          </Flex>
        )}
        {isEditable && (
          <Textarea
            disabled={!isEditable}
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
            value={textAreaValue ?? ''}
          />
        )}
      </Flex>
    </Box>
  );
};

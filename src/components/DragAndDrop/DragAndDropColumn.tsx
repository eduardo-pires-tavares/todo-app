import { ColorMode, Heading, VStack } from '@chakra-ui/react';
import { Droppable } from 'react-beautiful-dnd';
import { IColumn } from 'src/types/types';
import { DragAndDropItem } from './DragAndDropItem';
import { v4 as uuidv4 } from 'uuid';

interface IColorMode {
  colorMode: ColorMode;
}

type Props = IColumn & IColorMode;

export const DragAndDropColumn = ({ tasks, id, title, colorMode }: Props) => {
  return (
    <VStack
      borderRadius="lg"
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
      p="4"
      pb="6"
      m="4"
    >
      <Heading pb="4">{title}</Heading>
      <Droppable droppableId={id}>
        {(provided) => (
          <VStack
            minW="250px"
            spacing="4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((item, index) => (
              <DragAndDropItem key={uuidv4()} item={item} index={index} />
            ))}
            {provided.placeholder}
          </VStack>
        )}
      </Droppable>
    </VStack>
  );
};

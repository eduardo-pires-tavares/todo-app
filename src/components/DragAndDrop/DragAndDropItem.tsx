import { Box } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import { ITodoItem } from 'src/types/types';
import { TodoItem } from '../TodoItem/TodoItem';
import { v4 } from 'uuid';

type Props = {
  index: number;
  item: ITodoItem;
};

export const DragAndDropItem = ({ index, item }: Props) => {
  return (
    <Draggable draggableId={item.id} key={item.id} index={index}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.draggableProps}>
          <TodoItem {...provided.dragHandleProps!} item={item} key={v4()} />
        </Box>
      )}
    </Draggable>
  );
};

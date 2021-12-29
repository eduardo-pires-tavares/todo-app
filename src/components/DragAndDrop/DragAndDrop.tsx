import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { IDragDropColumns } from 'src/types/types';
import { DragAndDropColumn } from './DragAndDropColumn';
import { onDragEnd } from './DragAndDropUtils';

interface DragAndDropGridProps {
  data: IDragDropColumns;
}

export const DragAndDropGrid = ({ data }: DragAndDropGridProps) => {
  const [columns, setColumns] = useState<IDragDropColumns>(data);
  const { colorMode } = useColorMode();

  return (
    <Box>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          alignItems="flex-start"
          flexWrap="wrap"
        >
          {Object.values(columns).map(({ title, id, tasks }, index) => (
            <DragAndDropColumn
              key={index}
              id={id}
              title={title}
              tasks={tasks}
              colorMode={colorMode}
            />
          ))}
        </Flex>
      </DragDropContext>
    </Box>
  );
};

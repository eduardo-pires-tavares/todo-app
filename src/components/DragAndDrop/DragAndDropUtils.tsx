import { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { IColumn, IDragDropColumns } from 'src/types/types';

const reorder = (columns: IColumn, startIndex: number, endIndex: number) => {
  const result = Array.from(columns.tasks);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: IColumn,
  destination: IColumn,
  dropSource: DraggableLocation,
  dropDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source.tasks);
  const destinationClone = Array.from(destination.tasks);
  const [removed] = sourceClone.splice(dropSource.index, 1);

  destinationClone.splice(dropDestination.index, 0, removed);

  const result = {};

  result[dropSource.droppableId] = sourceClone;
  result[dropDestination.droppableId] = destinationClone;

  return result;
};

export const onDragEnd = (
  { source, destination }: DropResult,
  columns: IDragDropColumns,
  setColumns: React.Dispatch<React.SetStateAction<IDragDropColumns>>
) => {
  //Valid Destination
  if (!source || !destination) {
    return;
  }

  //Item ins't  moving
  if (
    source.droppableId === destination.droppableId ||
    destination.index === source.index
  ) {
    return;
  }

  // Set start and end variables
  const startInd = +source.droppableId;
  const endInd = +destination.droppableId;

  // If start is the same as end, we're in the same column
  if (startInd === endInd) {
    const items = reorder(columns[startInd], source.index, destination.index);
    columns[startInd].tasks = items;

    setColumns(columns);
  } else {
    // If start is different from end, we need to update multiple columns

    const result = move(
      columns[startInd],
      columns[endInd],
      source,
      destination
    );

    columns[startInd] = result[startInd];
    columns[endInd] = result[endInd];

    setColumns(columns);
  }
};

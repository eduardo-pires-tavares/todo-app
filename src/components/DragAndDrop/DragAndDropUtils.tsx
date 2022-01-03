import { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { IColumn } from 'src/types/types';

const reorder = (column: IColumn, startIndex: number, endIndex: number) => {
  const result = Array.from(column.tasks);
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

  console.log(result);

  return result;
};

export const onDragEnd = (
  { source, destination }: DropResult,
  columns: IColumn[],
  setColumns: React.Dispatch<React.SetStateAction<IColumn[]>>
) => {
  //Valid Destination
  if (!source || !destination) {
    return;
  }

  const sourceId = source.droppableId;
  const destId = destination.droppableId;

  //Item ins't  moving
  if (destination.index === source.index && sourceId === destId) {
    return;
  }

  // Set start and end variables

  // If start is the same as end, we're in the same column
  if (sourceId === destId) {
    const col = columns.find(({ id }) => id === sourceId)!;
    const items = reorder(col, source.index, destination.index);
    const newCols = [...columns];

    console.log(columns);

    newCols.find(({ id }) => id === sourceId)!.tasks = items;

    setColumns(newCols);
  } else {
    // If start is different from end, we need to update multiple columns

    const sourceCol = columns.find(({ id }) => id === sourceId)!;
    const destCol = columns.find(({ id }) => id === destId)!;

    const result = move(sourceCol, destCol, source, destination);

    const newCols = [...columns];

    newCols.find(({ id }) => id === sourceId)!.tasks = result[sourceId];
    newCols.find(({ id }) => id === destId)!.tasks = result[destId];

    setColumns(newCols);
  }
};

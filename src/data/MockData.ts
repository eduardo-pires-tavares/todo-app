import { IColumn } from 'src/types/types';
import { v4 as uuidv4, v4 } from 'uuid';

const MockTodoColumn: IColumn = {
  id: 'todo',
  title: 'Todo',
  tasks: [{ id: '1', text: 'Todo' }]
};

const MockDoneColumn: IColumn = {
  id: 'done',
  title: 'Done',
  tasks: [
    { id: '3', text: 'Done1' },
    { id: '4', text: 'Done2' },
    { id: '5', text: 'Done3' }
  ]
};

export const MockColumns: IColumn[] = [MockTodoColumn, MockDoneColumn];

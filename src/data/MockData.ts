import { IColumn, IDragDropColumns } from 'src/types/types';

const MockTodoColumn: IColumn = {
  id: 'todo',
  title: 'Todo',
  tasks: [{ id: '1', text: 'Todo' }]
};

const MockDoneColumn: IColumn = {
  id: 'done',
  title: 'Done',
  tasks: [
    { id: '3', text: 'Done' },
    { id: '5', text: 'Done' },
    { id: '5', text: 'Done' }
  ]
};

export const MockColumns: IDragDropColumns = {
  todo: MockTodoColumn,
  done: MockDoneColumn
};

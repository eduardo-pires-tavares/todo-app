export enum ColumnType {
  'Todo',
  'Done'
}
export interface ITodoItem {
  id: string;
  text: string;
}

export interface IColumn {
  title: keyof typeof ColumnType;
  id: string;
  tasks: ITodoItem[];
}

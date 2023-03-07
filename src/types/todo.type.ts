export enum TodoStatus {
  'TODO'= 'To Do',
  'IN_PROGRESS'= 'In progress',
  'DONE'= 'Done'
}

export interface ITodo {
  id: string;
  createdAt: Date;
  updatedAt?: Date;
  name: string;
  status: TodoStatus;
  isDeleted?: boolean;
}

import { ToDoListModule } from './list.module';

describe('ToDoListModule', () => {
  let toDoListModule: ToDoListModule;

  beforeEach(() => {
    toDoListModule = new ToDoListModule();
  });

  it('should create an instance', () => {
    expect(toDoListModule).toBeTruthy();
  });
});

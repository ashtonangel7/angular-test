export class TaskItem {
  public isDone = false;

  constructor(public title: string) {}

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}

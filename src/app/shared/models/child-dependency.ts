export class ChildDependency {
  id: string;
  prerequisite: number;
  constructor(id: string, prerequisite: number) {
    this.id = id;
    this.prerequisite = prerequisite;
  }
}

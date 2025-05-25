// Create a file Subject.ts and write a Subject class in the same namespace named Subjects.
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Student} from "../models/student";

export class InMemoryStudentService implements InMemoryDbService {
  createDb() {
    let students: Array<Student> = [
        {
            id: 12,
            age: 27,
            name: 'Jaime',
            lastname: 'Valencia',
          },
          {
            id: 35,
            age: 21,
            name: 'Carlos',
            lastname: 'Sepulveda',
          },
          {
            id: 23,
            age: 26,
            name: 'Camilo',
            lastname: 'Garcia',
          }
    ];

    return {students};
  }
}
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Ricky Bobby' },
      { id: 11, name: 'John Doe' },
    ];
    return { heroes };
  }
}

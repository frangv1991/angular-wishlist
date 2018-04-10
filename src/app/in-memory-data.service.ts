import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const videogames = [
      { id: 1, title: 'Crash Bandicoot', onSale: true, platform: 'PS4' },
      { id: 2, title: 'Spyro', onSale: false, platform: 'PS4' },
      { id: 3, title: 'Xenoblade Chronicles 2', onSale: true, platform: 'Switch' }
    ];

    const platforms = [
      { id: 1, name: 'PS4', actualGen: true, videogames: ['Crash Bandicoot', 'Spyro'] },
      { id: 2, name: 'Switch', actualGen: true, videogames: ['Xenoblade Chronicles 2'] }
    ];

    return {videogames, platforms};
  }
}

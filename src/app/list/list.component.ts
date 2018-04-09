import { Component, OnInit } from '@angular/core';

import { Videogame } from '../videogame';
import { Platform } from '../platform';
import { VideogameService } from '../videogame.service';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videogames: Videogame[];
  platforms: Platform[];

  constructor(private videogameService: VideogameService, private platformService: PlatformService) { }

  ngOnInit() {
    this.getVideogames();
    this.getPlatforms();
  }

  getVideogames(): void {
    this.videogameService.getVideogames().subscribe(videogames => this.videogames = videogames);
  }

  getPlatforms(): void {
    this.platformService.getPlatforms().subscribe(platforms => this.platforms = platforms);
  }

}

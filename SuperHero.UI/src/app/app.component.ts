import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        HttpClientModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'SuperHero.UI';
    heroes: SuperHero[] = [];

    constructor(private superHeroService: SuperHeroService) { }

    ngOnInit(): void {
        this.superHeroService
            .getSuperHeroes()
            .subscribe((result: SuperHero[]) => (this.heroes = result));
    } 
}

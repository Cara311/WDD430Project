import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Test description', 'https://images.pexels.com/photos/4147872/pexels-photo-4147872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

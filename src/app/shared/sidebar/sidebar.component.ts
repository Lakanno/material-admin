import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { routes } from '../../consts/routes';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'E-commerce',
    children: [{name: 'Product Manager'}, {name: 'Products Grid'}, {name: 'Product page'}],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  public routes: typeof routes = routes;
  public isOpenUiElements = false;


  constructor() {
    this.dataSource.data = TREE_DATA;
  }


  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}

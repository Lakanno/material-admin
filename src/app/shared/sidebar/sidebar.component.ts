import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { routes } from '../../consts/routes';
import { IMatNode } from '../models/mat-tree.interface';

const TREE_DATA: IMatNode[] = [
  {
    name: 'E-commerce',
    children: [
      {name: 'Product Manager', routerLink: routes.COMMERCE_MANAGE, },
      {name: 'Products Grid', routerLink: routes.COMMERCE_GRID, }, 
      {name: 'Product page', routerLink: routes.COMMERCE_PAGE,}
    ],
    icon: 'shopping_cart'
  },

  {
    name: 'Users',
    children: [
      {name: 'User add', routerLink: routes.USER_ADD},
      {name: 'User edit', routerLink: routes.USER_EDIT}, 
      {name: 'User list', routerLink: routes.USER_LIST}
    ],
    icon: 'supervised_user_circle'
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  treeControl = new NestedTreeControl<IMatNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<IMatNode>();


  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }


  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  hasChild = (_: number, node: IMatNode) => !!node.children && node.children.length > 0;

  isLeaf =(_: number, node: IMatNode) => !node.children || !node.routerLink;



}

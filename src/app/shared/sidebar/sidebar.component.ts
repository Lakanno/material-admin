import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { routes } from '../../consts/routes';

interface ENode {
  name: string;
  children?: ENode[];
}

const TREE_DATA: ENode[] = [
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
  treeControl = new NestedTreeControl<ENode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ENode>();

  public routes: typeof routes = routes;
  public isOpenUiElements = false;


  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  hasChild = (_: number, node: ENode) => !!node.children && node.children.length > 0;

}

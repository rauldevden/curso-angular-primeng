import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items:[
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog'
          }
        ]
      },

    ]
  }
  // ngOnInit(){
  //   this.menuItems = [
  //     {label: 'New', icon: 'pi pi-fw pi-plus'},
  //     {label: 'Open', icon: 'pi pi-fw pi-download'},
  //     {label: 'Undo', icon: 'pi pi-fw pi-undo'},
  //   ]
  // }

}

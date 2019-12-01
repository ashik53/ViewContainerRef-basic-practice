import { Component, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'vcr',
  template: `
    <ng-template #tpl>
      <h1> ViewContainerRef</h1> 
    </ng-template>
    <div>
      Some element
    </div>
    <div #container>
    </div>
    
  `
})
export class VcrComponent{
  //creating viewContainer reference via viewChild
  @ViewChild('container', { read: ViewContainerRef , static:false}) _vcr;
  //create a reference of html portion above
  @ViewChild('tpl', {static: false}) tpl;

  

  ngAfterViewInit(){
    //use viewContaineRef 
    //if you don't use viewContainerRef reference to create view, it will not work 
    this._vcr.createEmbeddedView(this.tpl);
  }

}
@Component({
  selector: 'app-root',
  template: `<div><vcr> </vcr> </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
}

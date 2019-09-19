import { Component, TemplateRef, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'configuration-section',
  template: `
    <div class="container">
      <div class="left-content">
        <h3 class="section-title">{{sectionTitle}}</h3>
        <ng-container *ngTemplateOutlet="leftContent">
        </ng-container>
      </div>
      <div class="right-content" [class.top-offset]="!rightContentTopAligned">
        <ng-container *ngTemplateOutlet="rightContent">
        </ng-container>
      </div>
    </div>
  `,
})
export class ConfigurationSectionComponent  {
  @Input() public sectionTitle: string;
  @Input() public rightContentTopAligned: boolean;
  @ContentChild("rightContent") public rightContent: TemplateRef<any>;
  @ContentChild("leftContent") public leftContent: TemplateRef<any>;
}

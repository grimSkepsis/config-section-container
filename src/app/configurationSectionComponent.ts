import { Component, TemplateRef, Input, ContentChild } from '@angular/core';

/**
 * Component for making a generic configuration section, with a section title
 * and content (usually a description) on the left side and some more content
 * (usually configuration controls) on the right
 */
@Component({
  selector: 'configuration-section',
  template: `
    <div class="section">
      <div class="left-content" [style.width]="leftContentWidth">
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
  styleUrls: ['./configurationSection.less']
})
export class ConfigurationSectionComponent  {
  //title of the section
  @Input() public sectionTitle: string;
  //whether or not the right content should be aligned to the section title
  //default is true
  @Input() public rightContentTopAligned: boolean = true;
  //width of the left hand content, default is 50%
  @Input() public leftContentWidth: string = "50%";
  //content to display on the right side
  @ContentChild("rightContent") public rightContent: TemplateRef<any>;
  //content to display on the left side
  @ContentChild("leftContent") public leftContent: TemplateRef<any>;
}

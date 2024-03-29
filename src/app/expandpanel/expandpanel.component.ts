import { Component } from '@angular/core';

interface Data {
  title: string;
  inputValue: string;
  description: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-expandpanel',
  templateUrl: './expandpanel.component.html',
  styleUrls: ['./expandpanel.component.css'],
})
export class ExpandpanelComponent {
  messageFromChild: string = '';
  receivedData: Data | null = null;

  items: Data[] = [
    {
      title: 'Title 1',
      inputValue: 'Title 1',
      description:
        'Using the template binding syntax, the form control is now registered to the name input element in the template. The form control and DOM element communicate with each other: the view reflects changes in the model, and the model reflects changes in the view.',
      isExpanded: false,
    },
    {
      title: 'Title 2',
      inputValue: 'Title 2',
      description:
        'We found a Contributor License Agreement for you (the sender of this pull request), but were unable to find agreements for the commit author(s). If you authored these, maybe you used a different email address in the git commits than was used to sign the CLA (login here to double check)? If these were authored by someone else, then they will need to sign a CLA as well, and confirm that they re okay with these being contributed to Google.',
      isExpanded: false,
    },
    {
      title: 'Title 3',
      inputValue: 'Title 3',
      description:
        'Learn how to use the Angular CLI to create, develop, and maintain Angular projects from a command shell. See the command syntax, options, and schematics for generating and modifyin',
      isExpanded: false,
    },
  ];

  toggleDescription(index: number): void {
    this.items.forEach((item, i) => {
      if (i === index) {
        item.isExpanded = !item.isExpanded;
      } else {
        item.isExpanded = false;
      }
    });
  }

  receiveNotification(messgae: string) {
    this.messageFromChild = messgae;
  }

  receiveData(data: Data): void {
    this.receivedData = data;
  }
}

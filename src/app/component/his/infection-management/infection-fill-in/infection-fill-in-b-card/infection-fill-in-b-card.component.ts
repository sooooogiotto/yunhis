import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-infection-fill-in-b-card',
  templateUrl: './infection-fill-in-b-card.component.html',
  styleUrls: ['./infection-fill-in-b-card.component.scss', '../../../../common/modal.scss', '../../../../common/form.scss']
})
export class InfectionFillInBCardComponent implements OnInit {

  @Input() bIsVisible: boolean;
  @Input() infectionId: string;
  @Input() isInfectionHiv: boolean;
  @Input() isInfectionSecond: boolean;

  @Output() closeCard: EventEmitter<object> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  handleCancel(flag: string) {
    if (flag === 'record') {
      this.bIsVisible = false;
      this.closeCard.emit({
        recordIsVisible: true,
        isInfectionHiv: this.isInfectionHiv,
        isInfectionSecond: this.isInfectionSecond
      });
    } else if (flag === 'hiv') {
      this.bIsVisible = false;
      this.closeCard.emit({
        hivIsVisible: true,
        isInfectionHiv: this.isInfectionHiv,
        isInfectionSecond: this.isInfectionSecond
      })
    } else if (flag === 'submit') {
      this.closeCard.emit({
        submit: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv,
        bIsVisible: true
      })
    } else {
      this.closeCard.emit({
        close: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv
      })
    }
  }
}

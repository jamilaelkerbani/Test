import { Component, OnInit } from '@angular/core';
import { trigger,state, style,transition, animate,} from '@angular/animations';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css'],
  animations: [
    trigger('slide', [
      state('void', style({ transform: 'translateY(20px)', opacity: 0 })),
      transition('void => *', [
        animate(
          '500ms ease-in',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class AProposComponent implements OnInit {

  constructor(private translate: TranslateService){}

  animationState = 'void';
  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = '*';
    }, 1000);
  }
}

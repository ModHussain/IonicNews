import { NgModule, Directive , ElementRef  } from '@angular/core';

@Directive({
  selector: '[appScrollbar]'
})
export class ScrollbarDirective {

  constructor(el: ElementRef) {
    const stylesheet = `
      ::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5;
      }
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #AAA;
        border-radius: 10px;
        background-image: -webkit-linear-gradient(90deg,
                              rgba(0, 0, 0, .2) 25%,
                              transparent 25%,
                              transparent 50%,
                              rgba(0, 0, 0, .2) 50%,
                              rgba(0, 0, 0, .2) 75%,
                              transparent 75%,
                              transparent)
      }
      ::-webkit-scrollbar-thumb:hover {
      }
    `;

    const styleElmt = el.nativeElement.shadowRoot.querySelector('style');

    if (styleElmt) {
      styleElmt.append(stylesheet);
    } else {
      const barStyle = document.createElement('style');
      barStyle.append(stylesheet);
      el.nativeElement.shadowRoot.appendChild(barStyle);
    }

  }

}
@NgModule({
  declarations: [ ScrollbarDirective ],
  exports: [ ScrollbarDirective ]
})
export class ScrollbarModule  {}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) { 
    
  }

}

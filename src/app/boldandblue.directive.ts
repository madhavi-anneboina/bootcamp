import { Directive, ElementRef,OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appBoldandblue]'
})
export class BoldandblueDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { 

  }
  ngOnInit(): void {
    this.renderer.listen(this.elRef.nativeElement,'mouseenter',()=>{
      this.renderer.setStyle(this.elRef.nativeElement,'color',"blue");
      this.renderer.setStyle(this.elRef.nativeElement,'font-weight',"bold");
    })
    
  }

}

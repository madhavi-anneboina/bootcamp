import { Directive, ElementRef,Input,OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appBoldandblue]'
})
export class BoldandblueDirective implements OnInit {
   
  @Input() appBoldandblue: string=""
  constructor(private elRef:ElementRef, private renderer:Renderer2) { 
  }
  ngOnInit(): void {
  
    this.renderer.listen(this.elRef.nativeElement,'mouseenter',()=>{
      this.renderer.setStyle(this.elRef.nativeElement,'color',"blue");
      this.renderer.setStyle(this.elRef.nativeElement,'font-weight',"bold");
    })
    this.renderer.listen(this.elRef.nativeElement,'mouseleave',()=>{
      this.renderer.setStyle(this.elRef.nativeElement,'color',"pink");
      this.renderer.setStyle(this.elRef.nativeElement,'font-weight',"bold");
    })
    
  }

}

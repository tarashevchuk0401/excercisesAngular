import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  lorem: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quaerat at molestias assumenda reiciendis quos ad facilis, vitae ullam nobis nulla nemo consequatur dicta deleniti consectetur tempora numquam debitis reprehenderit voluptate aspernatur temporibus placeat. Eligendi odit maiores nisi minus soluta aliquam commodi facilis ea, rerum dignissimos vel at et vitae. Dolor necessitatibus sequi deserunt error voluptatum obcaecati architecto doloribus magni veniam rerum rem iusto asperiores cupiditate mollitia excepturi facere optio maxime quas nulla eius aliquid ex quisquam, itaque labore! Aut consectetur eligendi ut dolores omnis ad, sint dolor perspiciatis voluptates ullam dolore corporis doloremque, eos asperiores est impedit? Quis dolorem in placeat perferendis rerum, a sunt tempore animi totam eos veritatis adipisci nostrum, blanditiis itaque corporis nemo aperiam unde ipsam. Voluptatem sit eos beatae molestiae non natus neque omnis impedit, nihil nulla? Nulla odio voluptates libero corporis quam, itaque quidem officiis quod, aut perspiciatis eius, quis quia voluptatum! Perspiciatis numquam laborum commodi est quas minus tenetur quis, perferendis quisquam, beatae harum saepe aspernatur eaque delectus accusamus consectetur soluta. Expedita laudantium ab commodi fugit? Aut vitae numquam laborum natus exercitationem alias expedita eaque deserunt molestias suscipit excepturi veniam eligendi labore omnis illo quia voluptas odit sed reiciendis explicabo nam, possimus quasi.'


  scrollYPosition: number = 0;

  @ViewChild('sectionHome') sectionHome!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): any {
    this.scrollYPosition = window.scrollY;

  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  navigateTo(sectionHome: HTMLElement) {
    const yOffset = sectionHome.offsetTop - 50;
    window.scrollTo({
      top: yOffset
    })
  }

  test() {
    const element = this.sectionHome.nativeElement;
    const height = element.offsetTop; // Height in pixels
    console.log(`Element height: ${height}px`);
  }
}

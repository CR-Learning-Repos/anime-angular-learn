import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-anime-selector',
  templateUrl: './anime-selector.component.html',
  styleUrls: ['./anime-selector.component.scss']
})
export class AnimeSelectorComponent implements OnInit, AfterViewInit {
  title = 'Property keyframes';
  public example1;
  public example2;
  public example3;
  @ViewChild("target1") target1;
  @ViewChild("target2") target2;
  constructor() { }
  ngAfterViewInit(): void {
    this.example1 = {
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 }
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: true
    }

    this.example2 = {
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 }
      ],
      loop: true
    }

    this.example3 = {
      // targets: '.css-prop-demo .el',
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
      baseFrequency: 0,
      scale: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
    }


  }

  ngOnInit(): void {

  }


}

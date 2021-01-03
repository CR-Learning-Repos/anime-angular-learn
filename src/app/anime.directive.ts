import { Directive, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';
import anime from 'animejs';
@Directive({
  selector: '[appAnime],[anime]'
})
export class AnimeDirective implements OnChanges, OnDestroy {

  @Input() anime = null;
  private animeInstance;
  constructor(private elRef: ElementRef) { }

  ngOnDestroy(): void {
    this.dispose();
  }
  ngOnChanges(changes): void {
    if ('anime' in changes) {
      this.dispose();
      this.animeInstance = anime({
        targets: this.elRef.nativeElement,
        ...this.anime
      })
    }
  }

  private dispose() {
    if (this.animeInstance) {
      anime.remove(this.elRef.nativeElement);
      this.animeInstance = null;
    }
  }
}

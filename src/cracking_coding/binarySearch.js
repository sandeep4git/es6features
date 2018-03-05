var binarySearch = function (arr, s, n, x) {
    if (n >= 1) {
        var mid = Math.floor(s + (n - s) / 2);
        //console.log(arr[mid]);
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] > x) {
            return binarySearch(arr, s, mid - 1, x);
        }
        else {
            return binarySearch(arr, mid + 1, n, x);
        }

    }
}
var arr = [2, 3, 4, 10, 40];
var n = arr.length;
var x = 2;
console.log(binarySearch(arr, 0, n - 1, x));

import { Component } from '@angular/core';

@Component({
    selector: 'like-dislike',
    template: `
      <div>
        <button type="button" class="like-button"(click)="showLikesCount($event)">Like |{{likes}}</button>
        <button type="button" class="dislike-button"
 (click)="showDisLikesCount($event)">DisLike |{{dislikes}}</button>
      </div>
  `,
    styles: [`
    .like-button, .dislike-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:   #585858;
    }

    .liked, .disliked {
        font-weight: bold;
        color: #1565c0;
    }
  `]
})

export class LikeDislikeComponent {
    likes: number = 100;
    dislikes: number = 25;
    isActive: boolean = true;
    showLikesCount(event) {

        this.likes += this.isActive ? 1 : -1;
        this.isActive = !this.isActive;
    }
    showDisLikesCount(event) {
        this.dislikes += this.isActive ? -1 : 1;
        this.isActive = !this.isActive;
    }
}
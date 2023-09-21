import {Component} from "@angular/core";

@Component({
  selector: 'app-post3',
  template: `
    <div class="post3">
      <h2>Post 3 Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt distinctio dolorem enim hic inventore iure odio optio quaerat, ut!
      </p>
    </div>
  `,
  styles: [`
    .post3 {
      border: 1px #111111;
      border-radius: 10px;
    }
  `]
})

export class Post3Component {
}

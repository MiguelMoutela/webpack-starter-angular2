import {Component} from "@angular/core";

@Component({
  selector: "my-about",
  template: `
    <h2>About Component</h2>
    <p>This is the about component which can be found in src/components/about.ts</p>
  `,
})
export class About {
  constructor() {
    console.log("In About constructor");
  }
}

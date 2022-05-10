import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  template: `
  <p>
    Hello {{ username$ | async }}!
  </p>
`,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  username$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('username'))
  );

  constructor(private route: ActivatedRoute) { }

}

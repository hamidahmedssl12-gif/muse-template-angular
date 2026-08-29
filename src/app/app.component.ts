import { Component } from '@angular/core'

import { ButtonComponent } from './button.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <main>
      <h1>Muse Angular Template</h1>
      <app-button></app-button>
    </main>
  `,
})
export class AppComponent {}

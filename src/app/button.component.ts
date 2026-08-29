import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button [disabled]="disabled" [class]="variant">{{ label }}</button>
  `,
  styles: [
    `
      button {
        padding: 8px 16px;
        border-radius: 6px;
        border: none;
        font-weight: 500;
        cursor: pointer;
      }
      button.primary {
        background: #4f46e5;
        color: #fff;
      }
      button.secondary {
        background: #e5e7eb;
        color: #111;
      }
      button:disabled {
        opacity: 0.5;
        cursor: default;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() label = 'Click me'
  @Input() disabled = false
  @Input() variant: 'primary' | 'secondary' = 'primary'
}

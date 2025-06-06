import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
  @Input('title')
  title: string = '';

  @Input('primaryBtnText')
  primaryBtnText: string = '';

  @Input('secondaryBtnText')
  secondaryBtnText: string = '';

  @Output('submit')
  onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}

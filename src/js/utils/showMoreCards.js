export class Toggle {
  constructor(button) {
    this._button = button;
  }
  toggleButton(boolean) {
    if (boolean) {
    this._button.classList.add('toggle');
    }
    else {
    this._button.classList.remove('toggle');
    }
  }
}
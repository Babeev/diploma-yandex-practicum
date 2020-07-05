export class SearchInput {
  constructor(callBack, input, button, error) {
    this.callBack = callBack;
    this.input = input;
    this.button = button;
    this.error = error;
  }
  _err(err, bool) {
    if(bool) {
      this.error.classList.add('header__err_active');
      this.error.textContent = err;
    } else {
      this.error.classList.remove('header__err_active');
      this.error.textContent = err;
    }
  }
  _validate(query) {
    if(!query.length) {
      this._err('Запрос должен содержать не менее 1 буквы или цифры', true);
      return false;
    } else {
      this._err('', false);
      return true;
    }
    }
  submit() {
    if(!this._validate(this.input.value)) {
      return;
    } else {
      this.callBack.querry();
    }
  }
}
export class Load {
  constructor(preloader, input, button, error, errorText, resuls, commit) {
    this.preloader = preloader;
    this.input = input;
    this.button = button;
    this.error = error;
    this.errorText = errorText;
    this.resuls = resuls;
    this.commit = commit;
  }
  loading(boolean) {
    if(boolean) {
      this.resuls.classList.remove('toggle');
      this.preloader.classList.add('toggle');
      this.input.disabled = true; 
      this.button.disabled = true; 
    } else {
      this.resuls.classList.add('toggle');
      this.preloader.classList.remove('toggle');
      this.input.disabled = false; 
      this.button.disabled = false; 
    }
  }
  err(boolean, text) {
    if(boolean) {
      this.resuls.classList.remove('toggle');
      this.error.classList.add('toggle__err');
      this.errorText.textContent = text;
    } else {
      this.error.classList.remove('toggle__err');
    }  
  }
  commits(boolean) {
    if(boolean) {
      this.commit.classList.remove('toggle');
    } else {
      this.commit.classList.add('toggle');
    } 
  }
}
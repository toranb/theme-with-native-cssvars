import $ from 'jquery';
import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  theme: 'dark',
  actions: {
    toggle() {
      const oldTheme = get(this, 'theme');
      if (oldTheme === 'dark') {
        set(this, 'theme', 'light');
      }else{
        set(this, 'theme', 'dark');
      }
      const newTheme = get(this, 'theme');

      $('body').removeClass(`${oldTheme}-theme`);
      $('body').addClass(`${newTheme}-theme`);
    }
  }
});

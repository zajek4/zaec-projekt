(function () {
  'use strict';
  document.addEventListener('click', function (event) {
    var add = event.target.closest('.zaec-add-row');
    if (add) {
      var repeater = add.closest('.zaec-repeater');
      var rows = repeater.querySelector('.zaec-repeater__rows');
      var tpl = repeater.querySelector('template');
      var index = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      var html = tpl.innerHTML.replace(/__INDEX__/g, index);
      rows.insertAdjacentHTML('beforeend', html);
      return;
    }
    var remove = event.target.closest('.zaec-remove-row');
    if (remove) {
      remove.closest('.zaec-repeater__row').remove();
    }
  });
})();

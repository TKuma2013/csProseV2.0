(function() {
  'use strict';

  angular
    .module('csProse')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

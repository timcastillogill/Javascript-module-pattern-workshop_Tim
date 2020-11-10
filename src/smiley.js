"use strict";

(function(exports) {
  let SMILEY = ':)'

  function smiley(string) {
    return string + ' ' + SMILEY;
  };

  exports.smiley = smiley;
})(this);
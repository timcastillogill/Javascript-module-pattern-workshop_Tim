"use strict";

(function(exports) {
  function interrobang(exclaim, question, string) {
    return exclaim(question(smiley(string)));
  };

  exports.interrobang = interrobang;
})(this);

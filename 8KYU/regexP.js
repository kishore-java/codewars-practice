String.prototype.digit = function() {
    return this.length === 1 && /^\d$/.test(this)
  };
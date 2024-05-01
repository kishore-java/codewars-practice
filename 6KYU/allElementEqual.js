function eqAll(iterable) {
    const iterator = iterable[Symbol.iterator]()
    const first = iterator.next().value
    for(const x of iterator) {
      if (x !== first) return false
    }
    return true
  }
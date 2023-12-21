function cookie(x) {
    var t = typeof x
    var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
  }
function howMuchILoveYou(petals) {
    // your code
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];

  // Calculate the index of the last phrase based on the number of petals
  const lastPetalIndex = (petals - 1) % phrases.length;

  return phrases[lastPetalIndex];
}

function getFirstPython(list) {
    // Thank you for checking out my kata :)
    const listFilter = list.filter((people) => people.language === 'Python')[0]
    if(listFilter === undefined) {
      return 'There will be no Python developers'
    }
    const { firstName, country} = listFilter;
    return `${firstName}, ${country}`
  }
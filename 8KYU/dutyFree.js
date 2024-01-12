function dutyFree(normPrice, discount, hol){
    return Math.floor(hol * 100 / (normPrice * discount))
    }
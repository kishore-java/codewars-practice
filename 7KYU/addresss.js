function addressNote(address ,n){
    const totalHouses = 2 * n;

// Calculate the opposite house number using the formula: totalHouses - (address - 1)
const oppositeHouse = totalHouses - (address - 1);

return oppositeHouse;
}
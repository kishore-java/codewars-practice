let size = 8; // Change this variable to adjust the size of the chessboard

let chessboard = ""; // Initialize an empty string to store the chessboard pattern

// Loop through each row of the chessboard
for (let row = 0; row < size; row++) {
    // Loop through each column of the current row
    for (let col = 0; col < size; col++) {
        // Check if the sum of the row and column indexes is even
        if ((row + col) % 2 === 0) {
            // If even, add a space character to the chessboard string
            chessboard += " ";
        } else {
            // If odd, add a "#" character to the chessboard string
            chessboard += "#";
        }
    }
    // Add a newline character to move to the next row
    chessboard += "\n";
}

// Output the generated chessboard
console.log(chessboard);

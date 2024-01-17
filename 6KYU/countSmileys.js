function countSmileys(arr) {
    const regex = /[:;][-~]?[)D]/;
   
       // Filter the array to keep only valid smiley faces
       const validSmileys = arr.filter(face => regex.test(face));
   
       // Return the count of valid smiley faces
       return validSmileys.length;
   }

function generateHashtag (str) {
    if(str.length === 0 || str.trim().length === 0)return false;
     let stringform = "#" + str.trim()
              .split(' ')
              .map(ele => {
                 if(ele){
              return  ele[0].toUpperCase() + ele.slice(1)
                }
            } ).join('');
    return stringform.length > 140 ? false : stringform
  }
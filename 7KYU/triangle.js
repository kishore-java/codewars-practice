/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######  */
let str=''
function triangle(){
    for(let i =0 ; i < 7 ; i++){
        str+='#'
        console.log('triangel' , str)
    }
    
}

triangle()
const fizzbuzz = (n)=> 
                Array.from({length: n}, (_,i)=> i+1)
                  .map( el=> el % 3 === 0  && el % 5 === 0 ? 'FizzBuzz' : 
                        el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el )
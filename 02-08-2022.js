function prime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false
        }
    }
    return true
}

function gap(g, m, n) {
    let primes = [] 
   for(let i = m; i < n; i++){
        if (prime(i)){
            primes.push(i)
        }
   }
let ordenedPrimes = []

  primes.forEach((n,i) =>{
      ordenedPrimes.push([n,primes[i + 1]])
  })
  

    for(let i = 0; i < ordenedPrimes.length; i++){
        if((ordenedPrimes[i][1] - ordenedPrimes[i][0]) === g ){
            return ordenedPrimes[i]
        }
    }
    return  null
}


gap(8,300,400)
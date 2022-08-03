
function gap(g, m, n) {
    let primes = 0 
    let isPrime = function(num){
        for(let i = 2; i < num; i++){
            if(num % i === 0) {
                return false
            }
        }
        return true
    }
    
   for(let i = m; i <= n; i++)
        if (isPrime(i)){
            if(i - primes == g) return [primes, i]
            else primes = i
        }
        

 return null  
}


gap(8,500000000,6000000000)
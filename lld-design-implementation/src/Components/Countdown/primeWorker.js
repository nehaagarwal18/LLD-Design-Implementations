
onmessage = function (e) {
    const limit = e.data;
    const primes = [];
    // check for algo of sieveOfEratosthenes for O(nlog(n))
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(num);
    }
  
    postMessage(primes); // send primes back
};
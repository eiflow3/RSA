

function generatePrime() {
    // Generates a random prime number between 50 and 100
    while (true) {
        const num = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        if (isPrime(num)) {
            return num;
        }   
    }
}

function isPrime(num) {
    // Checks if a number is prime
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function gcd(a, b) {
    // Calculates the greatest common divisor (GCD) of two numbers
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}


function modInverse(a, m) {
    // Calculate the modular inverse of a under modulo m
    let m0 = m, y = 0, x = 1;
    if (m === 1) return 0;

    while (a > 1) {
        const q = Math.floor(a / m);
        [m, a] = [a % m, m];
        [y, x] = [x - q * y, y];
    }
    if (x < 0) x += m0;

    return x;
}

export default function generateKeys() {
    // Generates RSA public and private key pairs
    let p = generatePrime();
    let q = generatePrime();
    while (p === q || p > q) {
        p = generatePrime();
        q = generatePrime();
    }

    // Calculate n and phi
    const n = p * q;
    const phi = (p - 1) * (q - 1);

    // Choose a public exponent e
    let e = Math.floor(Math.random() * (phi - 2)) + 2;
    while (gcd(e, phi) !== 1) {
        e = Math.floor(Math.random() * (phi - 2)) + 2;
    }

    // Calculate the private exponent d
    const d = modInverse(e, phi);
    // console.log("Public key:", [e, n]);
    // console.log("Private key:", [d, n]);
    return [[e, n], [d, n]]; // Return public and private key pairs
}

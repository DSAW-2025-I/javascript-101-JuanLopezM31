// Sum of Two Numbers
function sum(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n != "number" || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
  }

  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str != "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  let vocales = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (vocales.indexOf(str[i]) != -1) {
      contador++;
    }
  }
  return contador;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n != "number" || n < 2) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  for (let divisor = 2; divisor * divisor <= n; divisor++) {
    if (n % divisor == 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

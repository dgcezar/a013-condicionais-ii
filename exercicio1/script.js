const num = Number(prompt("Digite um número: "));

if (num % 2 === 0) {
  console.log("O número digitado é divisível por 2");
  if (num % 3 === 0) {
    console.log("O número digitado é divisível por 3");
  }
  } else if (num % 3 === 0) {
    console.log("O número digitado é divisível por 3");
  }
  else {
    console.log("O número digitado é um número primo");
}

if (num % 2 === 0 && num % 3 === 0) {
    console.log("O número digitado é divisível por 2 e por 3");
    } else {
        console.log("O número digitado não é divisível por 2 e por 3");
    }


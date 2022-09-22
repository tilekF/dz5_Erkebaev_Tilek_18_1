//side effect - побочный эффект
function MakeTriangle(height, symbol = "*") {
    for (let i = 0; i < height; i++) {
      console.log(symbol.repeat(i + 1));
    }
  }
  
  // MakeTriangle(10, "$");
  // MakeTriangle(7, "%");
  // MakeTriangle(4);
  
  var cardNumbers = ["6706620507064557", "4215890115000363"];
  // for (var cardNumber of cardNumbers) {
  //   var result = ValidateByLuhn(cardNumber);
  //   console.log(
  //     "Your card number " + FormatCardNumber(cardNumber, " ") + " is",
  //     result ? "valid" : "invalid"
  //   );
  // }
  
  //function declaration - определение функции
  function ValidateByLuhn(cardNumber) {
    if (!cardNumber) return false;
  
    var isSecond = false;
    var cardNumberSum = 0;
    for (var i = cardNumber.length - 1; i >= 0; i--) {
      var currentDigit = Number(cardNumber[i]);
  
      if (isSecond) {
        currentDigit *= 2;
        var doubledCurrentDigit = currentDigit.toString().padStart(2, "0"); // 8 -> 08, 16 -> 16
        cardNumberSum +=
          Number(doubledCurrentDigit[0]) + Number(doubledCurrentDigit[1]); // 0 + 8 = 8, 1 + 6 = 7
      } else {
        cardNumberSum += currentDigit;
      }
      isSecond = !isSecond;
    }
  
    return cardNumberSum % 10 === 0;
  }
  
  //function expression - функциональное выражение
  var ValidateByLuhn2 = function (cardNumber) {
    if (!cardNumber) return false;
  
    var isSecond = false;
    var cardNumberSum = 0;
  
    for (var currentDigit of cardNumber.split('').reverse().join('')) {
      currentDigit = Number(currentDigit);
  
      if (isSecond) {
        currentDigit *= 2;
        var doubledCurrentDigit = currentDigit.toString().padStart(2, "0"); // 8 -> 08, 16 -> 16
        cardNumberSum +=
          Number(doubledCurrentDigit[0]) + Number(doubledCurrentDigit[1]); // 0 + 8 = 8, 1 + 6 = 7
      } else {
        cardNumberSum += currentDigit;
      }
      isSecond = !isSecond;
    }
  
    return cardNumberSum % 10 === 0;
  };
  
  //default parameters - параметры по умолчанию
  function FormatCardNumber(cardNumber, separator = " ") {
    var groups = [];
    //separator = separator || "-";
    for (let i = 0; i < cardNumber.length / 4; i++) {
      groups.push(cardNumber.substring(i, i + 4));
    }
    return groups.join(separator);
  }
  
  for (var cardNumber of cardNumbers) {
    var result = ValidateByLuhn2(cardNumber);
    console.log(
      "Your card number " + FormatCardNumber(cardNumber, " ") + " is",
      result ? "valid" : "invalid"
    );
  }
var CountChar = "a", str = "Abrakadabra";
function count(str, CountChar) {

  for (var count = 0, index = 0; index != -1; count++, index = str.indexOf(CountChar, index + 1));

  return count;
}

document.writeln(count(str, CountChar)) // 5

var CountChar = "Abrakadabra"
var CountChar = "o", str = "Hello world";
function count(str, CountChar) {

  for (var count = -1, index = 0; index != -1; count++, index = str.indexOf(CountChar, index + 1));

  return count;
}

document.writeln(count(str, CountChar)) //2
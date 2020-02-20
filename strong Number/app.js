var answer = [];

function calc(input) {
  for (var i = 0; i <= input.length / 2 - 1; i++) {
    if (input[i] > input[input.length - 1 - i]) {
      // answer.push(input[i]);
      answer.push(input[i]);
      //   console.log(answer);
      return answer;
    } else if (input[i] < input[input.length - 1 - i]) {
      answer.push(input[input.length - 1 - i]);
      //   console.log(answer);
    }
  }
  if (input.length % 2) {
    var middle = input[Math.round((input.length - 1) / 2)];
    answer.push(middle);

    input = [];

    input = answer;
  }

  //   console.log(input);
  return input;
}

function strongNum() {
  var makan = calc([2, 3, 8, 10, 23, 40, 90, 12, 7]);
  return makan;
}

function strongNum1() {
  var makan1 = calc(strongNum());
  console.log(makan1);
}

// // strongNum();
//  for (var i = 0 ,var ayam=strongNum(); i <= ayam.length / 2 - 1; i++) {
//    if (ayam[i] > ayam[ayam.length - 1 - i]) {
//      // answer.push(input[i]);
//      answer.push(ayam[i]);
//      //   console.log(answer);
//      return answer;
//    } else if (ayam[i] < ayam[ayam.length - 1 - i]) {
//      answer.push(ayam[ayam.length - 1 - i]);
//      //   console.log(answer);
//    }
//  }

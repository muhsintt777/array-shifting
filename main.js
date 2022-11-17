const myArr = [1, 3, 2, 7, 4, 6];
const position = 2;
const direction = 0;

const shiftArr = (myArr, position, direction) => {
  if (!myArr.length || !position) {
    console.log("Input missing");
    return;
  } else if (position <= 0 || position >= myArr.length) {
    console.log("Invalid position");
    return;
  } else if (direction != 0 && direction != 1) {
    console.log("invalid direction");
    return;
  } else {
    console.log("Correct input");
  }

  console.log(`Array before shifting ${myArr}`);

  if (direction === 0) {
    for (let i = 0; i < position; i++) {
      let firstElement = myArr[0];
      myArr.shift();
      myArr.push(firstElement);
    }
    console.log(
      `shifted array by ${position} position left direction : ${myArr}`
    );
  } else {
    for (let i = 0; i < position; i++) {
      let lastPosition = myArr.length - 1;
      let lastElement = myArr[lastPosition];
      myArr.pop();
      myArr.unshift(lastElement);
    }
    console.log(
      `shifted array by ${position} position right direction : ${myArr}`
    );
  }
};

shiftArr(myArr, position, direction);

const countDown = (num) => {
  const interval = setInterval(() => {
    num -= 1;
    console.log(num);

    if (num === 1) {
      clearInterval(interval);
      console.log("done!");
    }
  }, 1000);
};

const randomGame = () => {
  let total = 0;
  const interval = setInterval(() => {
    const randNum = Math.random();
    console.log(randNum);
    total++;
    if (randNum > 0.75) {
      clearInterval(interval);
      console.log(`it took ${total} tries`);
    }
  }, 1000);
};

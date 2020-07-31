function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of loop
// async function draw(element) {
//   const text = element.textContent;
//   let soFar = '';

//   for (const letter of text) {
//     soFar += letter;
//     element.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = element.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// RECURSION WAY
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // exit condition
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }
  drawLetter();
}

const els = document.querySelectorAll('[data-type]');
els.forEach((el) => draw(el));

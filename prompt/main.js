function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove entirely
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function (resolve) {
    // Create a popup with fields
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input">
        <button type="submit">Submit</button>
      </fieldset>
    `
    );
    console.log(popup);
    // Check for cancel
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        'click',
        function () {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // Listen for submit on inputs
    popup.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        resolve(e.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true } // addeventlistener takes a third options object like this that can remove itself after the event is fired
    );
    // resolve data after submit

    // Insert pop to DOM
    document.body.appendChild(popup);
    // put a small timeout for the css transitions
    await wait(50);
    popup.classList.add('open');
  });
}

async function askQuestion(event) {
  const button = event.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question');
buttons.forEach((button) => button.addEventListener('click', askQuestion));
console.log(buttons);

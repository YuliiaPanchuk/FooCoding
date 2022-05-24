/* Do you code here
      put yourself some challenges and try to acheive them
      use console logs to see your results
*/

function myHeadline(headline) {
  // Styling h1 element
  headline.style.textAlign = 'center';
  headline.style.paddingBottom = '50px';
  headline.style.paddingTop = '50px';
  headline.style.letterSpacing = '6px';
  headline.style.color = '#247291';
}

function stylingContainer(container) {
  // Styling container
  container.style.display = 'grid';
  container.style.justifyItems = 'center';
  container.style.gridTemplateColumns = 'repeat(5, 1fr)';
  container.style.flexWrap = 'wrap';
  container.style.gap = '1em';
}

function stylingImages(images) {
  // Styling images
  images.style.height = '300px';
  images.style.marginBottom = '15px';
  images.style.flexWrap = 'wrap';
  images.style.borderRadius = '20%';
}

function stylingMyDiv(myDiv) {
  // Styling myDiv
  myDiv.style.display = 'flex';
  myDiv.style.flexDirection = 'column';
  myDiv.style.flexWrap = 'wrap';
}

function stylingBtn(btn) {
  // Styling button
  btn.style.padding = '10px';
  btn.style.borderRadius = '30px';
  btn.style.borderColor = '#D0C9C0';
}

function stylingFooter(footerF) {
  // Styling footer
  footerF.style.display = 'flex';
  footerF.style.justifyContent = 'center';
  footerF.style.alignItems = 'center';
  footerF.style.paddingTop = '50px';
  footerF.style.height = '100px';
  footerF.style.backgroundColor = '#247291';
}

fetch('https://www.breakingbadapi.com/api/characters')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Styling body
    document.body.style.backgroundColor = '#ececec';

    // Creating a div (container)
    let container = document.createElement('div');
    let headline = document.createElement('h1');

    myHeadline(headline);

    // Adding value to h1; adding headline to the DOM
    headline.innerText = 'The Breaking Bad API';
    document.body.appendChild(headline);

    stylingContainer(container);

    for (let i = 0; i < 10; i++) {
      // Adding properties to the HTML
      let nameAct = document.createElement('h2');
      let images = document.createElement('img');
      let btn = document.createElement('button');
      let status = document.createElement('p');
      let bday = document.createElement('p');
      let portrayed = document.createElement('p');

      // Styling nameAct
      nameAct.style.textAlign = 'center';

      stylingImages(images);

      stylingBtn(btn);

      let myDiv = document.createElement('div');
      myDiv.appendChild(images);
      myDiv.appendChild(nameAct);
      myDiv.appendChild(bday);
      myDiv.appendChild(portrayed);
      myDiv.appendChild(btn);
      myDiv.appendChild(status);

      stylingMyDiv(myDiv);

      // Creating a source for an img
      images.src = data[i].img;

      // Creating btn
      btn.innerText = data[i].nickname;

      // Adding to HTML file
      nameAct.innerText = data[i].name;
      bday.innerText = 'Birthday: ' + data[i].birthday;
      portrayed.innerText = 'Portrayed by ' + data[i].portrayed;

      // Display the actor status when user press the btn
      btn.addEventListener('click', function (evt) {
        alert('Status: ' + data[i].status);
      });

      // Add the myDiv (that contains btn, img) to the DOM
      container.appendChild(myDiv);
    }

    // Adding container to the document
    document.body.appendChild(container);

    let footerF = document.createElement('footer');
    document.body.appendChild(footerF);

    // A question before the input
    let questionText = document.createElement('h3');
    footerF.appendChild(questionText);
    questionText.innerText = 'Who is your favorite character?';

    // Styling question text
    questionText.style.color = '#fcfafa';
    questionText.style.letterSpacing = '1px';
    questionText.style.marginRight = '10px';

    // Creating a text input and adding it to the container
    let userInput = document.createElement('input');
    userInput.type = 'text';
    footerF.appendChild(userInput);

    userInput.style.marginRight = '10px';

    stylingFooter(footerF);

    // Adding OK btn
    let btnOK = document.createElement('button');
    btnOK.innerText = 'OK';
    footerF.appendChild(btnOK);

    btnOK.addEventListener('click', function (evt) {
      // Alerts the text if the user writes the first nickname (index of 0)
      if (userInput.value === data[0].nickname) {
        alert('Good choice!');
        return;
      }

      // Alerts the texdt if user input is one of nicknames from an array
      for (let i = 0; i < 10; i++) {
        if (userInput.value === data[i].nickname) {
          alert('Not bad!');
          return;
        }
      }
      // If both above statements are false, then user will see the following alert
      alert('Invalid input');
    });
  });

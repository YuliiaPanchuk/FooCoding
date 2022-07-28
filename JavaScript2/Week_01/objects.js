//Styling first container
function mainContainer(mainWrapper) {
  mainWrapper.style.height = '50vw';
}

function mainImg(coverImage) {
  coverImage.src = './images/mainImage.png';
  coverImage.style.marginTop = '10vw';
  coverImage.style.marginLeft = '29vw';
  coverImage.style.width = '40%';
}

// Styling h1 element
function myHeadline(headline) {
  headline.style.textAlign = 'center';
  headline.style.paddingBottom = '50px';
  headline.style.paddingTop = '50px';
  headline.style.letterSpacing = '0.9px';
  headline.style.fontSize = '3rem';
}

// Styling container
function stylingContainer(container) {
  container.style.height = '50vw';
  container.style.display = 'grid';
  container.style.justifyItems = 'center';
  container.style.gridTemplateColumns = 'repeat(5, 1fr)';
  container.style.flexWrap = 'wrap';
  container.style.gap = '1em';
}

// Styling images
function stylingImages(images) {
  images.style.height = '300px';
  images.style.marginBottom = '15px';
  images.style.flexWrap = 'wrap';
  images.style.borderRadius = '20%';
  images.style.backgroundColor.hover = 'black';
}

// Styling myDiv
function stylingMyDiv(myDiv) {
  myDiv.style.display = 'flex';
  myDiv.style.flexDirection = 'column';
  myDiv.style.flexWrap = 'wrap';
}

// Styling button
function stylingBtn(btn) {
  btn.style.padding = '10px';
  btn.style.border = 'none';
  btn.style.borderRadius = '30px';
  btn.style.cursor = 'pointer';
  btn.style.backgroundImage =
    'linear-gradient(to top, #1f6032, #236a39, #28733f, #2c7d46, #30874d, #31894e, #328b50, #338d51, #31874c, #2e8247, #2c7c43, #29773e)';
}

// Styling footer
function stylingFooter(footerF) {
  footerF.style.display = 'flex';
  footerF.style.justifyContent = 'center';
  footerF.style.alignItems = 'center';
  footerF.style.paddingTop = '50px';
  footerF.style.height = '100px';
}

fetch('https://www.breakingbadapi.com/api/characters')
  .then(res => res.json())
  .then(data => {
    console.log(data);

    // Styling body
    document.body.style.backgroundImage =
      'linear-gradient(to left top, #093009, #0d3811, #114118, #164a1f, #1a5327, #195227, #185126, #175026, #11441e, #0b3816, #062d0e, #032202)';

    // Creating a div (container)
    let mainWrapper = document.createElement('div');
    let coverImage = document.createElement('img');
    let container = document.createElement('div');
    let headline = document.createElement('h1');

    mainContainer(mainWrapper);
    document.body.appendChild(mainWrapper);
    mainImg(coverImage);
    mainWrapper.appendChild(coverImage);
    myHeadline(headline);

    // Adding value to h1; adding headline to the DOM
    headline.innerText = 'Actors';
    document.body.appendChild(headline);

    stylingContainer(container);

    for (let i = 0; i < 10; i++) {
      // Adding properties to the HTML
      let nameAct = document.createElement('h2');
      let images = document.createElement('img');
      images.setAttribute('id', 'actImage');

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
      alert('Invalid input');
    });
  });

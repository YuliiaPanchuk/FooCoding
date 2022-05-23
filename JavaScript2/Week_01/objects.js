/* Do you code here
      put yourself some challenges and try to acheive them
      use console logs to see your results
*/

fetch('https://www.breakingbadapi.com/api/characters')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Creating an empty array to store needed properties
    let arrayInfo = [];

    // Styling body
    document.body.style.backgroundColor = '#ececec';

    let container = document.createElement('div');

    // Styling container
    container.style.display = 'grid';
    container.style.justifyItems = 'center';
    container.style.gridTemplateColumns = 'repeat(4, 1fr)';
    container.style.flexWrap = 'wrap';
    container.style.gap = '1em';

    for (let i = 0; i < 12; i++) {
      // Adding properties to the HTMl
      // document.body.innerHTML += data[i].name;
      // document.body.innerHTML += data[i].nickname;
      // document.body.innerHTML += data[i].status;

      // Adding properies to array
      arrayInfo.push(data[i].name, data[i].nickname, data[i].status);

      // Assigning variables to creating elements
      let nameAct = document.createElement("p");
      let images = document.createElement('img');
      let btn = document.createElement('button');
      let status = document.createElement('p');

      // Styling images
      images.style.height = '300px';
      images.style.marginBottom = '15px';
      images.style.flexWrap = 'wrap';
      images.style.borderRadius = '20%';

      // Styling button
      btn.style.padding = '5px';

      let myDiv = document.createElement('div');
      myDiv.appendChild(images);
      myDiv.appendChild(btn);
      myDiv.appendChild(status);
      myDiv.appendChild(nameAct);

      // Styling myDiv
      //myDiv.style.display = 'flex';
      myDiv.style.flexWrap = 'wrap';

      // Creating a source for an img
      images.src = data[i].img;

      // Creating btn
      btn.innerText = data[i].nickname;

      // Adding text name to HTML file
      nameAct.innerText = data[i].name;

      // Adding event to the button
      btn.addEventListener('click', function (evt) {
        alert(status.innerText = data[i].status);
      });

      // Add the myDiv (that contains btn, img) to the DOM
      container.appendChild(myDiv);
    }

    // Adding container to the document
    document.body.appendChild(container);
  });

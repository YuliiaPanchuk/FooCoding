'use strict';

{
  /*const bookTitles = [
    'harry_potter_chamber_secrets',
    'the_sun_also_rises',
    'number_the_stars',
    'brave_new_world',
    'remembrance_of_things_past',
    'the_fault_in_our_stars',
    'cold_comfort_farm',
    'mortal_engines',
    'the_dark_tower',
    'gone_with_the_wind',
  ]; */

  const bookInfo = {
    harry_potter_chamber_secret: {
      title: 'Harry Potter chamber secret',
      language: 'English',
      author: 'J. K. Rowling',
    },
    the_sun_also_rises: {
      title: 'The sun also rises',
      language: 'English',
      author: 'Ernest Hemingway',
    },
    number_the_stars: {
      title: 'Number the stars',
      language: 'English',
      author: 'Lois Lowry',
    },
    brave_new_world: {
      title: 'Brave new world',
      language: 'English',
      author: 'Aldous Huxley',
    },
    remembrance_of_things_past: {
      title: 'Remembrance of things past',
      language: 'English',
      author: 'Marcel Proust',
    },
    the_fault_in_our_stars: {
      title: 'The fault in our stars',
      language: 'English',
      author: 'John Green',
    },
    cold_comfort_farm: {
      title: 'Cold comfort farm',
      language: 'English',
      author: 'Stella gibbons',
    },
    mortal_engines: {
      title: 'Mortal engines',
      language: 'English',
      author: 'Philip Reeve',
    },
    the_dark_tower: {
      title: 'The dark tower',
      language: 'English',
      author: 'Stephen King',
    },
    gone_with_the_wind: {
      title: 'Gone with the wind',
      language: 'English',
      author: 'Margaret Mitchell',
    },
  };

  const bookImg = {
    harry_potter_chamber_secret: "./images/Harry Potter.png",
    the_sun_also_rises: "./images/The-sun-also-rises.png",
    number_the_stars: "./images/Number-the-stars.png",
    brave_new_world: "./images/Brave-New-World.png",
    remembrance_of_things_past: "./images/Remembrance of Things Past.png",
    the_fault_in_our_stars: "./images/The-Fault-in-Our-Stars.png",
    cold_comfort_farm: "./images/Cold-Comfort-Farm.png",
    mortal_engines: "./images/Mortal-Engines.png",
    the_dark_tower: "./images/The-Dark-Tower.png",
    gone_with_the_wind: "./images/Gone-with-the-Wind.png",
  }

  // Creating elements
  const container = document.createElement('div');
  const unorderedList = document.createElement('ul');
  container.setAttribute("class", "wrapper");



  function bookGenerator() {
    const bookKeys = Object.keys(bookInfo);

    for (let i = 0; i < bookKeys.length; i++) {
      const myDiv = document.createElement("div")
      myDiv.setAttribute("class", "moreInfo")

      const divWrapper = document.createElement("div")
      divWrapper.setAttribute("class", "divWrapper")

      const listItem = document.createElement('li');
      const titles = document.createElement('h1');
      const author = document.createElement('h2');
      const language = document.createElement('h3');
      const images = document.createElement('img');
      const btn = document.createElement("button");

      const book = bookInfo[bookKeys[i]];
      const bookImage = bookImg[bookKeys[i]];

      titles.append(book.title);
      author.append("Author: " + book.author);
      language.append("Language: " + book.language);
      // images.append(bookImage)
      images.src = bookImage

      btn.innerText = "More info"

      // Appending images and myDiv inside divWrapper
      divWrapper.appendChild(myDiv)
      divWrapper.appendChild(images)

      // Appending elements
      document.body.appendChild(container);
      container.appendChild(unorderedList);
      unorderedList.appendChild(listItem);
      listItem.appendChild(titles);
      listItem.appendChild(divWrapper);
      listItem.appendChild(btn);

      myDiv.appendChild(author);
      myDiv.appendChild(language);

      myDiv.style.display = "none";

      btn.addEventListener("click", function () {
        if (myDiv.style.display === "block") {
          myDiv.style.display = "none";
        }
        else {
          myDiv.style.display = "block";
        }
      })

    }


  }
  bookGenerator();
}

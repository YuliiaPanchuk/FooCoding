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

  // Creating elements
  const container = document.createElement('div');
  const unorderedList = document.createElement('ul');

  function bookGenerator() {
    const bookKeys = Object.keys(bookInfo);

    for (let i = 0; i < bookKeys.length; i++) {
      // author.innerText = listItem.setAttribute('id', 'bookId'); // adding bookId inside li

      const listItem = document.createElement('li');
      const titles = document.createElement('h1');
      const author = document.createElement('h2');
      const language = document.createElement('p');
      const images = document.createElement('img');

      const book = bookInfo[bookKeys[i]];
      listItem.append(book.title); // adding each bookTitles key to li
      listItem.append(book.author);
      listItem.append(book.language);


      // Appending elements
      document.body.appendChild(container);
      container.appendChild(unorderedList);
      unorderedList.appendChild(listItem); // adding each li to ul
      listItem.appendChild(titles);
      listItem.appendChild(author);
      listItem.appendChild(language);
      listItem.appendChild(images);

      images.src = 
    }
  }
  bookGenerator();
}

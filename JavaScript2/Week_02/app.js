'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'the_sun_also_rises_ernest_hemingway',
    'number_the_stars_lois_lowry',
    'brave_new_world_aldous_huxley',
    'remembrance_of_things_past_marcel_proust',
    'the_fault_in_our_stars_john_green',
    'cold_comfort_farm_stella_gibbons',
    'mortal_engines_philip_reeve',
    'the_dark_tower_stephen_king',
    'gone_with_the_wind_margaret_mitchell',
  ];

  const bookInfo = {};

  // Creating ul and li elements
  const unorderedList = document.createElement('ul');

  // Adding elements to the HTML body
  document.body.appendChild(unorderedList);

  // Replace with your own code
  function bookGenerator() {
    for (let i = 0; i < bookTitles.length; i++) {
      const listItem = document.createElement('li');
      unorderedList.appendChild(listItem);

      listItem.append(bookTitles[i]); // adding each li to ul
    }
  }

  bookGenerator();
}

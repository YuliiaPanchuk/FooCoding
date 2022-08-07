import React, { useEffect, useState } from 'react';

export function UpButton() {
  const [visible, setVisible] = useState(false);

  function scrollFunc() {
    const show = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
    setVisible(show);
  }

  // When the user clicks the btn, scroll to the top of the document
  function topScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  //Is called only once since dependencies is empty
  useEffect(() => {
    document.addEventListener('scroll', scrollFunc);

    return function () {
      document.removeEventListener('sccroll', scrollFunc);
    };
  }, []); //Every time dependencies value is changed this func will be called

  return (
    <div>
      <button
        onClick={topScroll}
        title="To the top"
        id="topBtn"
        style={{ display: visible ? 'block' : 'none' }}>
        <i className="fa-solid fa-circle-up" />
      </button>
    </div>
  );
}

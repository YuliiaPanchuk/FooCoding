import React, { useEffect, useState } from 'react';

export function ToTheTopBtn () {
  const [showBtn, setShowBtn] = useState(false);

  function scrollFunc() {
    const show = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
    setShowBtn(show);
  }

  // When the user clicks the btn, scroll to the top of the document
  function topScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', //Makes scrolling smooth!
    });
  }

  //Is called only once since dependencies is empty
  useEffect(() => {
    document.addEventListener('scroll', scrollFunc);
  }, []); //Every time dependencies value is changed this func will be called

  return (
    <div>
      <button
        onClick={topScroll}
        title="To the top"
        id="topBtn"
        style={{ display: showBtn ? 'block' : 'none' }}
      >
      <i className="fa-solid fa-circle-up" />
      </button>

    </div>
  );
};

export default ToTheTopBtn;

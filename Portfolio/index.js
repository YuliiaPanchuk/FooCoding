function createAndAppend(nameP, parent, options = {}) {
  const nameEl = document.createElement(nameP);
  parent.appendChild(nameEl);
  Object.keys(options).forEach(key => {
    const value = options[key];
    if (key === "text") {
      nameEl.textContent = value;
    } else {
      nameEl.setAttribute(key, value)
    }
  });
  return nameEl;
}

fetch(`https://firestore.googleapis.com/v1/projects/portfolio-797bb/databases/(default)/documents/projects`)
  .then(response => response.json())
  .then(response => {
    response.documents.forEach((item) => {
      const project = document.getElementById("projects");
      const container = createAndAppend("div", project, { class: "wraper" })

      const getLink = item.fields.link.stringValue;
      const link = createAndAppend("a", container, { href: getLink })

      const imageLink = item.fields.image_url.stringValue;
      const image = createAndAppend("img", link, { class: "projectImage", src: imageLink })

      const wrapperText = createAndAppend("div", container, { class: "wrapperText" })

      const getName = item.fields.name.stringValue;
      const projectName = createAndAppend("p", wrapperText, { text: getName, class: "headline" })

      const getDescription = item.fields.description.stringValue;
      const description = createAndAppend("p", wrapperText, { text: getDescription, class: "description" });

    });


  })
  .catch(error => {
    console.log(error);
  });
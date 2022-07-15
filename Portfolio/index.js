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

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

  const fullName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;

  const data = {
    fields: {
      name: {
        stringValue: fullName
      },
      email: {
        stringValue: userEmail
      },
      message: {
        stringValue: userMessage
      }
    }
  };

  document.getElementById("name").value = ""; // clear values after it was sent
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";


  fetch('https://firestore.googleapis.com/v1/projects/portfolio-797bb/databases/(default)/documents/message?documentId=' + Math.floor(Math.random() * 1000000), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });



})
export async function sendMessageForm(fullName, userEmail, userMessage) {
  const data = {
    fields: {
      name: {
        stringValue: fullName,
      },
      email: {
        stringValue: userEmail,
      },
      message: {
        stringValue: userMessage,
      },
    },
  };

  //Getting data from contact form and sends it to firebase
  const response = await fetch(
    'https://firestore.googleapis.com/v1/projects/portfolio-797bb/databases/(default)/documents/message?documentId=' +
      Math.floor(Math.random() * 1000000), //Adding unique number to each item
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  const json = await response.json(); // Reads and converts data to json
  console.log(json);
}

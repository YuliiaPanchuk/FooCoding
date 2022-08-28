import { getFirebaseApp, getFirestore, addDoc, collection } from './firebase';

const FIREBASE_URL = 'https://firestore.googleapis.com/v1';

// The parent resource for firebase
const PARENT = 'projects/portfolio-797bb/databases/(default)/documents';

// The collection ID, relative to parent, to list.
const COLLECTION_ID = 'projects';

// Getting projects data from firebase
// https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/createDocument
export async function fetchProjects() {
  const response = await fetch(`${FIREBASE_URL}/${PARENT}/${COLLECTION_ID}`);
  const data = await response.json();
  return data.documents.map((x) => ({
    id: x.name,
    github_link: x.fields.github_link.stringValue,
    image_url: x.fields.image_url.stringValue,
    name: x.fields.name.stringValue,
    description: x.fields.description.stringValue,
    link: x.fields.link.stringValue,
  }));
}

/**
 * Create a new project in Firebase.
 *
 * @param {string} name
 * @param {string} description
 * @param {string} link
 * @param {string} imageUrl
 * @returns True, if the project was created; Otherwise, False.
 */
export async function createProject(name, github_link, description, link, image_url) {
  const db = getFirestore(getFirebaseApp());

  try {
    const docRef = await addDoc(collection(db, 'projects'), {
      name,
      github_link,
      description,
      link,
      image_url,
    });
    console.log('Document written with ID: ', docRef.id);
    return true;
  } catch (e) {
    console.error('Error adding document: ', e);
    return false;
  }
}

/**
 *
 * @param {string} documentId
 * @param {string} name
 * @param {string} github_link
 * @param {string} description
 * @param {string} imageUrl
 * @returns True, if the project was updated; Otherwise, False.
 */
export async function updateProject(idToken, documentId, name, github_link, description, imageUrl) {
  // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/patch
  const response = await fetch(`${FIREBASE_URL}/${PARENT}/${COLLECTION_ID}/${documentId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authentication: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      fields: {
        name: {
          stringValue: name,
        },
        github_link: {
          stringValue: github_link,
        },
        description: {
          stringValue: description,
        },
        image_url: {
          stringValue: imageUrl,
        },
      },
    }),
  });

  return response.status === 200; // OK
}

export async function deleteProject(idToken, documentId) {
  // https://firebase.google.com/docs/firestore/reference/rest/v1/projects.databases.documents/delete
  const response = await fetch(`${FIREBASE_URL}/${PARENT}/${COLLECTION_ID}/${documentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authentication: `Bearer ${idToken}`,
    },
  });

  return response.status === 200; // OK
}

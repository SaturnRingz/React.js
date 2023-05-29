import firebase from "../Config/firebase";

export async function getAllProducts(search) {
  /*CASO MELI:
  return await fetch(
         `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    ).then(res => res.json()); */
  return await firebase.firestore().collection("products").get();
}

export async function createProduct(payload) {
  return await firebase.firestore().collection("products").add({
    title: payload.title,
    price: payload.price,
    details: payload.details,
    thumbnail: payload.thumbnail,
  });
}

export async function getById(id) {
  /* return fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json()); */
  return await firebase.firestore().doc(`products/${id}`).get();
}

export async function updateProduct(id, payload) {
  return await firebase.firestore().doc(`products/${id}`).set(payload);
}

export async function deleteProduct(id) {
  return await firebase.firestore().doc(`products/${id}`).delete();
}

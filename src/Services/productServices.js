import firebase from "../Config/firebase";

export async function getAllProducts(search) {
  return await firebase.firestore().collection("products").get();
}

export async function getProductsByUserId(uid){
  return await firebase.firestore().collection("products")
    .where("owner_id","==",uid)
    .get();
}

export async function createProduct(payload, user) {
  return await firebase.firestore().collection("products").add({
    title: payload.title,
    price: payload.price,
    details: payload.details,
    thumbnail: payload.thumbnail,
    owner_id: user.uid
  });
}

export async function getById(id) {
  return await firebase.firestore().doc(`products/${id}`).get();
}

export async function updateProduct(id, payload) {
  return await firebase.firestore().doc(`products/${id}`).set(payload);
}

export async function deleteProduct(id) {
  return await firebase.firestore().doc(`products/${id}`).delete();
}

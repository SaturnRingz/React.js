import firebase from "../Config/firebase";

export async function createUser(data) {
  const responseUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password);
  const document = await firebase.firestore().collection("users").add({
    name: data.name,
    lastName: data.lastName,
    phone: data.phoneNumber,
    email: data.email,
    uid: responseUser.user.uid,
  });
  return document;
}

export async function login(email, password) {
  const responseUser = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  if(responseUser.user.uid){
    const userDocument = await firebase.firestore().collection("users")
    .where("uid","==",responseUser.user.uid)
    .get();
    return userDocument.docs[0].data();
  }
  return {}
}

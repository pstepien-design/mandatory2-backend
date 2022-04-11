/* import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const firebaseConfig = {
  //...
  };
const app = initializeApp(firebaseConfig);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in  
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  const email = 'pawel@test.com'
  const password = 'aassdd'
  createUserWithEmailAndPassword(auth, email, password ); */
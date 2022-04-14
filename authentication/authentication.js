import fetch from 'node-fetch';
export const signup = async (email, password) => {
    const API_KEY = "AIzaSyAv65M0n9HeBOXciVuCKR5fpgW8LySKFY0";
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      console.log(problem);
    } else {
      const data = await response.json(); // json to javascript
      console.log('data from the server', data);
    }
  };

  export const login = async (email, password) => {
    let isAuthorized = false;
    const API_KEY = "AIzaSyAv65M0n9HeBOXciVuCKR5fpgW8LySKFY0";
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (response.ok) {
      isAuthorized = true;
    }
    return isAuthorized;
  };

/*  const answer = await login('test@test.com', '113322'); */
 


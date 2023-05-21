import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let user = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthday: ""
};


// ensure this only runs in the browser
if (browser) {
  // if the object already exists in localStorage, get it
  // otherwise, use our default values
  try {
    user = JSON.parse(localStorage.getItem('user') || {}.toString());
  } catch (error) {
    user = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      birthday: ""
    }
  }
}

// export the store for usage elsewhere
export const userStore = writable(user);

if (browser) {
  // update localStorage values whenever the store values change
  userStore.subscribe((value) =>
    // localStorage only allows strings
    // IndexedDB does allow for objects though... 🤔
    localStorage.setItem('user', JSON.stringify(value))
  );
}

let authenticationStatus = 0;


// ensure this only runs in the browser
if (browser) {
  // if the object already exists in localStorage, get it
  // otherwise, use our default values
  authenticationStatus = Number(localStorage.getItem("authenticationStatus") || authenticationStatus.toString());
}

// export the store for usage elsewhere
export const authenticationStatusStore = writable(authenticationStatus);

if (browser) {
  // update localStorage values whenever the store values change
  authenticationStatusStore.subscribe((value) =>
    // localStorage only allows strings
    // IndexedDB does allow for objects though... 🤔
    localStorage.setItem('authenticationStatus', value.toString())
  );
}

export function CheckUsernameAndPassword(email, password)  {
  if (email === "philip.baier@icloud.com" && password === "test") { 
    return true;
  } else {
    return false;
  }
}



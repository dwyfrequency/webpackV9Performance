import { initializeApp } from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";
import { getPerformance } from "firebase/performance";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
console.log(perf.dataCollectionEnabled);

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    43K Apr 19 11:44 dist/main.js
// Run `ls -lh dist/main.js` to get the above

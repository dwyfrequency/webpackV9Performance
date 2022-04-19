import { initializeApp } from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";
import { getPerformance, trace } from "firebase/performance";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
const t = trace(perf, "CUSTOM_TRACE_NAME");
t.start();

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

t.stop();
document.body.appendChild(component());

// No change in KB size when adding TRACE
// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    43K Apr 19 11:44 dist/main.js
// Run `ls -lh dist/main.js` to get the above

import { get } from "idb-keyval";

export default async function fetchLoggedIn() {
  let bool;
  await get("user")
    .then((x) => {
      if (x) {
        bool = true;
      } else {
        bool = false;
      }
    })
    .catch((err) => console.log(err));
  return bool;
}


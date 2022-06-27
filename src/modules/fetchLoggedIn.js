import { get } from "idb-keyval";

export default async function fetchLoggedIn() {
  await get("user")
    .then((x) => {
      if (x) return true;
    })
    .catch((err) => console.log(err));
}

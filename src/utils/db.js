import { get, set, clear } from "idb-keyval";
window.db = {};
window.db.clear = clear;
window.db.set = set;
window.db.get = get;

import fetchLoggedIn from "../modules/fetchLoggedIn.js";
window.db.fetchLoggedIn = fetchLoggedIn;

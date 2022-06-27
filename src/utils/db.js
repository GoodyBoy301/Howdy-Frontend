import { get, set, clear } from "idb-keyval";
window.db = {};
window.db.clear = clear;
window.db.set = set;
window.db.get = get;

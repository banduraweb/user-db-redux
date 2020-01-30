import Dexie from "dexie";

export const db = new Dexie("ReactDexie");

db.version(1).stores({
    userDataBase: "_id, firstName, lastName, phone, gender, age"
});

db.open().catch(err => {

    console.log(err.stack || err);
});



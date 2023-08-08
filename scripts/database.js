import { initializeDatabase } from "./exerciseCard.js";

export function CreateDataBase(name = 'notes_db') {
    const databaseName = name;
    const databaseVersion = 1;

    const request = window.indexedDB.open(databaseName, databaseVersion);

    request.addEventListener('error', () =>
      console.error('Database failed to open'));

    request.addEventListener("success", (event) => {
      const db = event.target.result
      initializeDatabase(db)
      console.log('db sent to card')
    });

    request.addEventListener('upgradeneeded', (e) => {
      const db = e.target.result;

    //   if (db.objectStoreNames.contains('notes_os')) {
    //     db.deleteObjectStore('notes_os');
    //   }

      const objectStore = db.createObjectStore('notes_os', {
        keyPath: 'id',
        autoIncrement: true,
      });

      objectStore.createIndex('title', 'title', { unique: false });
      objectStore.createIndex('body', 'body', { unique: false });

      console.log('Database setup complete');
    });

    return request;
  }


  export function addData(db, dataItem) {

    if (db instanceof IDBDatabase) {
      const transaction = db.transaction(["notes_os"], "readwrite");
      const objectStore = transaction.objectStore("notes_os");
      const addRequest = objectStore.add(dataItem);

      transaction.addEventListener("complete", () => {
        console.log("Transaction completed: database modification finished.");
      });

      transaction.addEventListener("error", () => {
        console.log("Transaction not opened due to error");
      });
    } else {
      console.error("Invalid database object provided.");
    }
  }


export function retrieveData() {
  const openRequest = window.indexedDB.open("notes_db", 1);

  openRequest.addEventListener("error", () => {
    console.error("Database failed to open");
  });

  openRequest.addEventListener("success", () => {
    const db = openRequest.result;
    const transaction = db.transaction("notes_os", "readonly");
    const objectStore = transaction.objectStore("notes_os");

    const getRequest = objectStore.getAll();

    getRequest.addEventListener("success", (event) => {
      const data = event.target.result;
      console.log("Retrieved data:", data);

      // Process the retrieved data as needed
    });

    getRequest.addEventListener("error", () => {
      console.error("Error occurred while retrieving data");
    });
  });
}

export function DeleteDataBase(){
    const databaseName = "notes_db";
    const request = window.indexedDB.deleteDatabase(databaseName);

    request.addEventListener("success", () => {
    console.log("Database deleted successfully");
    });

    request.addEventListener("error", () => {
    console.error("Failed to delete database");
    });
}

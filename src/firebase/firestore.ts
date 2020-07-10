import { firestore } from "./firebase";
import { Result, ok, err } from "./utils/index";

export const firestoreWrite = async ({
  collection,
  value,
}: {
  collection: string;
  value: {};
}): Promise<Result<firebase.firestore.DocumentData, Error>> => {
  try {
    return ok(await firestore.collection(collection).add(value));
  } catch (error) {
    return err(
      new Error(`Error writing to collection ${collection}: ${error}`)
    );
  }
};

export const firestoreRead = async ({
  collection,
  docId,
}: {
  collection: string;
  docId: string;
}): Promise<Result<firebase.firestore.DocumentData, Error>> => {
  try {
    return ok(await firestore.collection(collection).doc(docId).get());
  } catch (error) {
    return err(
      new Error(
        `Error reading doc: ${docId} from collection ${collection}: ${error}`
      )
    );
  }
};

export const firestoreUpdate = async ({
  collection,
  docId,
  value,
}: {
  collection: string;
  docId: string;
  value: {};
}): Promise<Result<void, Error>> => {
  try {
    return ok(
      await firestore.collection(collection).doc(docId).update({ value })
    );
  } catch (error) {
    return err(
      new Error(
        `Error updating doc: ${docId} in collection ${collection}: ${error}`
      )
    );
  }
};

export const firestoreSet = async ({
  collection,
  docId,
  value,
}: {
  collection: string;
  docId: string;
  value: {};
}): Promise<Result<void, Error>> => {
  try {
    return ok(await firestore.collection(collection).doc(docId).set(value));
  } catch (error) {
    return err(
      new Error(
        `Error setting doc: ${docId} in collection ${collection}: ${error}`
      )
    );
  }
};

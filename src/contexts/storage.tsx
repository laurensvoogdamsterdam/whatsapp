import { Storage } from "@ionic/storage";

const store = new Storage();

enum StorageKeys {
  USER = "USERKEYWHATSUP",
}

const setItem = async (key: string, data: object) => {
  try {
    await store.create();
    await store.set(key, JSON.stringify(data));
  } catch (e) {}
};

const getItem = async (key: string) => {
  let result = null;
  try {
    await store.create();
    const value = await store.get(key);
    result = JSON.parse(value);
    return result;
  } catch (e) {}
  return result;
};

export { StorageKeys, setItem, getItem };

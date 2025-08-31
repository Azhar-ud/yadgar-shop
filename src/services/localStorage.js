export const saveToLocalStorage = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const state = localStorage.getItem(key);
    return state ? JSON.parse(state) : undefined;
  } catch (err) {
    console.error("Error loading from localStorage", err);
    return undefined;
  }
};

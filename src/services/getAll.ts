const addApiPrefix = (url: string) => {
  return `http://localhost:3000/${url}`;
};

export const getAll = <T>(url: string): Promise<T[]> => {
  return fetch(addApiPrefix(url)).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

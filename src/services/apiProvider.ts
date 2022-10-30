const addApiPrefix = (url: string) => {
  return `http://localhost:3000/api/${url}`;
};

const getAll = <R>(url: string): Promise<R[]> => {
  return fetch(`${addApiPrefix(url)}`, {
    method: "GET",
  }).then((response) => response.json()).catch(error=>{
    console.log(error)
  })
};

export const apiProvider = {
  getAll,
};

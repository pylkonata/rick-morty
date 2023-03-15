const _apiUrlBase = 'https://rickandmortyapi.com/api/';

const fetchData = async (url) => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}character, status: ${res.status}`);
  }
  return await res.json();
};

export const fetchAllChars = async () => {
  const res = await fetchData(`${_apiUrlBase}character`);
  return res.results;
};

export const fetchChar = async (id) => {
  const res = await fetchData(`${_apiUrlBase}character/${id}`);
  return await res;
};

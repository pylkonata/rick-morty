const _apiUrlBase = 'https://rickandmortyapi.com/api/';

const fetchData = async (url) => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}character, status: ${res.status}`);
  }
  return await res.json();
};

export const fetchChar = async (id) => {
  const res = await fetchData(`${_apiUrlBase}character/${id}`);
  return await transformChar(res);
};

export const loadChars = async (id = 1) => {
  const res = await fetchData(`${_apiUrlBase}character/?page=${id}`);
  return await res.results.map(transformChar);
};

const transformChar = (char) => {
  return {
    id: char.id,
    name: char.name,
    image: char.image,
    gender: char.gender,
    status: char.status,
    species: char.species,
    origin: char.origin,
    type: char.type,
  };
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getDoctors(params) {
  //get the params
  console.log(params);

  const res = await fetch(BASE_URL);
  const result = await res.json();

  return result;
}

export async function getDoctorsByLocation(location) {
  //create url with location, hint: you may use URLSearchParams constructor
  const url = `${BASE_URL}?location=${encodeURIComponent(location)}`;

  const res = await fetch(BASE_URL);
  const result = await res.json();

  return result;
}

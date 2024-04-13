import loaderToggle from "./loader";

const request = async (reource) => {
  loaderToggle(true);
  const req = await fetch(reource);
  const data = await req.json();
  loaderToggle(false);
  return data;
};

export default request;

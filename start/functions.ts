import axios from "axios";

export async function slugify(text:string) {
  const {data: {slug}} = await axios.get("http://slugify.adresa.info/json?string="+encodeURIComponent(text));
  return slug;
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL =
  "https://api.unsplash.com/search/photos?client_id=gnHrqHDGx4ndEnyy2y8mCCZRtiqCXg66dWxIjIDeUdk&query=dog";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const resp = await axios.get(URL);
      return resp.data;
    },
  });
  console.log(response);
  return <h2>Gallery</h2>;
};
export default Gallery;

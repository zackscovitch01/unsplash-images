import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const URL =
  "https://api.unsplash.com/search/photos?client_id=gnHrqHDGx4ndEnyy2y8mCCZRtiqCXg66dWxIjIDeUdk";

const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const resp = await axios.get(`${URL}&query=${searchValue}`);
      return resp.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    <section className="image-container">
      <h4>No results found...</h4>
    </section>;
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;

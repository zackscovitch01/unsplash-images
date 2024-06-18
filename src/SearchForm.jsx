import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchValue(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

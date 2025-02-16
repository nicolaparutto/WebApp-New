const SearchBar = ({ setSearchText }) => {

   const handleSearchChange = (event) => {
      setSearchText(event.target.value);
   };

   return (
      <div className="search-bar">
         <input
            type="text"
            placeholder="Cerca turisti..."
            onChange={handleSearchChange}
            className="form-control"
         />
      </div>
   );
};

export default SearchBar;
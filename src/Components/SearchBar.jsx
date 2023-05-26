function SearchBar({value, onChange}){
    return(<>
        <div className="search-container">
          <input
            type="text"
            id="search"
            value={value}
            onChange={onChange}
          ></input>
        </div>
    </>)
}

export default SearchBar;
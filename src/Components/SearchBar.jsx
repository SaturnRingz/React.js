function SearchBar(props){
    return(<>
        <div className="search-container">
          <input
            type="text"
            id="search"
            value={props.value}
            onChange={props.onChange}
          ></input>
        </div>
    </>)
}

export default SearchBar;
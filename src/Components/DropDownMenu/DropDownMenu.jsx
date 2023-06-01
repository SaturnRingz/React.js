import "./dropDownMenu.css"

function DropDownMenu({children}){
    return(<>
        <div className="dropdown">
            <button className="dropbtn">Productos▼</button>
            <div className="dropdown-content">
              {children}
            </div>
          </div>
    </>)
}

export default DropDownMenu
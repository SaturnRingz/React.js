import "./dropDownMenu.css"

function DropDownMenu({children, title}){
    return(<>
        <div className="dropdown">
            <button className="dropbtn">{title}</button>
            <div className="dropdown-content">
              {children}
            </div>
          </div>
    </>)
}

export default DropDownMenu
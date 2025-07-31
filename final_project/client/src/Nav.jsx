import React from 'react';


function Nav(){
return<>
<div className="nav">
<img className ="logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTs-AfSc_oEoUfgPgnX_pYoIcwHyOR24q-1Q&s" alt="" />
<div className="info">
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>
</div>
</div>
</>
}
export default Nav;
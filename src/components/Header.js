import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



//  const Header = () => {
//   const [btn, setbtn] = useState("login")
//   const {logedIn}= useContext(UserContext);
//   console.log(logedIn)

//   const onlineStatus= useOnlineStatus();

//   const cartItems= useSelector((store)=> store.cart.items)
//   console.log(cartItems)
//     return (
//       <div className="header">
//         <div className="logo">
//           <img
//             src={LOGO_URL}
//             alt="logo"
//           />
//         </div>
//         <div className="nav-items">
//           <ul>
            
//             <li>onlineStatus- {onlineStatus? "✅": "🔴"}</li>
//             <li><Link to={"/"}>Home</Link></li>
//             <li><Link to={"/about"}>About</Link></li>
//             <li><Link to={"/contact"}>Contact</Link></li>
//             <li><Link to={"/grocery"}>Grocery</Link></li>
//             <li><Link to= {"/cart"}>Cart ({cartItems.length} items)</Link></li>
//             <li>{logedIn}</li>
//             <button className="login-btn" onClick={()=>{
//               btn==="login"? setbtn("logout"): setbtn("login");
//             }}>{btn} </button>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   export default Header;

const Header = () => {
  const [btn, setbtn] = useState("login");
  const { logedIn } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul>
          <li>onlineStatus- {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <li><Link to={"/cart"}>Cart ({cartItems.length} items)</Link></li>
          <li>{logedIn}</li>
          <button
            className="login-btn"
            onClick={() => {
              btn === "login" ? setbtn("logout") : setbtn("login");
            }}
          >
            {btn} 
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
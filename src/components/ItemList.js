import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { MENU_ITEM_URL } from "../utils/constants"
const ItemList=({item})=>{

  const dispatch= useDispatch();
  const handleAddItem= (item)=>{
    dispatch(addItem(item))
  }
    return(
        <>
           {item.map((menuItem)=>(
            
            <div key={menuItem.card.info.id}>
            <div className="listItem">
              <div className="menuName">
                <li >{menuItem?.card?.info?.name} </li>
                <p>
                  Rs{menuItem?.card?.info?.price/100 ?? menuItem?.card?.info?.defaultPrice / 100}
                </p>
                <p>{menuItem?.card?.info?.description}</p>
              </div>
              <div className="menuImg">
                <img
                  src={MENU_ITEM_URL + menuItem?.card?.info?.imageId}
                  alt="item"
                />
                <button onClick={()=>handleAddItem(menuItem)}>Add + </button>
              </div>
            </div>
            </div>
           ))}
           </>
        
    )
}
export default ItemList;
// import ItemList from "./ItemList";
// const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

//   const handleClick = () => {
//     setShowIndex();
//   };

//   return (
//     <div >
//       <div className="category-container" >
//         <div className="category" onClick={handleClick}>
//           <h4>
//             {data.title}({data.itemCards.length})
//           </h4>
//           <span>⬇️</span>
//         </div>
//         {showItems && <ItemList item={data.itemCards} />}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;


import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex(!showItems); // Invert the value of showItems
  };

  return (
    <div>
      <div className="category-container">
        <div className="category" onClick={handleClick}>
          <h4>
            {data.title}({data.itemCards.length})
          </h4>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList item={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

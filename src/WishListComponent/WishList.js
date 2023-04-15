import React from "react";
import { useEffect, useState } from "react";
import WishListItem from '../WishListItemComponent/WishListItem';

function WishList () {
    const [items,setItems] = useState([
      { priority: 1, text: "item 1" },
      { priority: 2, text: "item 2" },
      { priority: 3, text: "item 3" }
    ]);

    const [userInput, setUserInput] = useState("");


    const handleBtn = (e) => {
        // items.push({id: (Math.floor(Math.random() * 10) + 1), priority: 1, text: {userInput}});
        // const new_items = items;
        setItems(items => [
          ...items, {priority: 1, text: userInput},
        ]);
        console.log(items);
    }

    return (
      <div>
        <input
          placeholder="Add something to the wish list"
          id="wish-list"
          value={userInput}
          onChange={(e)=>{setUserInput(e.target.value)}}
        />

        <button id="enter-btn" onClick={()=>{handleBtn()}}>
          Enter
        </button>
        
        ِ<br />

        {items.map((item, index) => (
          <WishListItem key={index} priority={item.priority} text={item.text}/>
        ))}
      </div>
    );
}

export default WishList;

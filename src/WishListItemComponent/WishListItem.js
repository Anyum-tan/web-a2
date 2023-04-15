import React from "react";
import { useEffect, useState } from "react";

function WishListItem(props){
    const [text1, setText] = useState(props.text);
    return (
        <div>
            {/* <h1>{props.text}</h1> */}
            <textarea id="item" value={text1} onChange={(e) => {setText(e.target.value)}}/>
            <button>Delete</button>
            <button>{props.priority}</button>
        </div>
    );
}

export default WishListItem;

















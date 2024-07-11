// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

import { useMemo, useState } from "react";

export function Assignment3()
{
    const [items,setItems] = useState([
        {name: 'chocolate', value:10},
        {name: 'chips', value:20},
        {name: 'onion', value:30},
        {name: 'tomato', value:30}
    ]);

    const totalValue = useMemo(() => {
        let tValue = 0;
        for(let i=0; i < items.length; i++) {
        tValue = tValue + items[i].value
    }
        return tValue;
    })
    return(
        <div>
            <ul>
                {items.map((item, index) => {
                        return <li key={index}>{item.name} - Price: ${item.value}</li>
                    })}
            </ul>
            <p>Total Value: {totalValue}</p>    
        </div>
    )
};


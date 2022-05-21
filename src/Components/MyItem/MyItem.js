import React from 'react';

const MyItem = ({item,deleteItem}) => {
    return (
        <tr>
            <td className="text-start">{item.name}</td>
            <td className="text-start">{item.quantity}</td>
            <td className="text-start">{item.price}</td>
            <td><button className='btn btn-danger' onClick={() => deleteItem(item._id)}>Delete</button></td>
        </tr>
    );
};

export default MyItem;
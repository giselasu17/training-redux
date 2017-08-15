import React from 'react';

const Item = ({name, isComplete}) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={isComplete}/> 
            {name}
        </li>
    );
};

const List = (props) => {
    return (
        <div className="list">
          <ul>{props.list.map((item) => (
            <Item key={item.id} {...item} />
            ))}
          </ul>
        </div>
    );
};

export default List;
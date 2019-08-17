import React from 'react';

import './collection-item.style.scss';

const CollectionItem = ({id, name, imageUrl, price}) => {
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <div className='title'>{name}</div>
                <div className='price'>{price}</div>
            </div>
        </div>
    )
}

export default CollectionItem;
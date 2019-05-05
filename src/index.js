import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';

import SearchBar from './components/SearchBar';

const SearchBarContainer = (props) => {
    return (
        <SearchBar
            items={props.items? props.items : []}
            onResultSelect={props.onResultSelect ? props.onResultSelect : (e, { value }) => { console.log(value); }}
            customComponent={props.customComponent ? props.customComponent : Result}
        />
    )
}

const Result = (props) => {
    const {image, title, price, description} = props;
    return (
            <div>
                {image &&
                <div key='image' className='image'>
                    {createHTMLImage(image, { autoGenerateKey: false })}
                </div>
                }
                <div key='content' className='content'>
                {price && <div className='price'>{price}</div>}
                {title && <div className='title'>{title}</div>}
                {description && <div className='description'>{description}</div>}
                </div>
            </div>
    )
}

SearchBarContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string.isRequired})),
    onResultSelect: PropTypes.func,
    customComponent: PropTypes.object
}

export default SearchBarContainer;
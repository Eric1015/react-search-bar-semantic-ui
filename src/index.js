import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import SearchBar from './components/SearchBar';

const SearchBarContainer = (props) => {
    return (
        <SearchBar
            data={props.data? props.data : []}
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
                    <Image src={image} size="tiny" />
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
    data: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string.isRequired})),
    onResultSelect: PropTypes.func,
    customComponent: PropTypes.func
}

export default SearchBarContainer;
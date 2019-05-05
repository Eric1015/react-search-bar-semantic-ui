import React from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';

const SearchBarContainer = (props) => {
    return (
        <SearchBar
            items={props.items? props.items : []}
            onResultSelect={props.onResultSelect ? props.onResultSelect : (e, { value }) => { console.log(value); }}
            customComponent={props.customComponent ? props.customComponent : Search.Result}
        />
    )
}

SearchBarContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string.isRequired})),
    onResultSelect: PropTypes.func,
    customComponent: PropTypes.object
}

export default SearchBarContainer;
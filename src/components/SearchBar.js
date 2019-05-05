import React from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            items: {
                a: [],
                b: [],
                c: [],
                d: [],
                e: [],
                f: [],
                g: [],
                h: [],
                i: [],
                j: [],
                k: [],
                l: [],
                m: [],
                n: [],
                o: [],
                p: [],
                q: [],
                r: [],
                s: [],
                t: [],
                u: [],
                v: [],
                w: [],
                x: [],
                y: [],
                z: [],
                other: []
            },
            loading: false,
            results: [],
            value: ""
        };
    }

    onSearchBarChange = (value) => {
        this.setState({ loading: true, value: value });
        let results = [];
        value = value.split(" ").join("");
        if (value.length !== 0) {
            let key = value.substring(0, 1);
            let items = this.state.items.hasOwnProperty(key)? this.state.items[key] : this.state.items["other"];
            for (let item of items) {
                let currIndex = 0;
                let matched = true;
                let str = item.title;
                if (value.length <= str.length) {
                    for (let i = 0; i < value.length; i++) {
                        if (currIndex > str.length - 1) {
                            matched = false;
                            break;
                        }
                        for (let j = currIndex; j < str.length; j++) {
                            if (str.charAt(j).toLowerCase() === value.charAt(i).toLowerCase()) {
                                currIndex = j + 1;
                                break;
                            } else if (currIndex >= str.length - 1) {
                                matched = false;
                                break;
                            }
                            currIndex++;
                        }
                        if (!matched) {
                            break;
                        }
                    }
                    if (matched) {
                        results.push(item);
                    }
                }
            }
        }
        this.setState({ loading: false, results: results });
    }

    assignItems = () => {
        let result = {
            a: [],
            b: [],
            c: [],
            d: [],
            e: [],
            f: [],
            g: [],
            h: [],
            i: [],
            j: [],
            k: [],
            l: [],
            m: [],
            n: [],
            o: [],
            p: [],
            q: [],
            r: [],
            s: [],
            t: [],
            u: [],
            v: [],
            w: [],
            x: [],
            y: [],
            z: [],
            other: []
        };
        for (let elem of props.items) {
            let key = elem.title.substring(0, 1);
            result.hasOwnProperty(key)? result[key].push(elem) : result["other"].push(elem);
        }
        this.setState({items: result});
    }

    componentDidMount() {
        this.assignItems();
    }

    render() {
        return (
            <Search
                className="search-bar"
                loading={this.state.loading}
                onSearchChange={this.onSearchBarChange}
                onResultSelect={this.props.onResultSelect}
                results={results}
                value={value}
                fluid
                resultRenderer={this.props.customComponent}
            />
        )
    }
}

SearchBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string.isRequired})).isRequired,
    onResultSelect: PropTypes.func.isRequired,
    customComponent: PropTypes.object.isRequired
}

export default SearchBar;
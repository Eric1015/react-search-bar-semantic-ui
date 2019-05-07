import React from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
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
        this.onSearchBarChange = this.onSearchBarChange.bind(this);
        this.assignData = this.assignData.bind(this);
    }

    onSearchBarChange(event) {
        let value = event.target.value;
        this.setState({ loading: true, value: value });
        let results = [];
        value = value.split(" ").join("");
        if (value.length !== 0) {
            let key = value.charAt(0).toLowerCase();
            let items = this.state.data.hasOwnProperty(key)? this.state.data[key] : this.state.data["other"];
            for (let item of items) {
                let currIndex = 0;
                let matched = true;
                let str = item.title;
                console.log(item);
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

    assignData() {
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
        for (let elem of this.props.data) {
            let key = elem.title.charAt(0).toLowerCase();
            result.hasOwnProperty(key)? result[key].push(elem) : result["other"].push(elem);
        }
        this.setState({data: result});
    }

    componentDidMount() {
        this.assignData();
    }

    render() {
        return (
            <Search
                className="search-bar"
                loading={this.state.loading}
                onSearchChange={this.onSearchBarChange}
                onResultSelect={this.props.onResultSelect}
                results={this.state.results}
                value={this.state.value}
                fluid
                resultRenderer={this.props.customComponent}
            />
        )
    }
}

SearchBar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string.isRequired})).isRequired,
    onResultSelect: PropTypes.func.isRequired,
    customComponent: PropTypes.func.isRequired
}

export default SearchBar;
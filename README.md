# React Search Bar Semantic UI

A search bar component built based on Semantic UI React.

日本語版は[こちら](docs/README_jp.md)

### Installation

```shell
npm install --save react-search-bar-semantic-ui
```

For [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) user:

```javascript
import SearchBar from 'react-search-bar-semantic-ui';
```

### Usage

The following code is the basic usage of <code>SearchBar</code> component by assigning all the fields used in default search result component.

```javascript
import React, { Component } from 'react';
import SearchBar from 'react-search-bar-semantic-ui';

class App extends Component {
    render() {
        return(
            <SearchBar data={[{title: "Hello World", description: "This is an example data.", image: "https://via.placeholder.com/150", price: 100}]} />
            );
        }
    }
}

export default App;
```

The demo project can be found [here](https://react-search-bar-sem-ui-demo.herokuapp.com).

Its source code can be found [here](https://github.com/Eric1015/search-app).

The demo project uses the database to retrieve data and passes that to the <code>SearchBar</code> component. It also shows the example of <code>customComponent</code> props. By clicking on the <code>Change Search Result</code> button, it will use the custom search result component to display each result.

Here, the <code>customComponent</code> looks something like the following.

```javascript
const customComponent = (props) => {
    const {title} = props;
    return (
        <div>
            {title && <div className='title custom-result'>{title}</div>}
        </div>
    )
}
```

In the same way, you can retrieve any fields of the object by accessing it through <code>props</code>

### Props

| Name              | Type          | Description                                                         |
| ----------------- | ------------- | ------------------------------------------------------------------- |
| `data`            | `Array`       | An array storing data. Each element needs to have `title` property. |
| `onResultSelect`  | `Function`    | A function that will be called when search result was clicked.      |
| `customComponent` | `Function`    | A component that can be used for the search results shown.          |

* objects in <code>data</code> need to at least have a field <code>title</code> otherwise it will not be shown in the search result
```javascript
const data = [
    {
        title: "Hello",
        // ... whatever other fields
    }
]
```

* <code>onResultSelect</code> needs to follow the following syntax to retrieve result

```javascript
// the resulting object will be stored in variable "result"
function onResultSelect(event, {result}) {
    // do something
}
```
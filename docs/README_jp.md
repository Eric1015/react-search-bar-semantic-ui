# React Search Bar Semantic UI

Semantic UI Reactベースで作られた検索バーです。

### インストレーション

```shell
npm install --save react-search-bar-semantic-ui
```

[CommonJS](http://wiki.commonjs.org/wiki/CommonJS)ユーザー:

```javascript
import SearchBar from 'react-search-bar-semantic-ui';
```

### Usage

The following code is the basic usage of <code>SearchBar</code> component by assigning all the fields used in default search result component.
下記のコードはデフォルトのサーチ結果コンポーネントのすべてのフィールドに値を与えた<code>SearchBar</code>コンポーネントの基本的な使用方法です。

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

[ここ](https://react-search-bar-sem-ui-demo.herokuapp.com)からデモプロジェクトをご覧ください。

[ここ](https://github.com/Eric1015/search-app)からそのソースコードをご覧ください。

このデモプロジェクトでは、データベースから抽出したデータを<code>SearchBar</code>コンポーネントに入れて使用しています。さらに<code>customComponent</code> propsを使った例も含まれています。<code>Change Search Result</code>ボタンにクリックすることでカスタマイズしたコンポーネントを代わりに使い、検索結果を表示してくれます。

ここでの<code>customComponent</code>は下記のようになっています。

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

同じようにオブジェクト内のいかなるフィールドも<code>props</code>を通してアクセスできます。

### Props

| Name              | Type          | Description                                                         |
| ----------------- | ------------- | ------------------------------------------------------------------- |
| `data`            | `Array`       | データを有する配列。それぞれが`title`フィールドを持っていないといけない。 |
| `onResultSelect`  | `Function`    | 検索結果が選択されたときに発動する関数。                                |
| `customComponent` | `Function`    | 検索結果を表示するコンポーネント。                                     |

* <code>data</code>内のオブジェクトは少なくとも<code>title</code>フィールドを持っていないといけません。そうしないと、検索結果に表示されなくなります。
```javascript
const data = [
    {
        title: "Hello",
        // ... 他のいかなるフィールド
    }
]
```

* <code>onResultSelect</code>は下記のようなシンタックスにする必要があります。

```javascript
// 検索結果からクリックした結果が"result"変数に保存されます。
function onResultSelect(event, {result}) {
    // do something
}
```
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD0lPXYpDJqwyaWHIakzIPidm654g-m5I0';
const App = function() {
    return (
        <div>
            <SearchBar></SearchBar>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));

//video 15
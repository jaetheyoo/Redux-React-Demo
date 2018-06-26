// This component handles the App template used on every page.
// A wrapper for components with header, footer info
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;
import React, {PureComponent} from 'react';
import Logo from 'components/Logo';
import './index.css';

class MainPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pathToFile: 'src/containers/MainPage/index.js'
        };
    }
    render() {
        const {pathToFile} = this.state;
        const title = 'Welcome to React';
        return (
            <div className='App'>
                <div className='App-header'>
                    <Logo className={'App-logo'} alt={'logo'}/>
                    <h2>
                        {title}
                    </h2>
                </div>
                <p className='App-intro'>
                    {'To get started, edit '}
                    <code>{pathToFile}</code>
                    {' and save to reload.'}
                </p>
            </div>
        );
    }
}

export default MainPage;

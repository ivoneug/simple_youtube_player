import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }
    
    _onFormSubmit(event) {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this._onFormSubmit.bind(this)}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(event) => this.setState({ term: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export { SearchBar };

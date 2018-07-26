import React, {Component} from 'react';

class DocForm extends Component {
    render() {
        return (
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6 blue-text text-lighten-5">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                </div>
            </form>
        );
    }
}

export default DocForm;
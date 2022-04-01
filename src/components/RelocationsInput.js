import React from 'react'
import {connect} from 'react-redux'

class RelocationsInput extends React.Component {

    state = {
        kind: '',
        amount: ''
    }

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <form>
                    <label>Relocation Type:</label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>departure</option>
                        <option>arrival</option>
                    </select>
                    <label>Relocation amount</label>
                    <input type="text" name="amount" value={this.state.amount}/>
                </form>
            </div>
        )
    }

}

export default connect(null)(RelocationsInput)
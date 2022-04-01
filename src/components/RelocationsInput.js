import React from 'react'
import {connect} from 'react-redux'


class RelocationsInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Relocation Type:</label>
                    <select>
                        <option>departure</option>
                        <option>arrival</option>
                    </select>
                </form>
            </div>
        )
    }

}

export default connect(null)(RelocationsInput)
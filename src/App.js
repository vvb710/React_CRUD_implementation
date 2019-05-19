import React from 'react';
import RowComponent from './RowComponent';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            rows: []
        }
        this.removeRow = this.removeRow.bind(this);
        this.updateRow = this.updateRow.bind(this);
    }

    addRow(text) {
        var rowArray = this.state.rows;
        rowArray.push(text);
        this.setState({ rows: rowArray });
    }

    removeRow(i) {
        var rowArray = this.state.rows;
        rowArray.splice(i, 1);
        this.setState({ rows: rowArray });
    }

    updateRow(i, editedComments) {
        var rowArray = this.state.rows;
        rowArray[i] = editedComments
        this.setState({ rows: rowArray });
    }

    render() {
        return (
            <div>
                <button onClick={this.addRow.bind(this, 'asfa')}>Add record</button>
                {this.state.rows.map((text, index) => {
                    return (
                        <div key={index}>
                            <RowComponent index={index} comment={text} deleteRow={this.removeRow} updateRow={this.updateRow} />
                        </div>
                    );
                })
                }
            </div>
        )
    }
}

export default App;
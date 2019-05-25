import React from 'react';
import RowComponent from './RowComponent';
import rand from 'random-key';
import './App.css'

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
                <button className="btnAdd" onClick={this.addRow.bind(this, 'Edit to customize your text')}>Add record</button>
                {this.state.rows.map((text, index) => {
                    return (
                        <table key={rand.generate()}>
                            <RowComponent index={index} comment={text} deleteRow={this.removeRow} updateRow={this.updateRow} />
                        </table>
                    );
                })
                }
            </div>
        )
    }
}

export default App;
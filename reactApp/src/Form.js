import React, { Component } from "react";
import './App.css';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyCin: '',
            companyDic: '',
            companyName: '',
            companyStreet: '',
            companyCity: '',
            companyZIP: '',
            myCin: '',
            isValid: true
        }
    }



    validateNumberField = myCin => {
        const numberRegEx = /\-?\d*\.?\d{1,2}/;
        return numberRegEx.test(String(myCin).toLowerCase());
    };

    changeUrl = e => {
        const { value } = e.target;
        const isValid = !value || this.validateNumberField(value);
        console.log('isValid', isValid)
        this.setState({
            myCin: value,
            isValid
        });
    };


    fetchData = e => {
        const { myCin } = this.state;
        fetch(`http://localhost:8080/getXML.php?ico=${myCin}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    companyCin: data.cin,
                    companyDic: data.dic,
                    companyName: data.name,
                    companyStreet: data.street,
                    companyCity: data.city,
                    companyZIP: data.zip,

                })

            })
    }


    render() {
        const { isValid, myCin } = this.state;
        return (
            <div className="App">
                <form

                >
                    <label>IČO:
                    <input
                        className={"wrapper"}
                        type="text"
                        name="number"
                        value={myCin}
                        onChange={this.changeUrl}
                    />
                    </label>
                    {!isValid && (
                        <div style={{ color: "red" }}>Entered Number is invalid</div>
                    )}
                    <label>Název
                    <input
                        className={"wrapper"}
                        type="text"
                        name="name"

                    />
                    </label>
                    <p>          <button className={"subBut"} type={"button"} onClick={this.fetchData} disabled={!isValid}>
                        Submit
                    </button></p>
                </form>
                <table>
                    <tr>
                        <th>Company CIN</th>
                        <th>Company DIC</th>
                        <th>Company name</th>
                        <th>Company city</th>
                        <th>Company street</th>
                        <th>Company ZIP</th>
                    </tr>
                    <tr>
                        <td>{this.state.companyCin}</td>
                        <td>{this.state.companyDic}</td>
                        <td>{this.state.companyName}</td>
                        <td>{this.state.companyCity}</td>
                        <td>{this.state.companyStreet}</td>
                        <td>{this.state.companyZIP}</td>
                    </tr>
                </table>

            </div>

        );
    }
}

export default Form;
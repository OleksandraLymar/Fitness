import React from "react";

class FileForMainShop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isNameValid: true,
            inpNameClass: 'form-control',
            email: '',
            isEmailValid: true,
            phone: '',
            isPhoneValid: true,
            message: '',
            isMessageValid: true,
            isFormValid: false,
            btnSubmitClass: 'btn btn-primary text-uppercase disabled'
        }
        this.onChange = this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    onChange(e) {
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
        this.validateForm()
    }

    send() {
        let data = {
            phone: this.state.phone
        }

        fetch('http://localhost:3334/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log("Error")
                console.log(err)
            })
    }

    validateForm() {
        const oldState = this.state
        if (oldState.isPhoneValid) {
            oldState.isFormValid = true
            oldState.btnSubmitClass = 'btn btn-primary text-uppercase'
        } else {
            oldState.isFormValid = false
            oldState.btnSubmitClass = 'btn btn-primary text-uppercase disabled'
        }
        this.setState(oldState);
    }
}
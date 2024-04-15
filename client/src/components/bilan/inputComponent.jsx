import React from "react";
import KeyboardComponent from "../KeyboardComponent/KeyboardComponent"; // Importez le composant du clavier

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionResponse: {...props.value},
            question: props.question || {option: []},
            onValueChange: this.props.onValueChange,
            inputType: this.props.inputType || 'text',
            keyboardOpen: false, // Ajoutez cet état pour gérer le clavier virtuel
            activeId: null, // Ajoutez cet état pour suivre l'ID du champ d'entrée actif
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    handleValueChange(changeEvent) {
        const response = this.state.questionResponse;
        response[this.state.question.id] = changeEvent.target.value;
        this.setState(
            {...this.state, questionResponse: response},
            () => {
                if (this.state.onValueChange) {
                    this.state.onValueChange(this.state.questionResponse);
                }
            }
        );
    }
    handleInputFocus() {
        const response = this.state.questionResponse;
        response[this.state.question.id] = '';
        this.setState({keyboardOpen: false, questionResponse: response, activeId: this.state.question.id}, () => {
            this.setState({keyboardOpen: true});
        });
    }

    render() {
        return (
            <div className="mt-4">
                {["text", "number", "date", "email"].includes(this.state.question.type) &&
                    <input type={this.state.inputType}
                           id={this.state.question.id}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder={this.state.question.title}
                           value={this.state.questionResponse[this.state.question.id]}
                           onFocus={this.handleInputFocus}
                           onChange={this.handleValueChange}/>
                    
                }
                {this.state.keyboardOpen && this.state.activeId === this.state.question.id && (
                    <KeyboardComponent
                        numpadOnly={this.state.question.type === "number"}
                        onInput={(value) => this.handleValueChange({target: {value}})}
                        onClose={() => this.state.activeId === this.state.question.id && this.setState({keyboardOpen: false})}
                    />
                )}
            </div>
        );
    }
}
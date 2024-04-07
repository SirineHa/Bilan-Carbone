import React from "react";

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionResponse: {...props.value},
            question: props.question || {option: []},
            onValueChange: this.props.onValueChange,
            inputType: this.props.inputType || 'text'
        };

        this.handleValueChange = this.handleValueChange.bind(this);
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

    render() {
        return (
            <div className="mt-4">
                {["text", "number", "date"].includes(this.state.question.type) &&
                    <input type={this.state.inputType}
                           id={this.state.question.id}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder={this.state.question.title}
                           value={this.state.questionResponse[this.state.question.id]}
                           onChange={this.handleValueChange}/>

                }
            </div>
        )
            ;
    }
}

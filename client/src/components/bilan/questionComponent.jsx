import React from "react";
import RadioButtonComponent from "./radioButtonComponent";
import InputComponent from "./inputComponent";

export default class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionResponse: {...props.questionResponse},
            question: props.question || {option: []},
            onResponseChange: props.onResponseChange,
            isValid: props.isValid
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.hasSubQuestion = this.hasSubQuestion.bind(this);
        this.getSubQuestion = this.getSubQuestion.bind(this);
        this.checkIfAllResponseIsValid = this.checkIfAllResponseIsValid.bind(this);
    }


    handleOptionChange(eventValue) {
        this.setState(
            {
                ...this.state,
                questionResponse: {...this.state.questionResponse, ...eventValue}
            },
            () => {
                if (this.state.onResponseChange) {
                    this.state.onResponseChange(this.state.questionResponse);
                }
                if (this.state.isValid) {
                    this.state.isValid(this.checkIfAllResponseIsValid());
                }
            });
    }

    hasSubQuestion() {
        const subQuestions = this.getSubQuestion();
        return subQuestions && Array.isArray(subQuestions) && subQuestions.length > 0;
    };

    getSubQuestion() {
        return this.state.question.option?.find(opt => opt.value === this.state.questionResponse[this.state.question.id])?.subQuestion || {};
    }

    checkIfAllResponseIsValid() {
        let response = !!this.state.questionResponse[this.state.question.id];
        if (this.hasSubQuestion()) {
            this.getSubQuestion().forEach((question) => {
                response = response && !!this.state.questionResponse[question.id]
            });
        }
        return response && Object.values(this.state.questionResponse).every(value => value !== null && value !== undefined && value !== '');
    }

    render() {
        return (
            <>
                <div className="flex flex-col grow text-2xl leading-10 max-md:mt-10 max-md:max-w-full">
                    <div className="mt-11 text-3xl text-neutral-800 max-md:mt-10 max-md:max-w-full">
                        {this.state.question.title}
                    </div>
                    <div className="mt-2 text-neutral-600 max-md:mt-10 max-md:max-w-full">
                        {this.state.question.description}
                    </div>
                    <div className="mt-4">
                        <form>
                            {this.state.question.type === "radio" &&
                                <RadioButtonComponent question={this.state.question}
                                                      value={this.state.questionResponse}
                                                      onOptionChange={this.handleOptionChange}/>}

                            {this.state.question.type === "text" &&
                                <InputComponent question={this.state.question}
                                                value={this.state.questionResponse}
                                                onValueChange={this.handleOptionChange}/>}
                        </form>
                    </div>
                </div>

                {this.hasSubQuestion() && (
                    this.getSubQuestion()?.map((question, index) => {
                        return (
                            <QuestionComponent key={question.id + index}
                                               questionResponse={this.state.questionResponse}
                                               question={question}
                                               onResponseChange={this.handleOptionChange}/>
                        );
                    })
                )}
            </>
        );
    }

}

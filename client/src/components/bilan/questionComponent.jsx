import React from "react";
import RadioComponent from "./radioComponent";

export default class QuestionComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questionResponse: {},
      question: props.question || { option: [] },
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(changeEvent) {
    const response = this.state.questionResponse;
    response[this.state.question.id] = changeEvent.target.value;
    this.setState({...this.state, questionResponse: response});
    console.log("event", changeEvent, this.state);
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
              {this.state.question.type === "radio" && <RadioComponent/>}
            </form>
          </div>
        </div>
        {/* <QuestionComponent question/> */}
      </>
    );
  }

}

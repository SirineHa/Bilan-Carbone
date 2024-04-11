import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Draggable from "react-draggable";
import "./KeyboardComponent.css";


export const KeyboardComponent = ({ onInput, onClose }) => {
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState("");

  const handleChange = input => {
    setInput(input);
    if (onInput) onInput(input);
  };

  const handleShiftClick = () => {
    setLayoutName(prevLayoutName => (prevLayoutName === "default" ? "shift" : "default"));
  };

  const frenchLayout = {
    default: [
      "& é \" ' ( - è _ ç à ) = {bksp}",
      "{tab} a z e r t y u i o p ^ $",
      "{lock} q s d f g h j k l m ù * {lock}",
      "{shift} < w x c v b n , ; : ! {shift}",
      ".com @ {space}"
    ],
    shift: [
      "1 2 3 4 5 6 7 8 9 0 ° + {bksp}",
      "{tab} A Z E R T Y U I O P ¨ £",
      "{lock} Q S D F G H J K L M % µ {lock}",
      "{shift} > W X C V B N ? . / § {shift}",
      ".com @ {space}"
    ]
  };

  const display = {
    "{bksp}": "supprimer",
    "{shift}": "maj",
    "{lock}": "verr maj",
    "{tab}": "tab",
    "{space}": "espace"
  };

  return (
    <Draggable handle=".handle">
      <div className="keyboard-container">
        <div className="handle">Déplacer</div>
        <Keyboard
          layoutName={layoutName}
          layout={frenchLayout}
          onChange={handleChange}
          onKeyPress={button => (button === "{shift}" || button === "{lock}") && handleShiftClick()}
          display={display}
        />
        <button onClick={onClose} className="keyboard-close-btn">Fermer</button>
      </div>
    </Draggable>
  );
};

export default KeyboardComponent;
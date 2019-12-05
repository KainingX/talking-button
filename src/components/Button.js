import React, { Component } from 'react';

class Button extends Component{
  render(){
    return(
    <button onClick={dialog} type="button" class="btn waves-effect waves-light">
    Button
    </button>
    )
  }
}

function dialog(){
  const texts =[
    "Hello, my name is Button!",
    "Today\'s weather is very nice. What do you think?",
    "Ah, there is a lot of people in front of me. What y\'all doing?",
    "Busy day, eh?",
    "Why do you want to click me? It\'s not fun.",
    "Yes, I am a button and Button is my name. I am as boring as it is.",
    "I wonder whose idea it is to build a little thing like me.. well..",
    "I know, I can't talk loud because my developer can't figure how to render my words out properly. How sad.",
    "I am ok, how are you?",
    "It's a little stuffy over here. I want to move over to the center if it\'s possible, thank you."
  ];
  return console.log(texts[Math.floor(Math.random()*10)]);
}



export default Button

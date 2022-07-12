# Shopify Front End Challenge: OpenAI API

**Howdy, Shopify Recruiter!** Thanks for stopping by. <br>

This document should provide an overview of the Front End challenge for the Fall 2022 internship cohort. <br>

This app was developed by **Alexander Neumann**.

## Technology Used

* **React Native** ⚛️ using **functional components** and **React Hooks** (useState and useRef)
* **Node.JS**
* [Open AI API](https://openai.com/api/), as required.
* A splash of **custom CSS**🧑‍🎨

## Demo

A live version of the challenge can be demoed here: <a href="https://shopify-akndesign.herokuapp.com" target="_blank" rel="noopener noreferrer">Shopify Fall 2022 Front-End Demo</a>
</br>

![Shopify Challenge Demo Gif](https://i.imgur.com/dqJN3Ye.gif)

## Design

![Shopify Challenge Design](https://i.imgur.com/X3RiKYT.png)

_The initial, simple design created in Sketch, lookin' pretty similar to the final outcome. Note the chatbot image (Rosamund Pike as Marie Curie in 'Radioactive') and the selection of text engine have yet to be implemented_.

## Overview

This challenge was built in Node.JS and React, using **functional components** and **React Hooks** (useState, useRef). Additionally, the project was broken into **React components** (and thereby **React props**), beginning with the `App` (parent) component. 

### App Component

The `App` component provides the overall structure of this app. The **React useState** hook was ulitised to cleanly and succinctly hold the relevant values required to pass the User's `prompt`, the `response`, and the `loader` state:

| UseState value                                              	| Description                                                       	|
|-------------------------------------------------------------	|-------------------------------------------------------------------	|
| `const [usersPromptData, updateUsersPrompt] = useState([])` 	| What the User types into the `Form` component, initially set as an empty array                       	|
| `const [allValuesData, updateValuesData] = useState([])`    	| The combined values of the User's `Prompt` and the OpenAI's `Response`, also initially set as an empty array 	|
| `const [isLoading, setIsLoading] = useState(false);`        	| Setting the loader ('Please Wait'), by default, set to `false`          	|

Each `UseState` value was then passed as a props value, down to the `Form` and `Responses` components. </br>

![App Component](https://i.imgur.com/Sx0gSII.png)
<br>

Future versions would likely reduce the trim of props passed down. 

### Header Component

The `Header` component is a set of hardcoded chat responses which guide the user (pretending to be the Curie AI) and mimic the chat conversation between what the user types and the OpenAI responses (allowing the user to anticipate the functionality, effectively providing a set of instructions, even prior to any interaction). Prompts are provided, directing the user to type out prompts that would fire the the hardcoded, manual responses. 

### Form Component

The `Form` component is largely the brains of this challenge. Whilst on a User's perspective, the only visual aspect they see is `textarea` and `submit` button, this component is where the interaction with the OpenAI rests, and then handed off to the `Responses` component. 

Prior to hitting the OpenAI, **two manual responses were baked into the app**. These responses override OpenAI's responses. However, the code has to anticipate some ambiguity and/or upper or lowercase letters in the User's `prompt`. Thereby, I use: <br/>

    if ((props.usersPromptData).toLowerCase().includes("alexander neumann")) {
        let aiResponse = [
                <><AlexanderNeumann /></>
            ]

    props.updateValuesData(data => [...data, [`${usersPromptData}`, aiResponse]]);
    props.setIsLoading(false)

This sets the User's `prompt` to lowercase, and checks to see if the `prompt` includes the keywords _Alexander Neumann_. If true, this renders a `Form` subcomponent called `<AlexanderNeumann />`. The keywords are then added to the `updateValuesData` state value, as well as the User's `prompt`. The loader is set to `false`. A duplicate logic is applied for the keywords _challenge built_, rendering a `Form` subcomponent called `<TechStack/>`. (A ternary operator was attempted, but did not work as intended). If these keywords do not exist, the app continues through to load the OpenAI API. <br>

I interact with the OpenAI by passing in the User's `Prompt` as a **template literal**. I also ensure that the OpenAI key is **secretely kept away** — not exposed in any part of the front-end — from nefarious eyes 👀

![OpenAPI Call](https://i.imgur.com/BrDMiAq.png)

In case of any errors in handling the OpenAI response, I display the error and status code — a future iteration would handle the error in with coded UI solution. Once successful, I set the `loader` as false.

At this stage, we have the data we need from OpenAI API, however I implemented some further safeguards:

    let aiResponse = response.choices[0].text.replace(/((^.)(^,)(^())\r\n)/gm, "");

    aiResponse = aiResponse === "" || null ? "I'm sorry Dave, I'm afraid I can't do that" : aiResponse;

    props.updateValuesData(data => [...data, [`${usersPromptData}`, `${aiResponse}`]]);

Here, I removed any extranenous punctuation from the beginning of  OpenAI Response, using the magic of ✨**Regular Expressions**✨. On rare instances where the **OpenAI's Response is `null` or an empty string, I made a cheeky reference to <a href="https://www.youtube.com/watch?v=ARJ8cAGm6JE" target="_blank" rel="noopener noreferrer">Kubrick's _2001: Space Oddsey_</a>**, instead of a blank chat bubble, as shown below:</br>

![Empty Chat Bubble](https://i.imgur.com/SfBUWwJ.png)
<em><p align="center">HAL:9000 would not be impressed!</p></em>


Finally, I passed the data into a 2D array, to come up with the User's `Prompt` and corresponding OpenAI `Response`:

        ['Hello this is the prompt', 'Pleasure to meet you, this is the response!']


### Responses Component

Mostly, the `Responses` component displays the User's `Prompt` and OpenAI `Response` using a `map` function, passed from the `Form` component. In addition, there are a few other purposes of this component. A recurring issue I found was after the message has been rendered, a user would expect that the most recent message would be immediately displayed in the view, like any chat application. _Not so!_ Functionality had to built — using an persistent empty `span` at the bottom of the chat window — to ensure that the most recent User's `Prompt` and OpenAI `Response` was visible.</br></br>

![Scrolled View Implemented](https://i.imgur.com/C3KxjhA.png)
<em><p align="center">_Automatic scrolling to the most recent message, before and after implementation_</p></em>

Additionally, the ternary operator was provided to check when to add the `loader` ('Please Wait'):

    {props.isLoading ? <LoadingSpinner /> : renderChat}


That's all there is to it, folks! 🙌


## Future implementation (the Icebox)

There's some future features I'd like to implement:

### General bug fixes, wider browser and mobile support

As we developed this on a single MacBook Pro on a relatively quick deadline, I am aware that the functionality may not be supported on older browsers and mobile devices (except for IE6, that browser can gracefully go to pasture!). Please keep this in mind that the best way to view this exercise is on a Chrome browser, using an Apple device like a MacBook. 

### Press enter

Why press the submit button when you can hit <kbd>enter</kbd> on your keyboard!

### Select text engine and chat image

As designed in the Sketch document

### Maintain message history

At this time, the dynamic message history is completely reloaded everytime you interact with the API. For the purposes of the challenge, this is permissable, however as a chat-like tool, this isn't all too user-friendly. This could be solved by refactoring the 2D arrays, tinkering with the `Responses` component or implementing a database like Firebase, saving each message to the database. 

### 🌈 Fun feature

Subtly change the color of the background, based on the message history length between the User and the OpenAI responses. 

## Contact Details

Alexander Neumann (he/him), currently in PST<br>
alexander@akndesign.com
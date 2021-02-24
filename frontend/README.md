

## Brainweb - Challenge


### Available Scripts

In the project directory, you can run:

### ` npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!




### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

````

src/
|- components/                                # All components
|
|    |- Header/ 
        |- Header.css __________________________ # Css modules styles
|       |- Header.jsx __________________________ # View Component
|    |- CreateOrder/ 
        |- index.css __________________________ # Css modules styles
        |- CreateOrder.jsx __________________________ # Create all form
        |- Confirm.jsx __________________________ # Pizza confirmation page 
        |- InfoPizza.jsx ___________________________ # Input component and information container
        |- Suggestion.jsx _____________________________ # Pizza suggestion component
|    |- Home/ 
        |- Home.css __________________________ # Css modules styles
|       |- Home.jsx __________________________ # Page home    
|    |- img _________________ # Image project    
|- store/      
    |- actions/
        |- actionsTypes/
        |- index.js ______________________________ # actions for redux
    |- pizza.js  ______________________________ # pizza action for redux

    |- reducers/ 
       |- index.js __________________________ # pizza reducer
       
|- index.css _________________________ # Css modules styles
|- index.js _________________________ # Render
| 
````


### Installation

1- Clone the project

`git clone git clone https://github.com/ferreiraguihh/binamik-challenge`

2-`npm install` to install npm packages

3- start dev server using `npm start`.

3- build and bundling your resources for production `npm run build`.


#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 8](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react)
* [Redux](https://redux.js.org/)
* [React-router 4.0](https://reacttraining.com/react-router/) 
* [Material-UI](https://material-ui.com/pt/)

Create by Guilherme Ferreira dos Santos

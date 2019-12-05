# A Button

_That talks a few sentences in the console when you click it. Yes, that's it._


## Setup


**1. Install node.js**

Before we start, make sure that you have Node.js downloaded and installed from [website](https://nodejs.org/en/download/).


**2. Download the files**

Download the files and navigate into the folder with command line command.

```
cd hello-world-react-jsx-master
```

**3. Install packages**

Once inside the folder, install the following packages.

React and react-dom: 

```
npm install react react-dom
```

Babel, WebPack, and http-server:

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader http-server
```

## Running the website on localhost

Run WebPack to create a dist folder and a bundle file inside

```
npm run create
```

Run http-server to setup a localhost web server

```
npm run start
```

Open http://localhost:8080 to see the website


## Built With

* [Materialize CSS](https://materializecss.com/) - Make the button prettier
* [React](https://reactjs.org/) - Javascript Libaray used
* [Node.js](nodejs.org) - To use node package management
* [Babel](https://babeljs.io/) - JavaScript compiler, transforming JSX syntax
* [WebPack](webpack.js.org) - Module Bundler, loading Babel
* [http-server](www.npmjs.com/package/http-server) - Creating a localhost web server

### Challenges and Leanring
1. First time writing a class component. Didn't render anything initially until I found out I missed a return statement.
2. Debugging is difficult using WebPack because I can't see where the problem occurs in the files I wrote. 
3. Found out about how to organize js files into folders. 
4. Try to write an onClick event that can render texts in div tag on the page. Failed. Examples online involve ES6 syntax, 
don't feel comfortable using it at this point. Need to improve on JS.

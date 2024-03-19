# Physoc TCD Website

[Physoc.ie](https://physoc.ie/)

Welcome to the Physoc TCD website repository. In this README, I will be writing for the next Webmaster of Physoc, who will likely have little to no experience in web development, so I'll do my best to spell things out as clearly as possible. If this is you, hello! You'll do wonderful things, I'm sure.  
If you're reading this and you're not the next Webmaster of Physoc, hello anyway! Recruiters/Admissions people, I recommend you look at my other projects, they're a bit more self-contained and fun.  
This website is built using React and Chakra UI for a modern, responsive design, that's why it looks so fancy. The website is hosted on GitHub Pages and the source code is version-controlled using Git. 

## Project Structure

The project is structured as follows:

- `public/`: This directory contains static files such as images and the `index.html` file which is the entry point of the application. It also includes the `manifest.json` for PWA configuration and `robots.txt` for SEO.

- `src/`: This directory contains the React components and pages of the application. It's divided into several subdirectories:
  - `Components/`: This directory contains reusable React components. These components can be used across multiple pages. Examples include `Layout.js` (which provides the general layout for a page), `Logo.js` (which renders the website's logo), `Navbar.js` (which renders the navigation bar), etc.
  - `Pages/`: This directory contains the different pages of the website. Each page is a React component. Examples include `About.js` (the About page), `Home.js` (the Home page), `Library.js` (the Library page), etc.
  - `styles/`: This directory contains any global styles or themes for the application.
  - `App.js`: This is the main component that wraps all the pages and provides the routing logic.
  - `index.js`: This is the entry point of the React application. It renders the `App` component into the root div in `index.html`.

- `package.json`: This file contains the list of project dependencies and scripts. It includes scripts for starting the development server, building the production version, running tests, and deploying to GitHub Pages.

- `.gitignore`: This file specifies the files and directories that Git should ignore.

- `README.md`: This file provides an overview of the project and instructions for setting up the development environment, making changes, and deploying the website.

- `node_modules/`: This directory is created when you run `npm install`. It contains all the third-party libraries and modules that the project depends on. It's not included in the version control.

- `build/`: This directory is created when you run `npm run build`. It contains the compiled version of the application that's ready to be deployed. It's not included in the version control.

# Instructions for the Next Webmaster

## Guidelines

The Physoc.ie website pulls its information from the GitHub repository. So the idea is that you fork a clone the GitHub (master) repository (using your own personal GitHub account), make all your lovely edits and then you compile that, you deploy it, then merge that deployment (you'll be merging gh-pages) with the Physics Society GitHub and it should update the website.  

The master repo is where we have all the source code. This is written in HTML, JavaScript (React) with a smattering of CSS for style. You should fork this under your own GitHub account, then clone this master repo (oh, we recommend VSCode for developing btw. it's tough to set up but it's the best for this sort of stuff, you'll thank me later) and make your edits. You make your edits, test it and commit & push that to your clone. When all is said and done, you submit a pull request to the original master branch, and that pull request is approved and sync with everything. There are two branches in the GitHub repository, the master branch (source code) and the gh-pages branch (compiled code). The gh-pages branch is what actually updates the Physoc.ie website, the master branch is just for future reference and making sure we have version-controlled backups of code.

## Developing

Again, if you haven't installed VSCode by this point, shame on you. Maybe there's some XYcode_EDITOR9000 in 2035 so I shouldn't be so judgemental. You will have to install Node.js on your computer. That's what all this silly npm stuff is below me. Node (and npm) is a way of compiling all your handwritten JavaScript etc into compressed machine code that can be efficiently run as a website, you will need to install Node.js from online sources, as far as I remember. npm can run a website locally (localhost) on your machine, and can also be set up to fully compile your code and 'deploy' it to a GitHub branch (in our case, gh-pages).  

When you have Node.js installed, open a JavaScript debugging console (Ctrl+Shift+P in VSCode and type 'Debug: JavaScript Debug Terminal' and open that up). Here's your terminal. Isn't it nice. Go ahead and type in 'npm install' in that terminal for me there. Lovely. Now you have npm installed. You can run 'npm start' and it will open up a local compiled version of the website on your computer in browser. Go ahead and change the text in one of the .js files to say something silly, save it and check your browser, it should have changed. Congrats you're a web developer!  

Now you can make all your edits in this local version and worry about deploying it later if you're unfamiliar with GitHub. That's what I did when I started tbh. This can be quite overwhelming and I'm sure at this point you just want to change around text and images and stuff to your hearts content. If so, you can ignore this next bit about deployment and worry about it later.  

## Deployment

Okay, you're still here? Lovely. Okay so the nice thing about npm is that it also has built in deployment, but this (like most things as you'll learn) will take a bit of set up. First I should explain GitHub pages. This is a free resource provided by GitHub to host light websites in URLs like https://aoneillmark.github.io/example-website/. This is fairly handy because sometimes actually running your website on a server will be different to hosting on your own computer in subtle ways (filepaths and so on) so it's a nice little test. And also it's handy because it means we can run Physoc.ie on top of a GitHub page essentially. 'Physoc.ie' is just a coverup for a GitHub web page. It's GitHub all the way down I tell ya.  

So you're going to deploy your website that you've written locally to a GitHub page under your own account and your own fork. You do this by running 'npm gh-pages', which will create a gh-pages branch in your fork. Then you can run 'npm run build' and 'npm run deploy'. And if you check your GitHub repo, check branches, go to gh-pages, then look at deployments. You should be able to see your very own version of the website there! (I was getting a bug here; to run the site on your own GitHub page, I believe you need to change package.json homepage like this; "homepage": "https://aoneillmark.github.io/physoc-website/",)  

Now, as for getting the website to actually run on Physoc.ie, well firstly you have to change back the homepage in package.json to "homepage": "https://physoc.ie/", But also navigate to https://github.com/duphysoc/duphysoc.github.io. Click into branches and make a new pull request on gh-pages (this is the active branch that Physoc.ie is pulling from). Then create a pull request for your version of gh-pages (a pull request is essentially a way of telling GitHub, hey I've improved/updated this branch/repo, let me show my code to the owner of the repo and see if they approve). If you have read/write permissions and it all merges correctly, you should be able to just merge it immediately, and it should deploy to Physoc.ie. Otherwise log into the Physoc GitHub account and try approve it from the reverse direction.  

## Final Words

Phew, that was a lot. Web development, huh. Hopefully though I've laid out the .js and .css and .html pages clearly so they're understandable and you can just change text as you wish or insert/replace images where you want. If I've coded something in a particularly silly way, you have my deepest apologies. If you have any questions, try to solve it yourself.

And if you can't solve it yourself, I guess you can email me, fine: aoneillmark@gmail.com  
I'm just being silly, I'm happy to help in any way I can! Though I can't promise I'll know the answer to your specific problem, and particularly if it's been more than a couple years, I've almost definitely forgot everything about working on this.  

Best of luck!

# Junk from default README

I'm leaving this here just in case you find it useful, these are default README elements when you make a REACT website.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

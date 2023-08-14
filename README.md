This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This also heavily used Chakra UI elements. That's why it looks so fancy.
Some guidelines for the next webmaster; 
The Physoc.ie website pulls its information from the github repository. So the idea is that you fork a clone the github (master) repository (using your own personal github account), 
make all your lovely edits and then you compile that (i'll get to that in a sec), you deploy it (i'll get to that), then merge that deployment (you'll be merging gh-pages, but once again i'll get to it. so impatient.) with the physics society github and it should update the website.

So, the master repo is where we have all the source code. This is written in HTML, javascript (react) with a smattering of CSS for style.
You should fork this under your own github account, then clone this master repo (oh, we recommend VScode for developing btw. it's tough to set up but it's the best for this sort of stuff, you'll thank me later) and make your edits. You make your edits, test it (i'll get to it!!!) and commit&push that to your clone.
When all is said and done, you submit a pull request to the original master branch, and that pull request is approved and sync with everything.
There are two branches in the github repository, the master branch (source code) and the gh-pages branch (compiled code).
The gh-pages branch is what actually updates the physoc.ie website, the master branch is just for future reference and making sure we have version-controlled backups of code.

As for actually developing;
Again, if you haven't installed VScode by this point, shame on you. Maybe there's some XYcode in 2035 so I shouldn't be so judgemental. You will have to install node.js on your computer. That's what all this silly npm stuff is below me.
Node (and npm) is a way of compiling all your handwritten javascript etc into compressed machine code that can be efficiently run as a website. 
npm can run a website locally (localhost) on your machine, and can also be set up to fully compile your code and 'deploy' it to a github branch (in our case, gh-pages)

When you have node.js installed, open a javascript debugging console (cntrl+shift+p in VScode and type 'Debug: Javascript Debug Terminal' and open that up)
Here's your terminal. Isn't it nice.
go ahead and type in 'npm install' in that terminal for me there. luvly. now you have npm installed.
You can run 'npm start' and it will open up a local compiled version of the website on your computer in browser.
Go ahead and change the text in one of the .js files to say something silly, save it and check your browser, it should have changed. congrats you're a web developer!

Now you can make all your edits in this local version and worry about deploying it later if you're unfamiliar with github. That's what i did when i started tbh. This can be quite overwhelming and I'm sure at this point you just want to change around text and images and stuff to your hearts content.
If so, you can ignore this next bit about deployment and worry about it later;

(okay, you're still here?)
lovely. Okay so the nice thing about npm is that it also has built in deployment, but this (like most things as you'll learn) will take a bit of set up.
First i should explain github pages. This is a free resource provided by github to host light websites in urls like https://aoneillmark.github.io/example-website/.
This is fairly handy because sometimes actually running your website on a server will be different to hosting on your own computer in subtle ways (filepaths n shit) so it's a nice little test
And also it's handy because it means we can run physoc.ie on top of a github page essentially. 'physoc.ie' is just a coverup for a github web page. it's github all the way down i tell ya

So you're going to deploy your website that you've written locally to a github page under your own account and your own fork. 
You do this by running 'npm gh-pages', which will create a gh-pages branch in your fork.
Then you can run 'npm run build'
and 'npm run deploy'
And if you check your github repo, check branches, go to gh-pages, then look at deployments. You should be able to see your very own version of the website there!
(I was getting a bug here; to run the site on your own github page, I believe you need to change package.json homepage like this; "homepage": "https://aoneillmark.github.io/physoc-website/",)

Now, as for getting the website to actually run on physoc.ie,
well firstly you have to change back the homepage in package.json to "homepage": "https://physoc.ie/", 
But also navigate to https://github.com/duphysoc/duphysoc.github.io
Click into branches and make a new pull request on gh-pages (this is the active branch that physoc.ie is pulling from)
Then create a pull request for your version of gh-pages (a pull request is essentially a way of telling github, hey I've improved/updated this branch/repo, lemme show my code to the owner of the repo and see if they approve)
If you have read/write permissions and it all merges correctly, you should be able to just merge it immediately, and it should deploy to physoc.ie
Otherwise log into the physoc github account and try approve it from the reverse direction



Phew, that was a lot. Web development, huh. 
Hopefully though I've laid out the .js and .css and .html pages clearly so they're understandable and you can just change text as you wish or insert/replace images where you want.
If i've coded something in a particularly silly way, you have my deepest apologies.
If you have any questions, try to solve it yourself.

And if you can't solve it yourself, I guess you can email me, fine:
aoneillmark@gmail.com

Though your mileage may vary. If it's been more than a couple years, I've almost definitely forgot everything about working on this.

Best of luck



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

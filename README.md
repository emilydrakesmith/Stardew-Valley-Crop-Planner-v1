<a id='top'></a>

# Introduction

The purpose of this app is to allow users to organize crop plantings in the game **Stardew Valley**.  It's meant to be both a functional app which is free to use and open-source as well as a skills demonstrator.  In addition to my existing React skills, this will be my first project using *React Table* library and building the full project in feature branches despite being an individual effort.  Though I'm initially building this project as a purely front-end React app I'm likely to develop a back-end for the second version.

# Table of Contents
1. [Instructions for Use](#instructions-for-use)
2. [Version Notes](#version-notes)
3. [Tech Framework](#tech-framework)
4. [Future Plans](#future-plans)
5. [Contribute](#contribute)
6. [Special Thanks](#special-thanks)
7. [Appendices](#appendices)
   1. [Boilerplate Content from create-react-app]


<a id='instructions-for-use'></a>

# Instructions for Use

[Back to Top](#top)


<a id='version-notes'></a>

# Version Notes

### About Version Notes

The version history for this app will be organized in a four-digit **W.X.Y.Z** system.
* **W** denotes the main version of this app.  It will be zero until reaching MVP at which point it will become one.  Changes in this number denote a completely new version of the app.
* **X** denotes addition of refactoring of a major component of the app such as a new functionality or directory.
* **Y** denotes completion of a series of commits sufficient to consider a new feature or component working.
* **Z** denotes a minor change, a bugfix, or a commit that does not fully complete a new feature.
* Minor changes such as fixing indentation or spelling may not be given a new version number.

When working in feature branches I do not assign version numbers.  Version numbers are only assigned when a feature branch is merged into the main branch.  For this reason, entries in the **Version History** may not be overall sequential for time if I am working on serveral feature branches at once.

### Version History

#### BRANCH initialize-README
##### 26 August 2021 | commit 90b0a5cb4f18be07ea48728143cf3615af03e8cf
* Initial commit of this project.
##### 26 August 2021 | commit 08b1ca45b47fb6b66414203505ff0482d587b953
* Added a *Table of Contents* to this `README.md` file.  Initialized all sections with anchors for in-page links.
* Created *Back to Top* in-page links at the end of each `README.md` section.
* Created *About Version Notes* sub-section to explain organization of the Version History in `README.md`.
* Moved boilerplate contents in `README.md` to *Appendix 1* to preserve it for future reference.
* Added a remote origin to attach this project to its GitHub repo.
  * CLI: `git remote add origin https://github.com/mhsmith321/Stardew-Valley-Crop-Planner-v1.git`
* Added basic information about this project's purpose (functionally and professionally) to the *Introduction of the `README.md` file.
##### 26 August 2021 | commit 5e3071551fe2145d0471e615ba616e827b3e2672
* Built out *Tech Stack* section of the `README.md` file.
* Built out *Contribute* section of the `README.md` file.
##### 26 August 2021 | commit --
* Removed an extra *Version Notes* section from `README.md` file, presumably made erroneously.
* Built out *Future Plans* section of the `README.md` file (short and long-term plans).

[Back to Top](#top)


<a id='tech-framework'></a>

# Tech Framework

### This app uses:
* HTML5 and CSS3
* JavaScript ES+
* [React](https://reactjs.org/)
* [React Table](https://react-table.tanstack.com/)

### I built this app with:
* [VSCode](https://code.visualstudio.com/) version 1.59.0 (and higher)
* Google Chrome version 92.0.4515.159 (and higher)
* macOS Big Sur version 11.5.2 (and higher)

### This app is hosted at:
* [GitHub Repo](https://github.com/mhsmith321/Stardew-Valley-Crop-Planner-v1)

[Back to Top](#top)


<a id='future-plans'></a>

# Future Plans

### MVP/Short Term
* Finish building out `README.md` with basic/initial content in all sections.
* Create files with basic Stardew Valley data to feed into the app.
  * Crop Data
    * Name (string)
    * Seed Cost (number)
      * account for event-based variability?
    * Days until Harvest (number)
    * Crop Value (number)
      * account for crop-quality
    * Seasonality (array of strings)
  * Calendar Data
    * Season Name (string)
    * Season Number (number)
    * Day Name (string)
    * Day Number (number)
    * Note: this data may be part stored in JSON data, part calculated by JS
* Create an interface for the user to specify grid size.
* Write code to generate an interactable grid sized to match user-input.
* Add interactability to allow crops to be assigned to the grid.
* Create day-by-day calendar views showing crop progress.
* Create an itemized seed shopping list for the user based on crop layout.
* Create a calendar showing crop harvest dates with anticipated yields.

### Ice Box
* Add a back-end to the app.
  * Allow users to create accounts with usual account management features.
  * Add Auth as applicable.  OAuth?
  * Allow users to perform CRUD operations on created crop diagrams.
  * Create other social features: diagram sharing, privacy, etc.

[Back to Top](#top)


<a id='contribute'></a>

# Contribute

Although I'm always interested in meeting new collaborators I prefer to keep this an individual project.

If you'd like to learn more about the developer, please visit [my website](https://martysmith.tech/) and [my GitHub](https://github.com/mhsmith321).

[Back to Top](#top)


<a id='special-thanks'></a>

# Special Thanks
* The game [Stardew Valley](https://www.stardewvalley.net/) was amazingly created by the solo efforts of [Eric Barone](https://twitter.com/ConcernedApe).


[Back to Top](#top)





<a id='appendices'></a>

# Appendices

## Appendix 1: Boilerplate Content from create-react-app

**All content after this message until the next Appendix is boilerplate information populated by create-react-app when this project was initialized via npx.  Aside from some alterations to the heading formats I've left it as it was created.**

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

[Back to Top](#top)
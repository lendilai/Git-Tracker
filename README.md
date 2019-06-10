# Git-search

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## By **Nathan Ng'ethe**


## Description
This is a website that allows the user to view details of users on github. Furthermore, the user can also view the user repositories and the details to them as well.

## Setup Instructions
#### Step 1 - Download zip
Download the zip folder or clone the repo.

#### Step 2 - Download the dependencies
To do this run the following:
`$ npm install -g @angular/cli`

#### Step 3 - Running the app
First run:
`$ ng serve`
Then navigate to `http://localhost:4200/` on your browser.

#### Live link
If you don't want to run the app from your local browser you can acces it through the live link: https://lendilai.github.io/Git-Tracker/

## Working mechanism
- Enter the username of the user you wish to view.
- Submit by either hitting enter or clicking the **Search** button.
- The user's avatar is displayed and you can click on the user icon to view the details.
- You can also view the user on github by clicking the button.


## Demo
![](src/assets/demo.gif)

## Technologies used
* [HTML & CSS](https://www.w3schools.com/html/html_css.asp) - HTML used to create the backbone of the application whereas CSS was used to style the elements.
* [Javascript](https://www.javascript.com/) - This was used to improve user interactivity and to build on the business logic of the project.
* [Typescript](https://www.typescriptlang.org/) - This is a superset of javascript and provided neccessary functions for the building of the application.


## Behaviour Driven Development(BDD)
| Behaviour | Input example    | Output example |
| :------------- | :------------- | :------------- |
| Submit username | Fill in the username in the input and hit enter  | The user's avatar and name are displayed |
| Show user details | Click user icon | The details of the user appear |
| View user on github | Click the github button | You are redirected to the user's github page |
| View the user's repos | Scroll down to the repos section | A list of the user's repos is shown |


## Known bugs
There are no known bugs as of now. If you come across any, feel free to contact me.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## LICENSE
The application is under an [MIT License](https://github.com/lendilai/Git-Tracker/blob/master/License.txt).


## Contact Information
You can contact me via my gmail account:ngethenan768@gmail.com or using my phone number: +254 706446072

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

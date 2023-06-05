

## Visual Studio Code
Help -> About -> 1.78.2
View -> Terminal

## Node
node -v
v18.12.0

## NPM
npm -v
8.19.2

npm outdated // Check updates
npm install // install from package.json with updates
npm ci  // install exact versions from package-lock.json

## NVM
nvm
nvm for windows
nvm install 18
nvm use 18

## GIT
git -v
git version 2.39.0.windows.1

## Chrome DevTools
https://angular.io/guide/devtools

https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh


## VS Code extensions
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
## Remote

Kto, nd, nazwa, ip, user, password
Piotr Apolinary Borchardt 1 angularlab 4.231.17.197 localadmin 
Łukasz Parzych 2 angularlab 4.231.17.218 localadmin 
Robert Sikora 3 angularlab 4.231.17.229 localadmin 
Marcin Radomski 4 angularlab 4.231.17.237 localadmin 


## GIT 
git clone https://bitbucket.org/ev45ive/jsystems-angular-czerwiec.git jsystems-angular-czerwiec.git
cd jsystems-angular-czerwiec.git
npm i 

## GIT Update
git stash -u
git pull -f 
npm i 

## Angular CLI
npm install -g @angular/cli

ng version 
ng --help
ng new --help


ng new jsystems 
ng new jsystems --directory "."
ng new jsystems --directory "." --routing --prefix jsys --style scss 

? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]

## Start project
npm run start
npm start
ng serve
ng s -o

## Core module
ng g m core -m app
ng g c core/components/navbar --export 

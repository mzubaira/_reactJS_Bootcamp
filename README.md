# _reactJS_Bootcamp

## Extensions needed:
Thunderclient - alt. to Postman for API testing in VSCODE
ES7 React/Redux/GraphQL/React-Native snippets
Bracket Color
Auto Rename
Live Server
Prettier - Code Formatter

## Official Doc: https://react.dev/

## NVM Installation:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
OR
Run the install.sh from: https://github.com/nvm-sh/nvm/blob/master/install.sh

./install.sh

nano /home/zubair/.bashrc

## This should be added at the end:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  

source /home/zubair/.bashrc

## Checking version
nvm list-remote
nvm install v20.2.0
node -v
npm -v


## Creating React App (Boiler-Plate)
npx create-react-app my-app

## Notes
React is actually a JS Library but it competes with Frameworks like Angular.js & Vue.js

## BOOTSTRAP
npm install bootstrap@5.2.3
npm audit fix --force

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>


## Inspect Element: Ctrl+Shift+I

# Removing Nodejs & NPM

sudo apt-get remove nodejs npm node
sudo apt-get purge nodejs
sudo rm -rf /usr/local/bin/npm 
sudo rm -rf /usr/local/share/man/man1/node* 
sudo rm -rf /usr/local/lib/dtrace/node.d
rm -rf ~/.npm
rm -rf ~/.node-gyp
sudo rm -rf /opt/local/bin/node
sudo rm -rf /opt/local/include/node
sudo rm -rf /opt/local/lib/node_modules
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node*

You can verify your uninstallation by these commands; they should not output anything.

which node
which nodejs
which npm

## Starting the App
npm start

Local:            http://localhost:3000
On Your Network:  http://192.168.29.108:3000

## Production Build
npm run build

## FOLDER STRUCTURE

Node Modules -> contains all the packages
.gitignore -> used by Github to ignore fules not be pushed
paskage.json -> list of packages which are installed in "Node Modules" folder
package-lock.json -> used along with package.json to re-create the Node Modules fodler
README.md -> Documentation purposes

Public -> has the index.html loaded in the browser. Ideally we should not tocuh it. The <div id="root"> will render the content with the help of JS.

src -> The React Components got under SRC. YOu will send the Props & it will hold the component States.

index.js: it is an entry point for us which will ask to render the App component
app.js: it is a component. Any change we make to it will get rendered by the index.js using the document.getElementById('root') tag

> Note React now uses Function based components instead of class based components
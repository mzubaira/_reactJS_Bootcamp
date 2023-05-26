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


## Creating React App
npx create-react-app my-app

## Notes
React is actually a JS Library but it competes with Frameworks like Angular.js & Vue.js

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

## STARTING THE APP
npm start

Local:            http://localhost:3000
On Your Network:  http://192.168.29.108:3000

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


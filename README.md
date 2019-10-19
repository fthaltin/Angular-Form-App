## Angular Form App
#### Live
https://fat19.github.io/Angular-Form-App/

### Required Installation
1. Download last version of node.js from following link. 
https://nodejs.org/en/download/
2. Download git following link
https://git-scm.com/downloads


### Install Project and Run in Local
1. Clone the repository to a folder
`git clone https://github.com/fat19/Angular-Form-App.git`
2. And
`cd Angular-Form-App`
`npm install`
` ng serve -o`

### Building Process and Deploy to Github Page
1.  Install angular-cli-ghpages(If it have also installed, You can skip. You can see global packages by typing `npm list -g --depth=0 ` )
`npm install -g angular-cli-ghpages`
2. Build project
`ng build --prod --base-href https://[username].github.io/[repo]/`
3.  Create your github page
`ngh --dir=dist`
4. And Done :)  You can preview project from your githubpage



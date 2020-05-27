#### This is a very simple demo project to introduce students to running an express server locally on their machine.

This is a middleman between the UI you will create and the meme generator service. This project is essentially a workaround to reach the meme service without worrying about CORS but it also serves as a basic example of an express server written in Node. Getting up and running should be fairly straightforward. Once youre done, feel free to look through and play around with the code to understand what is happening. All of the code can be found in index.js.

If youre having trouble for any reason please feel free to ping Mike or Dave in the slack channel or attend office hours.

### Step 1: Download Git
- Download link for a windows machine
https://git-scm.com/download/win
- Verify installation by opening a command prompt and typing the following

`git version`



### Step 2: Clone the repository
- Click on the clone or download button. It should say "Clone with HTTPS" but if it doesn't, click "Use HTTPS"
- Copy the git address
- Navigate to the folder you would like to copy the project. The same folder as the other projects you have should do it.
- Type the following command

`git clone <<git address here>>`

- The project should now be copied onto your machine under the memegenerator folder.


### Step 3: Install the dependencies

- CD into the project directory

`cd memegenerator`

- There are very few dependencies in this project so this will not take long.

`npm i` or `npm install`

Quick Note: You can see a list of dependencies in package.json under the "dependancies" key. Some projects also have "devDependencies" which are only required in a development environment. Things like unit testing suites or eslint that you don't want in your deployed server.

There is also a script key that lists all of the scripts. Things like `npm start` and `npm run test` are common scripts. In this project, you will only see the start script.


### Step 4: Run the project!

`npm run start` or `npm start`

- Open http://localhost:3000 in your internet browser. You should see "Hello World"
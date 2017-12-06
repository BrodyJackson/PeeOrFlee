What we used and Running the program:

This project was built using a variety of tools. More specifically, The server side backend code was implemented using Node.js. We used the Express.js framework on top of this in order to create routes connecting certain URL's to our MySQL database. In addition, we utilized a package called Express generator, to automatically create many of the dependency's our project requires, as well as the file structure for the server. In regards to the front-end, we chose to build using React.js, which is a javascript framework that made managing the state of our program and fetching database info from our server much easier. We also took advantage of a react package called Create-React-App, to provide the necessary dependencies, and create a front-end file structure to build on top of.

The following walks through the process of running the program: 

Install NVM which manages node and makes updates easier in the future, then install node
- curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
- nvm install node
- nvm use node
- nvm install --lts
- nvm use --lts

using homebrew make sure you have mysql installed and started on local host
- if you dont have homebrew, then use this command /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

- brew update
- brew install mysql
- brew services start mysql 
- mysqladmin -u root password 'pass'


install sequal pro
- in this you can create tables, which will be running on local host. I can show you how to do this, and I believe that I can send all the code from my instance, so you can auto populate all tables. I just have to figure it out 

install postman
- this app allows you to enter a URL and test to see what the endpoints that you are getting back are, you can GET, POST, and PUT once the routes are set up in the app

In case you didn't know, the express app will run on local port 3000
    - so when you are testing api endpints, the url will look like http://localhost:3000/(whatever the endpoint is)

-- I added comments to the app.js file, which try to explain some of the process

-- I'll continue to add api endpoints until we have a few of them working, then I'll add React into the project, so we can connect the front-end

To run the server: 
navigate to the PeeOrFlee repo then install necessary dependencies by typing - npm install
then use - PORT=3001 npm start 

To run the Front-end: 
navigate to the front_end folder inside the PeeOrFlee repo then install dependencies by typing -npm install
then use - npm start

**Note** the backend will be running on port 3001, and the fron-end on port 3000
**Note** you will also need to databse .sql file in order to run properly.



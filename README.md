# Movies HTTP REST API

Movie API project created for development challenge.

### Installation
To run the project locally, you need to have Node.js, npm, and mysql-server installed locally.
First, install node dependencies by running `npm install` in the project directory. This installs all dependencies declared in package.json into the node_modules directory.<br/>
Secondly, make sure to declare your enviroment variables in '.env' file in the project directory, following the example from '.env.example'.<br/>
After that, you can start populating your database using the sequelize CLI:

#### `npx sequelize db:create`
Creates the database, using the configuration specified with the enviroment variables.

#### `npx sequelize db:migrate`
Applies all migrations in 'src/data/migrations' which create the database structure.

#### `npx sequelize db:seed:all`
Applies all seeders in 'src/data/seeders' which populate the Database with some initial data.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Starts the server.

#### `npm run dev`

Runs the app in the development mode in [http://localhost:8000](http://localhost:8000).

### Authentication
Authentication to the API is handled via Json Web Tokens. You must first create an user, then you may retrieve your refresh Token, wich you can further use to obtain short-lived accessToken to acess the protected endpoints. (See [API Reference](https://documenter.getpostman.com/view/13805394/TzXtHzxG) for further details).

<<<<<<< HEAD
### More Information

[API Reference](https://documenter.getpostman.com/view/13805394/TzXtHzxG)
=======
[Documentation](https://documenter.getpostman.com/view/13805394/TzXtHzxG)

### Models

* Movie<br/>
  Has many actors, but one director.
* TV Show<br/>
  Has many actors, but one director. It also has seasons and episodes inside each of one.
* Actor<br/>
  Can be on different movies and tv shows.
* Director<br/>
  Can direct many movies and specific episodes of tv shows.
>>>>>>> cb81d2a5ae54a01ee771cde15810c8ed7da9afa5

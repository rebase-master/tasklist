## Steps to setup this project

- Create an account on [mlab.com](https://mlab.com) and setup a database
- Get the database, username, password and create a file server/config/env/development.js with the following contents:

    ```
    module.exports = {
        db: {
            database: <dbname>,
            username: <username>,
            password: <password
        }
    }
    ```

- Browse to project root and run `npm install`
- Browse to `client` folder and again run `npm install`. Be patient, it takes some time.
- Run `bower install` to install bootstrap
- From within the client folder, run `npm start`. This starts the live development server.
- To access APIs from the server side, browse to project root and run `node server`, which will start the backend
  server.
- Point your browser to `http://localhost:4200` to test the app.


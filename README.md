# Festival-app Back-End

This Festival app is for people who want to be organized and see as many bands and artists over 
a three day festival as possible. Search through the stages, map or Lineup to find the acts you 
would like to see and add them to your schedule. 

This app also has functionallity to plan these fesivals, from adding newsfeed items to making 
sure your equipment and crew are in the right places at the right time. 

## SETUP How to use this template

1. Create a new project based on this template using the `Use this template` button

![HOW_TO_USE](https://user-images.githubusercontent.com/20372832/77003323-70966180-695d-11ea-8abe-b362d57135f3.gif)

2. Clone the app

```
git clone git@github.com:YOUR_GITHUB_NAME/YOUR_PROJECT_NAME.git
```

3. cd into your project

```
cd YOUR_PROJECT_NAME
```

4. install dependencies

```
npm install
```

5. Configure your database in `config/config.json`

Default config is setup for usage with an ElephantSQL database instance, you need to provide the DB Url on the "url" key of the config.json file, key development.

```json
// config/config.json
{
  "development": {
    "url": "YOUR_ELEPHANTSQL_URL_HERE",
    "dialect": "postgres",
    "operatorsAliases": "0"
  },
}
```

6. Run migrations & seed data

`package.json` contains a script for this

```bash
npm run initdev
```

Or run the commands seperately

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

7. start server with `nodemon` (recommended for development)

```
npm run dev
```

8. or start normally

```
npm start
```

## For More Information 

See the [Festival-app Front-End](https://github.com/Richie2810/B-festival-app) 

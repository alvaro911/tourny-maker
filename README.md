# Tourny maker

Tourny maker is an application that helps people to create and manage amateur soccer tournaments.

[Live demo](https://tourny-maker.herokuapp.com)

## Installation

This project was created using the `create-react-app` CLI to install all of the dependencies, run:

```yarn```

To install all dependencies and run:

```yarn start```

To start the developer environment, by default it uses port 3000 so open `localhost:3000` in your browser

## How does it work?

The first thing you need to do in Tourny Maker is to create a user, there are two kinds of user, CREATOR and PLAYER

![alt-tag](https://user-images.githubusercontent.com/12722575/29984461-dbbeca6a-8f17-11e7-979c-fddf54a573be.png)

### CREATOR

A CREATOR kind of user is the one that will have control over tournaments they create, to create a tournament the user has to fill in a form where they'll input data about the tournament like the tournament name when it starts how many teams they want to participate

![alt-tag](https://user-images.githubusercontent.com/12722575/29984469-e6be89c8-8f17-11e7-9e72-51b2c17a53db.png)

Once a tournament ready they can go to the tournament dashboard where they'll see all of the tournaments that have been created, and it will have information like the tournament name the when does it start and the most important piece of information is the number of teams registered out of the ones the CREATOR stipulated when submitting the form. The action buttons to the far right have different functionality. If a tournament doesn't have all of the teams needed only 2 action buttons will appear, the stats button and delete tournament button. If the tournament has all of the teams required then the start tournament button will appear, it's important that the user clicks on this button ONCE.

![alt-tag](https://user-images.githubusercontent.com/12722575/29984483-f4e0d66e-8f17-11e7-91f9-c1eeedb32a99.png)
![alt-tag](https://user-images.githubusercontent.com/12722575/29984485-f7b8edf4-8f17-11e7-96f9-aacbaf292d96.png)

Once the start tournament button is clicked the system will generate all the matches for the teams to play

By clicking the stats button once the tournament has been created the user will be able to see the **Leaderboard**, matches, and results. By default, the leaderboard will have every team with 0 points and 0 goals difference. The **Upcoming Matches** panel show all of the games that will be played along the competition. if the user clicks on one of the matches, that will take them to set the match result, once submitted the **Leaderboard** will update points and goal difference, the **Match Results** panel will update as well and an update button will appear, this button's function is to change the result of a match in case of a mistake

![alt-tag](https://user-images.githubusercontent.com/12722575/29984496-fe90262e-8f17-11e7-9587-b1e717feeaea.png)

### PLAYER

A PLAYER will look for a tournament that has space for them to participate, once they pick the tournament they have to fill in a form by naming a team, and registering players, the number of players to be registered depends on the number the creator stipulated when creating the tournament.

![alt-tag](https://user-images.githubusercontent.com/12722575/29984508-073b544c-8f18-11e7-94a9-57201dada867.png)
![alt-tag](https://user-images.githubusercontent.com/12722575/29984512-0ab331ee-8f18-11e7-8889-22953b2c038d.png)

After a tournament is created visit the **Team Dashboard** where there will be a list of teams created, by clicking on them this will take the PLAYER to the tournament statistics page where they can see their progress along the tournament

# Drag and Drop Vote for a Game App

## Introduction
When playing board games with friends we'd often ask the question "What game do you want to play?". It gave me the idea for this app that would allow us to take the same list of games and put them in order of games we wanted to play most to least. Once everyone had sorted their list then we'd be given the list of games in terms of "most favourite" to "least favourite". 

For example if you had a list of 4 games in this order:
- 7 Wonders
- Settlers of Catan
- Agricola
- Azul

Then the games would be assigned points by the length of the array (e.g. 7 Wonders = 4, Settlers of Catan = 3, Agricola = 2, Azul = 1). If there were 4 players then these scores for would be added up for each player to give a grand total score of something like:
- 7 Wonders: 12 points
- Settlers of Catan: 11 points
- Agricola: 7 points
- Azul: 10 points


## Usage
To run locally, first install the dependencies by running the `npm install` command. Then run the command `npm start` to start the development server. This will start the development server and open the application in your default web browser.
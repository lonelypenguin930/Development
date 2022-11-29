# Development

### Link to Deployed Website

If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

The goal of this application is to provide a database for the star players during the 2022 world cup. The value is to track the goals and assists of the players as well as a fantasy score that evaluates their overall performance. Users can add players to watch to build their dream team with an average fantasy score displayed.

### Usability Principles Considered

I wanted to make the filter and sort function clear to the users without crowding the screen. So I implemented the dropdown for the filters and kept the filters and the sort features always visible on the left side of the screen.

I also wanted to make the players to watch feature visible, so I put it on the top of the window, with a button to clear all the players. I also made the aggregate measure as the average so the user could more clearly evaluate the strength of their dream squad.

### Organization of Components

The organization of the components is simple: there is a main app component containing all the visible content and a playercard component containing the information about a player

### How Data is Passed Down Through Components

Data is passed down to the playerCard component through a JSON file, which is read in the App.js file through a map function

### How the User Triggers State Changes

The user triggers state changes by adding and removing players from the players to watch list, as well as setting different sort and filters

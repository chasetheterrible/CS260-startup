# Paired up
## Elevator Pitch
Have you ever wanted to work on speed and memorization at the same time, or even have quick friendly competition? This matching game makes it so you as an individual can test your skills of speed and memorization against yourself or others by turning over two two at a time and comparing them. The user is timed and the goal is for the tiles to have the same number. If the numbers match it is a pair and the tiles are taken off the board, if not the user must flip two new cards over until the whole board is clear. Once the board is clear the game is over. The layout of the cards will be different each time.
## App Design
![first screen](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-01-15%20at%209.59.49%20PM.png)
![signup screen](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-01-15%20at%209.59.58%20PM.png)
![login screen](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-01-15%20at%2010.00.12%20PM.png)
![instruction screen](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-01-15%20at%2010.00.24%20PM.png)
![Game screen](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-01-15%20at%2010.00.32%20PM.png)
![End screen](https://github.com/chasetheterrible/CS260-startup/blob/main/Screen%20Shot%202024-01-15%20at%2010.00.48%20PM.png)

This is a sequence diagram that shows how to people would interact with the backend to see scores.
![Diagram](https://github.com/chasetheterrible/CS260-startup/blob/main/Sequence%20diagram.png)

## Key Features
* Secure login over HTTPS
* Tiles are randomly organized in 4 x 5
* Ability to select desired tiles

## Technologies
* HTML - Uses correct HTML structure for application. Six HTMl pages: one for app design/logo, one for sign up, one for log in, one for instructions, one for the game, and one for the stats
* CSS - Application styling that looks good on differnet screen sizes, uses good whitespace, color choice and contrast
* JavaScript - Provides login, tile display, timer, backend endpoint calls
* Service - Backend service points with endpoints for:
  * login
  * submitting time
  * comparing user scores
* DB/Login - Store users, time scores and data in database. Register and login users. Credentials securely stored in database. Can't play unless authenticated
* Websocket - As each user finishes the game, game highscores announcments are sent to users.
* React - Application ported to use the React web framework.


# CSS Deliverable
* Header, Footer and Main content body
* Navigation Elements
* Responsive to window resizing
* Application elements - contrast of whtiespace
* Application text content - consistent fonts

# Javascript Deliverable
* I implimented javascript so the application works for a single user with their local storage, and added placeholders for future technologies
* login: when you press the login button it takes you to the play page
* Database: displayed the time(completion of game), position relative to other scores, name(username from login page), and date of the payer
* websocket: displays on the play screen mock created users wtih a mock game completion time
* application logic: the matching game changes every time and user input allows them to play and complete the game
## **Added**
* I modified the play html and got rid of the hardcoded buttons, instead I have javascript create and keep track of those buttons
* Added a functional timer which keeps trak of the amount of time it takes to complete the game

# Service deliverable
* Node,js/express HTTP service - done
* static maiddleware for frontend - done
* calls to third party endpoint
* Backedn service endpoints - placeholders for login info that stores user on server, enpoints for the imes
* front end call service endpoings - completed using fetch

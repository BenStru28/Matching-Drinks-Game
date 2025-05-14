# Matching-Drinks-Game

### Description

This game is designed to build a mixologists' memory of classic cocktails that can be found. There are 8 cards, 4 with pictures of these classic cocktails and 4 with the name of the cocktail itself. Match all of the pictures and names within the given timeframe to win.

### Technologies used

-Javascript
-Html
-Css

### Approach taken

I first created the scaffolding for my css and html to get the layout I wanted for the the game components. I then created the header, game board, timer and reset buttons without any functionality. I created a render function which is responsible for bootstrapping the game board with the default cards. It is in this render step that I attach click event handlers to the cards. These click events are responsible for most of the heavy lifting like updating the design of the cards that you click and saving those matches in state.

# Q1 - Reading file (Challenge level: basic)

Write the code such that when the `Load` button is clicked, the content of the file
`contact.txt` is added into `div#content`

# Q2 - Reading and parsing file (challenge level: Intermediate)

Create your own `index.html` and `script.js` for this hands-on. Include in `axios.min.js` 
yourself manually (google for 'axios cdn' to find the site to get axios from).

Your goal: when the user clicks on a button, perform the following

1. Read the content of `items.txt` and print it to the console,
2. Add each fruit inside the file into an unordered list inside your `index.html` (that is, display each fruit
as its own bullet point)

Hint: Research the JavaScript 'string split' feature to help you.

# Q3 - Combine Multiple Files (challenge level: hard)
There are two files in `file1.txt` and `file2.txt`.

Set up the `index.html` so that it can use axios.

Then add in the code such that when the user clicks on the button, find a way to
read in the content of both `file1.txt` and `file2.txt` and put their content
inside the textbox, one after the other.

There can only be one button. Both files should be loaded when the button is clicked.
The content of both files should appear inside the textbox at the same time.

# Q4 - Simple JSON example

Read in the example JSON file `artwork.json`
Display the `title` in a `<h1>`. and display the image using the given image URL in an `<img>` tag.

# Q5 - Array of JSON Objects

Inside `users.json`, you will find an array of user objects.

Your task: 

1. Create your own `index.html` and `script.js`
2. When a button is pressed, load in all the users from `users.json` and display their `firstrName`, `lastName` and `email` in a list (of your own format)
3. Create a text box, with a button labeled 'Search' next to it
4. When the user has entered a **userId** in the text box and clicks on the 'Search' button, display the `firstName` and `lastName` of the user with that userId in any way you deem fit.


# CinemaSwipe

## Project description

A web application for choosing movies to watch with friends and family. After creating an account, users can send friend requests to their friends and family to become ‘friends’ on the CinemaSwipe platform. The main page of the site showcases different movies from sources such as IMDB and stream watching guides, allowing users to indicate whether they are interested in watching a given movie or not. Showcasing movies will include presenting details of a movie, such as the box office cover, description, cast, genre and so on. To initiate the movie matching process, users intending to choose a movie to watch should join a ‘room’. If a user ‘likes’ the same movie as a friend (in the same room), both users will be notified of the movie match. Users will have access to their friend list, their liked movie list, and a list of movies that they have liked in common with each friend. 


## Tech Requirements

Target Platform
- Web Application

Development Platform
- MongoDB
- Express
- React
- Node.js

Where the source code will be hosted
- Heroku 

List any Third party SDKs or APIs
- API 1: https://developer.imdb.com/ 
- API 2: The Movie Database (TMDB) (themoviedb.org)
- API 3: JustWatch - The Streaming Guide

Identify any existing software that we plan to start with
- None

List any other Assets
- Images
  - Possibly a logo for main page
  - User images or avatars
  - Movie cover posters will be supplied by the movie database API listed above.
- Sounds
  - None

Database and/or virtual servers used to host the project data:
- MongoDB
- Express.js


## Scripts
In root directory /movie-app:

- **npm run start** starts production server
- **npm run dev** runs development server (with nodemon!)
- **npm run install_all** installs all dependencies

# NYTimes-README

## About

This app shows the user top stories from the New York Times with headline, author, and a short snippet. 
    
The user can click on each article to see more details about the article and a link to the article.

The user can also use the search bar to search for articles on topics that interest them.

# Getting Started
To get a local copy up and running follow these simple steps.

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:Andrew-Musselman/NYTimes-Reader.git
   ```
2. `cd` into that directory
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   npm start
   ``` 

## Process

### Planning
    
- Wireframe

![WireFrame for NYTREader](https://user-images.githubusercontent.com/92277979/171894830-d97f0c8f-5491-4619-9567-7c00e2afd4b7.png)

- Project Board

<img width="1434" alt="Project board for NYTReader" src="https://user-images.githubusercontent.com/92277979/171893623-d38bfda4-49ae-4d26-bdb3-a1a5cf06611c.png">

- Agile(ish) workflow

- Final Product

![NYT README final product](https://user-images.githubusercontent.com/92277979/171896309-2357bb50-cca2-4e6e-86da-e32943cc735c.png)

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%purple)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Wins and Challenges

- Wins: Getting a final product that looks like the wireframe, following agile-like work flow with each iteration coming to completion before starting the next, following user stories in the project board

- Challenges: Consuming a new API and determining which details to present to the user, accessing nested data in the response from the API

## Futere Additions

- A section for Top Stories that persists across all pages
- Responsive design for viewing on mobile
- More robust error handling
- End to end testing of user paths using Cypress
- Depoloyment

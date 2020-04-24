# Retro Engineering React App

> Url: https://react-course-retro.now.sh/

The purpose of this exercise is to understand a react app architecture, whether it uses redux or built-in React tools (context and hooks).

## Workflow

For a single person, use a VS code liveshare session (or equivalent) and let the learner go step by step while questioning the decisions taken. Of course, re-orient him/her when the decision is not right by explaining why and giving hints on the right direction to take.


## Pre-requisites

- node >= 11
- yarn 1.*

#### Nice to have

- vscode with liveshare
- prettier / eslint extensions

## Getting started

- `git clone https://github.com/hpierre74/react-retro-workshop`
- `yarn && yarn start`

## Steps

### Analysis

- Identify the html structure
> You may use https://wireframe.cc/ to help visualize the DOM elements
- Identify the react component structure from the html one, list them
> You may use https://wireframe.cc/ to help visualize the react elements
- List the methods you will need
- List the states you will need
- Virtually assign the state and methods to the components you listed earlier
- With Context, how would you architecture your app so every components access what it needs and nothing else (if possible)
- With Redux, how would you architecture your app so every components access what it needs and nothing else (if possible)

### Code !

- Create your directory structure and file structure
- Create your routes
- Create your shared components
- create a basic html (jsx) markup for your pages
- Create your store
- create your modules (features reflecting the business) 
- access the store and methods in your components and identify the pitfalls (redux or context)
- Style it with material ui to gain time
- :tada:

## Dependencies

To gain time, a boilerplate with tools and dependencies in place will be given:

- react
- prop-types
- react-router
- connected-react-router
- redux
- react-redux
- redux-thunk
- @material-ui/core
- @material-ui/icons
- @material-ui/styles

###### tools
- eslint
- prettier


## Functional Specs

### Pages

- `/home`
  - List of articles
  - Cart on the side
- `/article/${id}`
  - article card
  - Cart on the side
  - return home cta
- `/about`
  - return home cta

### Layout

- AppBar with nav menu

### Cart

- Empty Card with a checkout button by default
- List of added items with delete/minus button (you can add the same item and increment its count from the `add to cart` button)

### Article

- A card with:
  - an image
  - a title
  - a description
  - an `add to cart` cta
  - a `view` (article) cta




# Retro Engineering React App

> Url: https://react-course-retro.now.sh/

The purpose of this exercise is to understand a react app architecture, whether it uses redux or built-in React tools (context and hooks).
Through this

### Workflow

- No timebox: the aim is to learn the principles not to jump from one concept to another. Though, this exercise should'nt take more than 2/3 days with an active mentoring.
- Pair/mob programming: for a single person, use a VS code liveshare session (or equivalent) and let the learner go step by step while questioning the decisions taken. Of course, re-orient him/her when the decision is not right by explaining why and giving hints on the right direction to take.


### Analysis

- Identify the the html structure
> You may use https://wireframe.cc/ to help visualize the DOM elements

- From the website, you need to 

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
- List of added items with delete/minus button, you can add the same item and increment its count from the `add to cart` button


### Article

- A card with:
  - an image
  - a title
  - a description
  - an `add to cart` cta
  - a `view` (article) cta




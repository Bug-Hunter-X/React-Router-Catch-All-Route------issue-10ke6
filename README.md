# React Router Catch-All Route Bug

This repository demonstrates a common issue encountered when using the catch-all route `/*` in React Router. The problem arises when this route is placed after more specific routes, causing it to always match, regardless of the URL. 

The `App.js` file contains the buggy code, while `AppSolution.js` provides the correct implementation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/` or `/about`.  You'll always see the "Not Found" component. 

## Solution
The solution involves re-ordering the routes to place the catch-all route at the end of the route definitions.
## Objective

Create a 2-player game of Connect Four.

## Prompt

Create a two-player game of [Connect Four](https://en.wikipedia.org/wiki/Connect_Four)

![](https://wookie.codesubmit.io/static/challenges/connect-four/connect-four.png)

### Recommended Stack / Setup (Next.js + TypeScript)

- Use **Next.js** with **TypeScript** enabled (either router is fine):
  - App Router (`app/`) with a **Client Component** for the interactive game UI (add `'use client'` at the top of the component file)
  - or Pages Router (`pages/`)
- Suggested project bootstrap:

```bash
npx create-next-app@latest connect-four --ts
```

- Styling options (choose what you like): **CSS Modules**, **Tailwind CSS**, or styled JSX.
- Keep React component names in **PascalCase** (e.g., `ConnectFourBoard`) and functions/variables in **camelCase** (e.g., `dropToken`, `currentPlayer`).

### Requirements

- The board should be 7 wide by 6 high
- It should alternate between the 'red' and 'yellow' players turn
- Clicking the "Drop" button should drop a token of the current player's to the bottom-most free position
- Clicking the "Drop" button on a full column should have no effect
- If either player gets four in a row (horizontally, vertically, or diagonally):
  - The "COLOR's turn" heading should be replaced by "COLOR won!"
  - The "Drop" buttons should be replaced by a "Play again" button
- If the board is full and there is no winner:
  - The "COLOR's turn" heading should be replaced by "Draw!"
  - The "Drop" buttons should be replaced by a "Play again" button

### Implementation Notes (idiomatic Next.js/React)

- Manage UI state with React hooks (e.g., `useState` / `useReducer`). For example:
  - `board`: a 2D array (or column-based array) representing the grid
  - `currentPlayer`: `'red' | 'yellow'`
  - `status`: whose turn / winner / draw
- In the App Router, your game component will typically need to be a Client Component because it uses state and click handlers.
- Consider extracting logic into plain TypeScript utilities (e.g., `applyMove(board, columnIndex, player)`), keeping components focused on rendering.

### Important

- Checking the win condition is outside the scope of this question (unless you want the extra challenge!). We have provided a [utility to check whether there is a winner or draw](./connectFour.js).

  - In a Next.js project, you can place this utility somewhere like `./lib/connectFour.js` and import it into a Client Component.
  - If you use it exactly as provided (attaching to `window`), ensure it runs on the client only.
  - If you convert it into an ES module export for cleaner imports, keep the behavior the same.

Example usage:

```js
// Board must be a 2D array filled with `null` for empty space
// and primitive values representing player tokens (numbers, strings)
// e.g. 1 or 2, 'red' or 'yellow', 'player 1' or 'player 2'
//
// returns `null` for no winner, 'draw' for draw, or the value of the winning token
const exampleBoard = [
  [1, 2, null, null, null, null],
  [1, 1, 1, 1, null, null], // player `1` has 4 in a row
  [2, null, null, null, null, null],
  [2, null, null, null, null, null],
  [2, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

const winner = window.connectFour.checkForWinner(exampleBoard);
console.log(winner); // 1
```

### Testing (suggested)

- Unit/integration tests:
  - **Jest** + **React Testing Library**, or **Vitest** + **@testing-library/react**
  - Test key behaviors: dropping tokens, full-column no-op, turn alternation, and end-game UI states (win/draw)
- Optional end-to-end:
  - **Playwright** or **Cypress** for clicking through a full game flow

### Code Quality

- Enable TypeScript strictness where practical (e.g., `strict: true`) and avoid `any`.
- Use Next.js’ built-in linting (**ESLint**) and format consistently (optionally **Prettier**).
- Prefer immutable updates to state (or encapsulate updates in reducer logic).

## Hints and challenges

See the HINTS.md file if you get stuck and the CHALLENGES.md file if you've finished with extra time and would like to show off your skills!

### Evaluation Criteria

- Best practices
- Show us your work through your commit history
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
- Completeness: Did you complete the features?
- Correctness: Does the functionality act in sensible, thought-out ways?
- Maintainability: Is it written in a clean, maintainable way?
- Testing: Is the system adequately tested?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Huge Team
# Todo

### Features

##### Adding Todos 
##### Delete feature


### Technolgies Used
###### React
###### Tailwind CSS

## Installation and Setup
## Frontend
#### Navigate to the project directory:
cd Frontend

#### Install Dependencies
```bash
npm install
```

#### Setting up Tailwind CSS
If you haven't already set up Tailwind CSS in your Vite project, follow these steps:
```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```
In tailwind.config.js, configure the content option to specify where Tailwind should look for content.

```bash
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In the main CSS file (e.g., src/index.css), include the Tailwind directives:
```bash
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```


#### Run the Development Server
```bash
npm run dev
```
This will compile the project and start a local development server. By default, Vite will open the app in your default browser at http://localhost:500.

## Backend
#### Navigate to the project directory:
cd Backend

#### Install Dependencies
```bash
npm init
npm install express nodemon mongoose cors body-parser
```
#### Run the Development Server
change the module type, Add script as start:nodemon index.js
```bash
npm start
```




### Contact 
jagadeeshdende@gmail.com
9390386257

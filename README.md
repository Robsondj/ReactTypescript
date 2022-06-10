# React Typescript    

This project is a study about React with Typescript.

The application was developed during a alura course and allows to add tasks and manage the time of each task.

## Runing

### Installing dependencies
    `yarn` or `npm install`

### Runing the project
    `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Runing tests
    `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Making Build
    `yarn run build` or `npm run build`

<br>

### React Lifecycle
`useLayoutEffect(() => {
    …
},[]) -> componentWillMount`


`useEffect(() => {
    …
}, []) -> componentDidMount`


`useEffect(() => {
    …
}, [variavel]) -> componentWilLUpdate`


`useEffect(() => {
  return () => {
    …
  }
},[]) -> componentWilLUnmount` 


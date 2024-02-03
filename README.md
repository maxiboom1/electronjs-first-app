# Electron-js first app
 My first experience with electron js

## Electron env Installation

### In your app folder:
`npm init
npm install electron --save-dev
`

### Package.json:
`
"main": "main.js",
"scripts": {
  "start": "electron ."
},
`
## Electron-builder Installation

Electron-builder will build standard "next-next-next" installer, with nodejs inside, so the end-user get all-in-box solution.

`npm install electron-builder --save-dev`

In your package.json:

`"build": {
  "appId": "com.example.yourapp",
  "productName": "YourAppName",
  "win": {
    "target": "nsis"
  }
}
`
To run build:
`npx electron-builder build --win`


## My Notes

 - Simple applications - window with input form, and button that onclick will take input text as url and perform get request - done.
 - Project folder structuring - done.
 - Installed and tested electron-builder. In its default, he create classic "next-next-next" installer - done.


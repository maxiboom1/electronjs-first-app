# Electron-js First App
My first experience with Electron.js.

## Electron Environment Installation

### In your app folder:
```
npm init
npm install electron --save-dev
```

### package.json:
```
"main": "main.js",
"scripts": {
  "start": "electron ."
},
```

## Electron-builder Installation

Electron-builder will build a standard "next-next-next" installer. 
It packages Node.js within the installer, providing an all-in-one solution for the end-user.

`npm install electron-builder --save-dev`

In your package.json:

```
"build": {
  "appId": "com.example.yourapp",
  "productName": "YourAppName",
  "win": {
    "target": "nsis"
  }
}
```

To run build:

`npx electron-builder build --win`


## My Notes

 - Simple applications - window with input form, and button that onclick will take input text as url and perform get request - done.
 - Project folder structuring - done.
 - Installed and tested electron-builder. In its default, he create classic "next-next-next" installer - done.


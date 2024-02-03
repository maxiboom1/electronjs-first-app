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

## Electron project structure

Organizing your Electron project with a clear folder structure is essential for maintainability and scalability. 
Here's a recommended folder structure for your project, designed to separate the main process code, renderer process code, and other assets like styles and images:

```
my-electron-app/
├── src/                     # Source code for the application
│   ├── main/                # Main process code
│   │   └── main.js          # Entry point for Electron (main process)
│   ├── renderer/            # Renderer process code
│   │   ├── css/             # CSS styles for your application
│   │   │   └── style.css    # Main stylesheet
│   │   ├── js/              # JavaScript files for the renderer process
│   │   │   └── renderer.js  # Script for handling renderer process logic
│   │   └── index.html       # The HTML file for the renderer process
│   └── assets/              # Static assets like images and fonts
│       ├── img/             # Image files
│       └── fonts/           # Font files
├── package.json             # Node.js manifest file for the project
├── node_modules/            # Node.js modules (don't edit; updated by npm)
└── .gitignore               # Specifies intentionally untracked files to ignore
```

## My Notes

 - Simple applications - window with input form, and button that onclick will take input text as url and perform get request - done.
 - Project folder structuring - done.
 - Installed and tested electron-builder. In its default, he create classic "next-next-next" installer - done.


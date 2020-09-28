This is a Chrome Extension which help users to auto fill a form using different templates.

![Example Extension Popup](https://i.imgur.com/Wp37usG.png "Example Extension Popup")

<br>

**Getting Started**

Run the following commands to install dependencies and start developing

```
npm install
npm run dev
```

**Scripts**

-   `npm run dev` - run `webpack` in `watch` mode
-   `npm run storybook` - runs the Storybook server
-   `npm run build` - builds the production-ready unpacked extension
-   `npm run test -u` - runs Jest + updates test snapshots
-   `npm run lint` - runs EsLint
-   `npm run prettify` - runs Prettier

<br>

**Loading the extension in Google Chrome**

In [Google Chrome](https://www.google.com/chrome/), open up [chrome://extensions](chrome://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Google Chrome](https://i.imgur.com/ORuHbDR.png "Installed Extension in Google Chrome")


**References**

-   [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
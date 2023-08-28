---
title:  Interactive Web Demo ✨
author: Pratyay Banerjee
date:   2023-08-20
hero: ./images/coverx.jpg
excerpt: Building an Interactive Web Demo showcasing Touchless Interactions using the MediaPipe Machine Learning Library.

---

## **<u style="background-image: linear-gradient(135deg, #FFA800, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Preface</u>** ⚡

Join me in my Google Summer of Code 2023 ☀️ journey with [<u style="background-image: linear-gradient(135deg, #FFA800, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">TensorFlow</u>](https://www.tensorflow.org/) as I showcase an <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">Interactive Web Demo</em> highlighting <u>Touchless Interactions</u> using the [<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u>](https://developers.google.com/mediapipe)'s Machine Learning Library. 

Presenting MediaPipe **ATM Playground** ✨

<br/>

![primeHeader](./images/MainLogo_ATM.png "primeHeader")

<br/>

This project aims to test and demonstrate the capabilities of the new MediaPipe [Hand Landmarker](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.handlandmarker) task from MediaPipe Solutions. The task provides precise and accurate hand landmark detection, generating [21](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker#models) key points (i.e. hand landmarks) on the hand. 

![landmarkPoints](https://user-images.githubusercontent.com/48355572/263472875-e083c086-b3f2-4eb6-9433-61a431c688fd.png)

These landmarks are utilized in this interactive web app which enables users to perform contactless interactions with the interface using simple human gestures. Best experienced in well-lit environments. Ideal on larger screens.

<br/>

💡 <u>**For more information about the project, please visit here**</u>: [**Interactive Web Demos using the MediaPipe Machine Learning Library**](https://summerofcode.withgoogle.com/programs/2023/projects/pd9KgnNP). 

<!-- ![planofwork](./images/planofwork.png "flow") -->

---

### How the idea emerged 🤔

As technology hurtles forward, the aftermath of the COVID-19 pandemic has cast a new light on interaction. The awareness of touch-related risks is sharp, with <u style="background-image: linear-gradient(135deg, #f50c46, #f50c46); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">**80%**</u> of people viewing public touchscreens as **unhygienic** 🦠 

**Touchless gesture-based systems** hold the potential to reshape public spaces, workplaces, and industries. This technology's seamless and convenient nature aligns with the post-pandemic landscape. Touchless interactions are poised to become commonplace in sectors spanning <u style="background-image: linear-gradient(135deg, #0ba13f, #0ba13f); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">**ATMs**</u>, *airports*, *retail*, *healthcare*, *hospitality*, and beyond. 

**<mark>So I decided to take the first step!</mark>** That is how the idea for this project emerged: a response to the evolving expectations and demands of a world seeking safer, more intuitive, and advanced methods of interaction. By translating everyday hand gestures into a digital language, we can drive the wave of change toward touchless interactions. 

This project is a symbol of my commitment to embracing the future, harnessing innovation, and crafting a more hygienic, efficient, and enchanting way to connect with technology! ✨


<br/>

> **<u>DISCLAIMER</u>** 📢
>
> <br/>
>
> This blog aims to guide fellow developers in utilizing the MediaPipe library and implementing similar touchless interaction features in their projects. 
>
> <br/>
>
> **ⓘ** All data taken via input video feed is deleted after returning inference and is computed directly on the client side, making it [GDPR](https://gdpr-info.eu/) compliant.
>
> <br/>
>
> It's a comprehensive read, so buckle up and enjoy the ride! 🚀

<!-- ![hgr_block_diagram](https://github.com/google/mediapipe/assets/48355572/30043360-c8b4-4eaf-81ec-259aea659726) -->

<!-- <center style="color: #8fa387;"> ⬆️ Credits: Google Images </center><br/> -->

# 🏗️ <u style="background-image: linear-gradient(135deg, #FFA800, #FF6F00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">TUTORIAL</u>: The Interactive Web Demo 

![demo](https://user-images.githubusercontent.com/48355572/260842692-34bcee72-228a-4b24-84be-146c4973bd18.gif)


## **<u style="background-image: linear-gradient(135deg, #04db94, #3a81f2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Before we start</u>** ✋

[MediaPipe Solutions](https://developers.google.com/mediapipe/solutions/guide) lets you apply machine-learning (ML) solutions to your apps. It provides a framework that lets you configure prebuilt processing pipelines that deliver immediate, engaging, and useful output to users. 

> 📌 **NOTE:** You can even customize these solutions with [Model Maker](https://developers.google.com/mediapipe/solutions/model_maker) to update the default models. I've covered how to use a Model Maker in another blog of the GSoC series, which can be explored [🔗**<u style="color: #ed117b">here</u>**](https://blog.neilblaze.live/predicting-custom-gestures-for-interactive-web-demo/).

Hand landmarks detection is one of several ML vision tasks that MediaPipe Solutions offers. MediaPipe Tasks is available for Android, Python, and the <u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Web</u>. The MediaPipe [Hand Landmarker](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.handlandmarker) task lets you detect the landmarks of the hands in an image. This Task localizes key points of the hands and render visual effects over the hands. 

![info-cover](https://user-images.githubusercontent.com/48355572/263235343-4ef1202b-85da-4369-a6d4-55751c1a67ff.png)

> **ⓘ** If you want to delve deep into the specs of the model, feel free to explore the official docs, which can be found [here](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker#models). You can access the official *model card* for MediaPipe Hands (Lite/Full) [here](https://drive.google.com/file/d/1-rmIgTfuCbBPW_IFHkh3f0-U_lnGrWpg/view). It provides detailed information about the model. 
>
> ![HandLandmarkerModelArchitecture](https://user-images.githubusercontent.com/48355572/263537566-81711d1f-6a8d-4a3e-88c8-796dd4bb81fe.png)
>
> You can also refer to the official *research paper* on the same, available [🔗**<u style="color: #ed117b">here</u>**](https://arxiv.org/pdf/2006.10214.pdf).

<br/>

### What you'll learn 📝

- How to incorporate MediaPipe Hand Landmarker task in a web app.
- How to create a set of custom gestures for the Hand Landmarker task.
- How to optimize and precache the (same) web app for offline use.


### What you'll build 👨‍🔬
An interactive web app which enables users to perform contactless interactions with the interface using simple human gestures. 

> 💎 The ultimate product will be a web app that showcases a special ATM which showcases an <u style="background-image: linear-gradient(135deg, #0058b5, #0058b5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">augmented transaction panel, enabling users to interact accurately through intuitive gestures detected from an input video feed</u>. Users can perform essential operations directly through the interactive floating panel (on screen) via custom simple-to-use gestures, allowing them to experience the checkout process without the need for physical touch.


### What you'll need 🛠️

- A local development environement with Node.js installed (else a CodeSandbox account also works fine)
- A device with a web browser & webcam
- Basic knowledge of React.js, JavaScript, CSS, and HTML

> 📢 **NOTE:** To simply the process & to write less code, I've used [Tailwind CSS](https://tailwindcss.com/) & [Redux](https://redux.js.org/) in this project. If you're not familiar with these, you can refer to the official docs, which can be found [here](https://tailwindcss.com/docs) & [here](https://redux.js.org/introduction/getting-started). Most of the static assets have been handcrafted using [Figma](https://www.figma.com/), & royalty free audio files (from [Pixabay](https://pixabay.com/)) have been used for the sound effects.
>
> ![tech-stack](https://user-images.githubusercontent.com/48355572/263466060-0334a14c-559f-4538-ae28-06b1fadc3b5d.png)
>
> Installing Tailwind CSS with **Create React App** is pretty simple and straightforward. Head over to [this](https://tailwindcss.com/docs/guides/create-react-app) to get started! 🤩


![breaker](./images/dotted-bar-long.png "breaker")


## **<u style="background-image: linear-gradient(135deg, #04db94, #3a81f2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Get set up</u>** 🚀

To run the webapp code directly on browser, we can use [CodeSandbox](https://codesandbox.io/),​ a social development environment that lets you write & edit code, and can instantly reflect changes as you edit. To run it locally on your device (e.g. PC), you need to have [Node.js](https://nodejs.org/en/download) installed. 

> ⚠️ Webcam is essential & required for hand detection and gesture recognition. Please ensure your device has a functioning webcam.

To access the code on CodeSandbox, navigate to this [**CodeSandbox Template**](https://codesandbox.io/p/sandbox/quizzical-neco-svhglk). The webapp should instantly spin up in the preview panel. 


> 🛑 If your browser presents a dialog that asks you to grant access to the webcam, <u style="background-image: linear-gradient(135deg, #088c5c, #009688); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">grant permission</u> by clicking on “**Allow**”!
>
>![allowPerm](https://user-images.githubusercontent.com/48355572/263521491-57e804dc-35d6-4f09-b2ed-b8c171cb94c7.png)


![demo-csb](./images/codesandboxDemo.gif "demo-csb")

<center style="color: #8fa387;"> ⬆️ CodeSandbox Demo Running </center><br/><br/>


> 💡 For the best experience it's recommended to open the app in a new tab. You can do so by clicking it on this button ↓
>
> <br/>
>
> ![csb-instruction](https://user-images.githubusercontent.com/48355572/263407862-ec54d823-b677-497f-b557-27e659f4ded1.png)
>
> <br/>
>
>📥 You can also **<u style="background-image: linear-gradient(135deg, #ed26c5, #920be0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">`fork`</u>** it by clicking on **Fork** (as shown in the above image) or just by “<em style="color: #2a6ef5;">**`Ctrl + S`**</em>” (“<em style="color: #2a6ef5;">**`Cmd + S`**</em>” on Mac) to save a copy of the project in your CodeSandbox account. This will allow you to *edit* the code and *save* your changes.
>
> <br/>
>
> ⚠️ Don't make any changes to the <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">`.codesandbox`</em> congifuration files. It may break the app.


### Installation Process (local machine) 💻

To run the app on your local, open your terminal and follow these steps:

1. Clone the repository on your local machine:
    ```sh
    git clone https://github.com/googlesamples/mediapipe.git
    ```

2. Navigate into the project directory:
    ```sh
    cd tutorials/atm_playground
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm start
    ```

5. Open the project in your browser at “[**<u style="background-image: linear-gradient(135deg, #048f19, #7acc29); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">`http://localhost:3000`</u>**](http://localhost:3000)” to view the project.

![preview-port](https://user-images.githubusercontent.com/48355572/263465592-1b90c969-9421-49dd-8b69-32a247ebecfd.png)


> 🏷️ The primary objective to use [React](https://create-react-app.dev/) is to have <u>modularity</u>. In the end, when a build is created, the application's components, logic, and styles are bundled, minified, and optimized for production. This results in a *highly efficient* and *performant* web application that can be easily deployed to various platforms. 
>
> <br/>
>
> The use of React's component-based architecture allows for the development of complex UIs by breaking them down into smaller, reusable components, enhancing code maintainability and reusability.

The app is quite extensive in structure, so I'll be leading you through each file and folder, explaining the code as we go along. This approach ensures a comprehensive understanding of the application's architecture, enabling effective collaboration and development.

<br/>

##### 🦄 View a <mark>_live demo_</mark> in your browser [🔗**<u style="color: #ed117b">here</u>**](https://atm-playground.netlify.app). 

<br/> 
<br/>

### Architecture Overview 🧱

![ArchitectureOverview](https://user-images.githubusercontent.com/48355572/263560260-92721de0-bbe6-45c0-9211-3faa19af8eac.png)


### UX Flow 🎨

`youtube: https://www.youtube.com/watch?v=TPqtCiJI9Bs`

1️⃣ &nbsp; Once you open the app, you'll be greeted with a landing page. The app will ask for permission to access your webcam. Click on **Allow** to grant permission.

2️⃣ &nbsp; After enabling the webcam, necessary models load, and upon hand detection, a cursor appears on-screen. This cursor, controlled by hand gestures (for both hands), interacts with the interface, allowing operations through gesture-triggered interactions.

3️⃣ &nbsp; You'll be redirected to the login page where a walthrough is presented via app's information modal which essentially displays that the user can perform the following operations via gestures: 

  - **<u style="background-image: linear-gradient(135deg, #1ca63c, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">HOVER</u>** 🤚 : This is the base gesture. Use the cursor on the tip of your <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">index</em> finger to **hover over the elements** and perform specific operations.
  - **<u style="background-image: linear-gradient(135deg, #1ca63c, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">CLICK</u>** 👌 : This gesture is used to **click on the elements** you're currently hovering over.
  - **<u style="background-image: linear-gradient(135deg, #1ca63c, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">UNDO</u>** ✋ : This gesture **undoes the last action**, handy for accidental clicks on the ATM PIN Entry Panel. Alternatively, the "Backspace" key on your keyboard achieves the same.
  - **<u style="background-image: linear-gradient(135deg, #1ca63c, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">GRAB</u>** ✊ : This gesture **shows the app's information modal**, detailing available gesture actions and additional app details.

> 💡 You can also use the “**ESC**” key to navigate back to previous screens, on certain pages.

4️⃣ &nbsp; After logging in, you'll see the **ATM PIN Entry Panel**. Use the cursor to select numbers for your PIN. On entering the correct PIN, you'll access the main dashboard. Use the undo gesture to remove the last digit. Warnings may appear for empty/wrong PIN or trying to delete a non-existent digit.

5️⃣ &nbsp; Now you can see your Account dashboard, where you have multiple options to choose from. You can either check your account balance, withdraw cash, or even check your mini statement. You can also logout from the dashboard by pressing “**ESC**” key, which will redirect you to the login page.

  - Withdrawing cash is pretty simple. You can hover over the amount you want to withdraw and click on it. You'll be presented with a confirmation tab, where you can click on “**WITHDRAW**” to confirm the transaction. You can also click on “**CLEAR SELECTION**” to reset the chosen amount. Once the transaction is confirmed, you'll be presented with a success message. Click on “**ESC**” to return to the main dashboard.


### Folder Structure 📁


<!-- ```
📁 ATM-Playground
│
│ 
├── public                                    → Public Directory 
│   │
│   ├── MP_White.png                          → Static Assets (.png)
│   ├── MP_logo.png
│   ├── MainLogo_ATM.png
│   ├── click_div_inside.png
│   ├── click_indicator.png
│   ├── dialog_disclaimer.png
│   ├── goBack_icon.png
│   ├── grabModal.png
│   ├── logout_icon2.png
│   ├── mobileDetect.png
│   ├── nextModal.png
│   ├── user_details.png
│   │ 
│   ├── miniStatemnt.gif                      → Static Assets (.gif)
│   ├── shield_animated.gif
│   ├── sumercamppulse.gif
│   ├── bg_wave.gif
│   ├── bounce-arrow-right.gif
│   ├── initialModal.gif
│   │
│   ├── hand_landmarker.task                  → MediaPipe HandLandmarker TASK file
│   │
│   ├── index.html                            → Root HTML file
│   ├── manifest.json                         → App manifest file
│   ├── robots.txt                            → Exclusion Protocols
│   ├── favicon.png                           → App Favicon
│   │ 
│   ├── logoutMelody.mp3                      → Sound Effect clips (.mp3)
│   └── beepboopSound.mp3
│ 
│ 
├── src                                       → Root Folder
│   │
│   ├── App.jsx                               → React Component Heirarchy 
│   ├── index.css                             → CSS File (Fueled by Tailwind)
│   ├── index.jsx                             → Heart of React App
│   │
│   ├── components                            → Components Directory    
│   │   │   
│   │   ├── CustComponents                    → Custom Components Directory
│   │   │   │
│   │   │   ├── CombinedCard.jsx              → Card Component
│   │   │   ├── CursorTip.jsx                 → Cursor Component
│   │   │   ├── ModalC1.jsx                   → Modal Component
│   │   │   ├── TimeComponent.jsx             → Time & Date Component
│   │   │   └── UIalert.jsx                   → Notification Component
│   │   │   
│   │   ├── Landing.jsx                       → Landing Preview of App
│   │   ├── Kernel.jsx                        → Brain of App
│   │   └── DashboardUI.jsx                   → Main Dashboard of App
│   │
│   ├── redux                                 → Redux Directory
│   │   │   
│   │   ├── gesture                           
│   │   │   ├── gesture.forms.js              → Gesture Types
│   │   │   ├── gesture.handler.js            → Gesture Reducer
│   │   │   └── gesture.ops.js                → Gesture Actions
│   │   │
│   │   ├── root.handler.js                   → Root Reducer
│   │   └── store.js                          → Redux Store
│   │
│   ├── reportWebVitals.js                    → Performance Tracking File
│   ├── service-worker.js                     → Offline Caching Script
│   ├── serviceWorkerRegistration.js          → Service worker Setup
│   │
│   └── utils
│       └── allGesture.js                     → Gesture Definitions
│ 
│ 
├── tailwind.config.js                        → Tailwind Configuration File
├── postcss.config.js                         → PostCSS Configuration file
│ 
├── package-lock.json                         → NPM package lock
├── package.json                              → NPM package
│ 
│ 
├── README.md                                 → Documentation
│ 
└── LICENSE                                   → Apache 2.0 (© Tensorflow Authors 2023)
``` -->

![tree-main](https://user-images.githubusercontent.com/48355572/263391171-b678e8de-4b84-43a3-90ff-7d0f44d4a983.png)

> **ⓘ** This has the [_default_](https://create-react-app.dev/docs/folder-structure/) folder structure that comes with [Create React App](https://create-react-app.dev/).
>
> <br/>
>
> **NOTE:** An **<u style="background-image: linear-gradient(135deg, #ed26c5, #920be0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`.env`</u>** file has been created to set **`GENERATE_SOURCEMAP`** to False. Feel free to refer to [this](https://github.com/mebjas/html5-qrcode/issues/396#issuecomment-1067145379) to know more. It's completely optional, & is just there to remove minor dependency warnings.


Let's start delving deep into the project! 👨‍💻


First, let's take a look into the [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">package.json</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/package.json) file which is a [*configuration file*](https://docs.npmjs.com/cli/v9/configuring-npm/package-json) for [npm](https://npmjs.com/) that defines the dependencies for the project. This is what it looks like 👇

![package-json](https://user-images.githubusercontent.com/48355572/263386371-13fc5cc9-dccb-4622-b81c-4e47ff6731fb.png)

> **🧙 NOTE:** A [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">package-lock.json</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/package-lock.json) file is a JSON file *automatically generated* by npm when packages are installed, and it locks the specific versions of dependencies to ensure consistent and reproducible installations across different environments, enhancing dependency management and project stability. 


Let's focus on some of the important dependencies:



| Dependency                                                                                  | Description                                              |
|---------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [**@mediapipe/tasks-vision**](https://www.npmjs.com/package/@mediapipe/tasks-vision)        | Provides vision tasks for MediaPipe solutions.           |
| [**react**](https://www.npmjs.com/package/react)                                            | Library for building user interfaces.                    |
| react-dom                                                                                   | Methods for interacting with the DOM in React.           |
| [react-redux](https://www.npmjs.com/package/react-redux)                                    | React bindings for Redux state management.               |
| react-scripts                                                                               | Scripts and configurations for React app development.    |
| react-toastify                                                                              | Displays toast notifications in React apps.              |
| react-confetti                                                                              | Renders confetti animations for celebrations.            |
| [**redux**](https://www.npmjs.com/package/redux)                                            | State management library for applications.               |
| @reduxjs/toolkit                                                                            | Toolkit for efficient Redux development.                 |
| web-vitals                                                                                  | Measures user-centric web performance metrics.           |
| css-loader                                                                                  | Resolves and loads CSS files in webpack.                 |
| [**postcss**](https://www.npmjs.com/package/postcss)                                        | CSS post-processor for transforming styles.              |
| postcss-flexbugs-fixes                                                                      | Fixes flexbox bugs in PostCSS.                           |
| postcss-loader                                                                              | Loads and processes CSS files with PostCSS in webpack.   |
| [**tailwindcss**](https://www.npmjs.com/package/tailwindcss)                                | Utility-first CSS framework for rapid UI development.    |


🔮 To implement <u style="background-image: linear-gradient(135deg, #06bf22, #039e4c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Offline Caching</u>, I've used the [**Workbox**](https://developers.google.com/web/tools/workbox) library. Caching assets with a service worker can speed up repeat visits and provide offline support. [Workbox](https://developer.chrome.com/docs/workbox) makes this easy and is included in [React App](https://create-react-app.dev/) by default. Feel free to explore [this](https://web.dev/precache-with-workbox-react/) guide to know more!


| Dependency                       | Description                                                |
|----------------------------------|------------------------------------------------------------|
| workbox-background-sync          | Enables background synchronization.                        |
| workbox-broadcast-update         | Broadcasts updates to service workers.                     |
| workbox-cacheable-response       | Caches responses with strategies.                          |
| workbox-core                     | Core library for Workbox service workers.                  |
| workbox-expiration               | Manages expiration policies for cached resources.          |
| workbox-navigation-preload       | Enables navigation preload with Workbox.                   |
| workbox-precaching               | Precaches resources during service worker installation.    |
| workbox-range-requests           | Supports ranged requests in caching strategies.            |
| workbox-routing                  | Implements routing strategies for service workers.         |
| workbox-strategies               | Offers caching strategies for Workbox service workers.     |
| workbox-streams                  | Handles streams for caching with Workbox.                  |

Not to mention, this particular topic shall be discussed in detail later on. Let's move on to the next.

Beside the root [**HTML**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/public/index.html) file, the [**`public`**](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/public) directory contains static assets like images, favicon, and audio files. It also contains the MediaPipe [HandLandmarker TASK](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/public/hand_landmarker.task) file which is used during precaching for offline use. We'll cover this in detail later on.

![folderStructure](https://user-images.githubusercontent.com/48355572/263412006-dbbe7065-10c7-400a-997b-d75f84a72a3a.png)

> **ⓘ** The [`public`](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/public) directory additionally houses the [manifest](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/public/manifest.json) and [robots](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/public/robots.txt) files, which are used to provide metadata for the web app and to exclude certain files from being crawled by search engines, respectively.

**Let's navigate back to the top level:**

- The [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">tailwind.config.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/tailwind.config.js) file is used to configure [Tailwind CSS](https://tailwindcss.com/). It's a configuration file that allows to customize the default settings of Tailwind CSS. It's also used to add third-party plugins to Tailwind CSS. Feel free to explore [this](https://tailwindcss.com/docs/configuration) guide to know more!

- The [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">postcss.config.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/postcss.config.js) file is used to configure PostCSS. It's a configuration file that allows to customize the default settings of PostCSS. Feel free to surf [this](https://postcss.org/) to know more!

- The [“**`src`**”](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src) aka “**Source**” folder of the React app is the <u>main</u> source code directory containing React components, Redux logic, and utility files. Let's preview the structure once again:

```
📁./src                               ♦♦              𝐌𝐞𝐚𝐧𝐢𝐧𝐠
│                                      |
├── App.jsx                            |     → React Component Heirarchy 
├── index.css                          |     → CSS File (Fueled by Tailwind)
├── index.jsx                          |     → Heart of React App
│                                      |
│                                      |
├── components                         |     → Components Directory    
│   │                                  |
│   ├── CustComponents                 |     → Custom Components Directory
│   │   │                              | 
│   │   ├── CombinedCard.jsx           |     → Card Component
│   │   ├── CursorTip.jsx              |     → Cursor Component
│   │   ├── ModalC1.jsx                |     → Modal Component
│   │   ├── TimeComponent.jsx          |     → Time & Date Component
│   │   └── UIalert.jsx                |     → Notification Component
│   │                                  |
│   ├── Landing.jsx                    |     → Landing Preview of App
│   ├── Kernel.jsx                     |     → Brain of App
│   └── DashboardUI.jsx                |     → Main Dashboard of App
│                                      |
│                                      |
├── redux                              |     → Redux Directory
│   │                                  |
│   ├── gesture                        |   
│   │   ├── gesture.forms.js           |     → Gesture Types
│   │   ├── gesture.handler.js         |     → Gesture Reducer
│   │   └── gesture.ops.js             |     → Gesture Actions
│   │                                  |
│   ├── root.handler.js                |     → Root Reducer
│   └── store.js                       |     → Redux Store
│                                      |
│                                      |
├── reportWebVitals.js                 |     → Performance Tracking File
├── service-worker.js                  |     → Offline Caching Script
├── serviceWorkerRegistration.js       |     → Service worker Setup
│                                      |
│                                      |
└── utils                              |
    └── allGesture.js                  |     → Gesture Definitions
```

- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">App.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/App.jsx): This defines the main application component structure, rendering the <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`Kernel`</u>, <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`CursorTip`</u>, <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`UIalert`</u>, and <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`Landing`</u> components within a full-screen div with a gray background.


![app-index-jsx-css](https://user-images.githubusercontent.com/48355572/263413721-541e6131-4d59-402b-958c-ae117e52514a.png)

<center style="color: #8fa387;"> ⬆️ Click to Zoom </center><br/><br/>


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">index.css</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/index.css): This is the <u>global</u> CSS file which sets up Tailwind CSS utilities, hides scrollbars, enables smooth scrolling behavior, and provides special gradient hover effects for buttons in the DashboardUI component.


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">index.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/index.jsx): This renders the `App` component within a Redux <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`Provider`</u> for state management, wrapped in a strict mode, using <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`ReactDOM.createRoot`</u>. It also *registers a service worker* for *offline support* and *faster loading*, and (can) measure app performance using <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`reportWebVitals()`</u>.

> 🧐 Although we're not utilzing [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">reportWebVitals.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/reportWebVitals.js) in the app, but can help to capture various web performance metrics using the **Web-Vitals** library and passes them to a provided callback function for analysis and monitoring.


**Let's move into <u>CustComponents</u> 📂:**

Inside [components](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/components) directory, we have several components & a respective folder named “[**<u style="background-image: linear-gradient(135deg, #fa4002, #e802af); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">CustComponents</u>**](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/components/CustComponents)”, which essentially refers to *custom* components. 

> Let's start by looking into [**CustComponents**](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/components/CustComponents). 
>
> <br/>
>
>![CustComponents](https://user-images.githubusercontent.com/48355572/263480877-dd9e0a3c-5638-4293-86c3-deb904e09a66.png)


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">CombinedCard.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/CustComponents/CombinedCard.jsx): This functional component renders a customizable card element with different styles based on the provided *type*. It also checks for hover and click events to trigger specific actions.

> 💡 I've added inline comments for better readablilty.

```jsx
// `isHovering` is a function that checks if the card is being hovered over 
// by the user's hand.

// It's obtained from the `props.finger_locx` array, which contains the 
// coordinates of the user's hand. It calculates the position of the card 
// and compares it with the finger location to determine if it's hovering.

  const isHovering = () => {
    if (!props.finger_locx) return false;
    const pos = actionPose(cardRef.current);
    if (pos.x === 0) return false;

    const hpos = {
      x: window.innerWidth - props.finger_locx[8].x * window.innerWidth,
      y: props.finger_locx[8].y * window.innerHeight
    };

    if (
      pos.x <= hpos.x &&
      hpos.x <= pos.x + cardRef.current.offsetWidth - 12 &&
      pos.y <= hpos.y &&
      hpos.y <= pos.y + cardRef.current.offsetHeight - 12
    )
      return true;
    else return false;
  };


  // When the user hovers over the card and clicks, the component checks if 
  // the Redux store has the "CLICK" gesture and an onClick prop. 
  // If both are present, and the card was not clicked in the last second, 
  // it triggers the onClick function and updates the lastClicked state.

  if (isHovering() 
  && props.gesture === "CLICK" 
  && props.onClick 
  && Date.now() - 1000 > lastClicked) {
    props.onClick();
    setLastClicked(Date.now());
  }
```

> **ⓘ** An example preview of the **CombinedCard.jsx** component:
>
> ![cardT3](https://user-images.githubusercontent.com/48355572/263493485-b9072fee-2659-427d-b11d-6e5d4427b49d.png)
>
> <br/>
>
> 💡 It connects to the Redux store to access hand gesture data and utilizes the *connect* function from *react-redux*.
>
> <br/>
>
> A store holds the whole [state tree](https://redux.js.org/understanding/thinking-in-redux/glossary#state) of an application. The only way to change the state inside it is to dispatch an action on it. More info about **Redux Store** can be accessed [🔗**<u style="color: #ed117b">here</u>**](https://redux.js.org/api/store).


<br/>


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">CursorTip.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/CustComponents/CursorTip.jsx): This functional component renders the cursor element on the screen and displays a certain background color and border based on the provided gesture from the Redux store. The cursor's position is updated according to the <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`finger_locx`</u> data, and it disappears after a short delay.

```jsx
// We use `useEffect` to update the cursor's position & visibility on 
// the screen based on the `props.finger_locx` provided from the Redux store.
  useEffect(() => {
    if (!props.finger_locx) return;
  
    // Cursor's position and visibility are controlled via values in `props.finger_locx`.
    // We use index finger's x and y coordinates to calculate its position relative 
    // to the window size. When `props.finger_locx` is available, the cursor is 
    // displayed and disappears after 500 milliseconds using `setTimeout`.
    const cursorStyle = cursorRef.current.style;
    cursorStyle.display = "flex";
    cursorStyle.left = `${window.innerWidth - props.finger_locx[8].x * window.innerWidth}px`;
    cursorStyle.top = `${props.finger_locx[8].y * window.innerHeight}px`;
  
    const interval = setTimeout(() => {
      cursorStyle.display = "none";
    }, 500);
  
    return () => clearTimeout(interval);
  }, [props.finger_locx]);

```

> **ⓘ** An example preview of the **CursorTip.jsx** component:
>
> <br/> 
>
> ![GroupActions](https://user-images.githubusercontent.com/48355572/263494302-f4e1c1c8-6605-42fd-94f4-33cbf07e1756.gif)
>
> <br/>
>
> 💡 It connects to the Redux store to access hand gesture data and utilizes the *connect* function from *react-redux*.


<br/>


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">ModalC1.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/CustComponents/ModalC1.jsx): This functional component renders a modal with different content based on the <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`showModal`</u> and <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`showModal2`</u> props. It utilizes the <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`handleModalInteraction`</u> prop to handle click events when the modal is displayed.

```jsx
// minified version
const ModalC1 = ({ showModal, showModal2, handleModalInteraction }) =>
  showModal ? (
    <div className="fixed top-0 ... bg-black" onClick={handleModalInteraction}>
      <img src="./initialModal.gif" 
      alt="" 
      className="w-2.5/5 ... pointer-events-none" />
    </div>
  ) : showModal2 ? (
    <div className="fixed top-0 ... bg-black" onClick={handleModalInteraction}>
      <img src="./nextModal.png" 
      alt="" 
      className="w-3/5 ... pointer-events-none" />
    </div>
  ) : null;
```

> **ⓘ** An example preview of the **ModalC1.jsx** component:
>
> <br/> 
>
> ![ModalExamplePreview](https://user-images.githubusercontent.com/48355572/263495290-4457a1c2-3afc-410b-9f2b-c7842ff335e4.png)


<br/>


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">TimeComponent.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/CustComponents/TimeComponent.jsx): This functional component displays the current time along with day information.

```jsx
// State for storing the formatted time
const [time, setTime] = useState(getFormattedTime());

// Update the time every second using the useEffect hook
useEffect(() => {
  // Set up an interval to update the time
  const intervalId = setInterval(() => {
    const formattedTime = getFormattedTime();
    setTime(formattedTime);
  }, 1000);

  // Clear the interval when the component is unmounted
  return () => clearInterval(intervalId);
}, []);

// Initialize day name, month, and day using the useEffect hook
useEffect(() => {
  const today = new Date();
  const dayIndex = today.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Set day name, month, and day based on the current date
  setDayName(days[dayIndex]);
  setMonth(monthNames[today.getMonth()]);
  setDay(String(today.getDate()).padStart(2, "0"));
}, []);

// format the current time as "hh:mm:ss"
function getFormattedTime() {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
```

> **ⓘ** This Date & Time component is hugely inspired by [Google Meet](https://meet.google.com/)'s UI! 😁
>
> <br/>
>
> ![google-meet](https://user-images.githubusercontent.com/48355572/263468713-9cd1c2ad-d9c6-4b3a-a1af-f6f7feb090ea.png)


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">UIalert.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/CustComponents/UIalert.jsx): This functional component displays different alerts based on the <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`gesture`</u>, <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`finger_locx`</u>, and <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`loaded`</u> props passed to it. It also listens for a Backspace key press event and triggers the “<u style="background-image: linear-gradient(135deg, #3966fa, #120ff2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">BACKSPACE</u>” gesture accordingly.

```jsx
// This function takes a msg argument and returns a corresponding message 
// based on the provided msg. It maps different gestures to appropriate 
// messages like "Hovering 🤚," "Grabbing ✊," "Undo Input ✋," or "Clicking 👌".
const messageFrom = (msg) => {
  if (msg === "HOVER") return "Hovering 🤚";                // Hovering Alert
  else if (msg === "GRAB") return "Grabbing ✊";            // Modal-preview Alert
  else if (msg === "BACKSPACE") return "Undo Input ✋";     // Undo Input Alert
  else return "Clicking 👌";                                // Clicking Alert
};


// Conditional Rendering of Alerts
if (!loaded) {
  return null;
} else if (status === "no") {     // status is "no" and loaded is "true"
  // ... (rest of the code)
} else if (status === "GRAB") {   // status is "GRAB" and loaded is "true"
  // ... (rest of the code)
} else {                                         
  // ... (rest of the code)
}


// The component is connected to the Redux store using `connect`, 
// mapping `gesture`, `finger_locx`, and `loaded` states to props.
const PropMapFromState = (state) => ({
  gesture: state.hand.gesture,
  finger_locx: state.hand.finger_locx,
  loaded: state.hand.loaded,
});
```

> **ⓘ** An example preview of the **UIalert.jsx** component can inspected in the “**<em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">Alert</em>**” of the **CursorTip.jsx** preview, which can be found above!
>
> <br/>
> 
> 💡 It connects to the Redux store to access hand gesture data and utilizes the *connect* function from *react-redux*.



**Let's come back to the <u>components</u> directory 📂:**



- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Landing.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/Landing.jsx): This functional component handles the initial loading of the application, checks camera permission, and renders content based on the permission status and loaded state from the Redux store. If permission is granted and the application is <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`loaded`</u>, it renders the main user interface provided by the [<u style="background-image: linear-gradient(135deg, #3966fa, #120ff2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`DashboardUI`</u>](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/DashboardUI.jsx) component.

```jsx
// Two states declared using `useState` hook: `loaded` is initialized with value
// of `props.loaded` & `cameraPermissionAllowed` is initialized with `false`
  const loaded=props.loaded;
  const [cameraPermissionAllowed, setCameraPermissionAllowed] = useState(false);

  // `useEffect` hook is used to check if the camera permission is granted or not
  // and set the state of `cameraPermissionAllowed` accordingly

  useEffect(() => {
    const checkCameraPermission = async () => {
      try {
        // Request for camera permission
        await navigator.mediaDevices.getUserMedia({ video: true }); 
        // Set state of `cameraPermissionAllowed` to `true`
        setCameraPermissionAllowed(true);  
      } catch (error) {
        console.error("Camera permission not allowed:", error);
        setCameraPermissionAllowed(false);
      }
    };

    checkCameraPermission(); // Check camera permission when component is mounted

    // Set a timer of 5.5 seconds to call the `putInitialze`
    const timer = setTimeout(() => {
      props.putInitialze();
    }, 5500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);


// when component is unmounted 
if (!loaded) {
  return (
    // ... (rest of the code)
  );
} else {
  return <DashboardUI />;
}

// ... (rest of the code)

// The `Landing` component is exported using the `connect` from `react-redux`.
export default connect(PropMapFromState, mapDispatchToProps)(Landing);
```

> **ⓘ** An example preview of the **Landing.jsx** component:
>
> <br/>
>
> ![LandingPreview](https://user-images.githubusercontent.com/48355572/263494678-20dcfdbe-84ae-413c-a544-992a1e566c26.gif)
>
> <br/>
>
> 💡 It connects to the Redux store to access hand gesture data and utilizes the *connect* function from *react-redux*.




- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">Kernel.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/Kernel.jsx): This is the key functional component that handles the real-time hand tracking and gesture recognition using the Mediapipe library.

> 🧠 Technically, this is the **Brain** of the app & fuels all the magic that you can see!
>
> <br/>
>
> **ⓘ** Also, "[@mediapipe/tasks-vision](https://www.npmjs.com/package/@mediapipe/tasks-vision)" comes with the [<em style="color: #2a6ef5">**`DrawingUtils`**</em>](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.drawingutils#drawingutils_class) class out of the box, which easily allows to skip importing "[@mediapipe/drawing_utils](https://www.npmjs.com/package/@mediapipe/drawing_utils)" to draw the Hand Landmarks & Connectors (as implemented in [this](https://codepen.io/mediapipe-preview/pen/gOKBGPN)). This improves the overall inference speed!

1️⃣ &nbsp; First we import the <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u> **tasks-vision** package along with other necessary dependencies:

```jsx
// import the MediaPipe tasks-vision package
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

// React & Redux
import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

// Gesture Actions
import { putGesture, putFingLock, putInitialze } from '../redux/gesture/gesture.ops';     
import { rightHandGestures, leftHandGestures } from '../utils/allGesture';
```

2️⃣ &nbsp; Define the Kernel Component:

```jsx
// here three props are taken as input → putGesture, putFingLock, and putInitialze. 
// We also create a canvasRef using the useRef hook to reference the canvas element.    
function Kernel({ putGesture, putFingLock, putInitialze }) {
  const canvasRef = useRef(null);
  // ... (rest of the code)
```

3️⃣ &nbsp; Then inside main function, define the keypoints and then draw the connectors:

```jsx
// `useEffect` is used  to detect hand landmarks and draw them on 
// the canvas using the `drawLandmarksAndConnectors` function.
  useEffect(() => {
    const drawLandmarksAndConnectors = (landmarks, ctx) => {

      // Draw keypoints
      const connections = [
        // ... (rest of the code)
      ];

      ctx.strokeStyle = 'white'; // define stroke color
      ctx.lineWidth = 4; // define stroke width

      // draw connectors
      for (const connection of connections) {
        const [index1, index2] = connection;

        // calculate the pixel positions of the landmarks using the 
        // normalized x and y values and draw the lines using ctx.stroke()      
        ctx.beginPath();
        // ... (rest of the code)
        ctx.stroke();
      }

      // Draw landmarks
      ctx.fillStyle = 'teal';
      for (const landmark of landmarks) {
        ctx.beginPath();
        // ... (rest of the code)
        ctx.fill();
      }
    };
```

4️⃣ &nbsp; Initialize the Task (with local-load and failsafe enabled):

```jsx
    const loadModelAndStartDetection = async () => {
      // load from CDN (Mandatory → else CORS blocks all internal requests)
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm'
      );
      
      // create an instance of the HandLandmarker class with the specified options
      let handLandmarker;
      try {
        // Load hand_landmarker task from local path (speeds up loading)
        // create an instance of the HandLandmarker class with the specified options    
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              '/hand_landmarker.task',      // Local Fetch
            delegate: 'GPU',                // use GPU for inference
          },
          runningMode: 'IMAGE' || 'VIDEO',  // Image first then video (always!)
          numHands: 1,
          minHandDetectionConfidence: 0.6,
          minHandPresenceConfidence: 0.6,
          // minHandTrackingConfidence: 0.5,      // this is set by default
        });
      } // ... (rest of the code)

        try {
          // Load hand_landmarker task from CDN as fallback
          handLandmarker = await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
              // Tasks-Vision itself has hand-landmarker → https://shorturl.at/kwQX1
              modelAssetPath: 'hand_landmarker.task', 
          // ... (rest of the code // Similar as above)
        } catch (cdnError) {
          // ... (rest of the code)
          return;
        }
      }
```

> **ⓘ** It's optional to set the device delegate to run the MediaPipe pipeline. If the delegate is not set, the default delegate CPU is used. Here GPU is used for inference, which is faster than CPU. Feel free to customize the [configuration options](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/web_js#configuration_options) to achieve the best performance.


5️⃣ &nbsp; Start the **camera** to enable real-time hand tracking, detect the **handedness**, & return **keypoints** on canvas:

```jsx
      // ... (continued from above)
      const cnvs = canvasRef.current;  // cnvs variable is used to reference the canvas element
      const ctx = cnvs.getContext('2d');  // ctx → 2D rendering context for the canvas
      const vidElm = document.createElement('video'); // newly created video element

      // start the camera and detect hand landmarks & continuously update the canvas with the video stream
      const startCamera = async () => {
        try {
          // request access for video stream
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false }); 
          vidElm.srcObject = stream; // set the video stream as the source of the video element
          // ... (rest of the code)
          await vidElm.play(); // awaits the video to start playing

          const detectLandmarks = async () => {
            try {
              // detect hand landmarks from video stream, & store in results
              const results = handLandmarker.detect(vidElm); 
              // extract the landmarks from the results
              const landmarks = results?.landmarks; 
              // check if the detected hand is right/left
              const handType = (results?.handednesses[0]?.[0]?.categoryName) === "Left" ? "Right" : "Left";    

              // Clear canvas before drawing (if landmarks are detected)
              ctx.clearRect(0, 0, cnvs.width, cnvs.height);

              if (landmarks && landmarks.length > 0) {
                ctx.drawImage(vidElm, 0, 0, cnvs.width, cnvs.height); // Draw video frame

                if (handType === 'Right') {
                  // ... (rest of the code)
                } else if (handType === 'Left') {
                  // ... (rest of the code)
                }
                putFingLock(landmarks[0]);
              } 
              else {
                // If hand landmarks are not detected, still draw the video frame (IMPORTANT!)
                ctx.drawImage(vidElm, 0, 0, cnvs.width, cnvs.height);
              }
            requestAnimationFrame(detectLandmarks);
          };
          detectLandmarks(); 
        } // ... (rest of the code)
      };
      startCamera(); // start the camera
    };
    loadModelAndStartDetection();
    // ensure that detection and canvas rendering are updated when the gesture & finger state updates
  }, [putGesture, putFingLock, putInitialze]);  
```

6️⃣ &nbsp; Adjust the canvas size:

```jsx
useEffect(() => {
  const setCanvasSize = () => {
    // Set canvas size...
  };

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  return () => {
    window.removeEventListener('resize', setCanvasSize);
  };
}, []);
```

7️⃣ &nbsp; Render the Canvas:

```jsx
return (
  <div className="absolute ... filter-grayscale-80 opacity-10">
    <canvas className="transform scale-x-minus-1" ref={canvasRef} />
  </div>
);
```

8️⃣ &nbsp; Dispatch the actions:

```jsx
const mapDispatchToProps = {
  putGesture,
  putFingLock,
  putInitialze,
};

export default connect(null, mapDispatchToProps)(Kernel);
```

> 💡 It connects to the Redux store to access hand gesture data and utilizes the *connect* function from *react-redux*.


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">DashboardUI.jsx</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/components/DashboardUI.jsx): This is the central component of the web app that's responsible for rendering and managing the user interface of the dashboard. It combines various UI elements, user interactions, and state management to provide a seamless and interactive user experience.

1. First we import the necessary dependencies:
    ```jsx
    // we import the necessary dependencies
    import { useState, useEffect, useRef } from "react";          // React Hooks
    import { connect } from "react-redux";                        // Redux

    import Confetti from "react-confetti";                        // Confetti      
    import { ToastContainer, toast } from 'react-toastify';       // Toast Notifications    
    import 'react-toastify/dist/ReactToastify.css';

    import CombinedCard from "./CustComponents/CombinedCard";     // Card Component
    import ModalC1 from "./CustComponents/ModalC1";               // Modal Component
    import TimeComponent from "./CustComponents/TimeComponent";   // Time Component

    // Import audio files 
    const logoutSound = "/logoutMelody.mp3";
    const beepboopSound = "/beepboopSound.mp3"; 
    ```

2. Create custom hooks & utility functions:
    ```jsx
    // utility function to generate a string of '*' of length 'len'
    // generates a masked representation of the PIN based on the length of the PIN
    const pinGen = (len) => "*".repeat(len); 
    // Custom Hook to handle modal interactions and keydown events
    const useModalInteractions = () => {
      // ... (rest of the hook implementation)
      return { showModal, showModal2, handleModalInteraction };
    };

    // Custom Hook to handle ESC keydown events
    const useEscKeyRedirect = (
      redirectFunc, 
      isCase3, 
      isCase4, 
      playAudioOnRedirect, 
      defPageNo, 
      resetAccountBalance, 
      resetPin) => {
      // ... (rest of the hook implementation)
    };

    // ... (check repository for the code & add here ... )
    // Functions for Toast Display Logic, PIN Entry and Validation, 
    // Amount Selection and Withdrawal, PIN Submission and Input Handling, etc.
    // ... 
    ```

3. Define the DashboardUI component & render the UI accordingly:
    ```jsx
    function DashboardUI({ gesture }) {
      // ... (rest of the component implementation)
      switch (pageNo) {
        case 1:             // Login Page
          return (
            <div id="panel-ui" className="absolute top-0 ... items-center ... p-10">
              <ToastContainer />
              <ModalC1
                showModal={showModal}
                showModal2={showModal2}
                handleModalInteraction={handleModalInteraction}
              />
              {/* ... (rest of the JSX code) */}
            </div>
          );
        case 2:             // ATM PIN Entry Page
          return (
            <div id="panel-ui" className="absolute top-0 ... flex-col ... p-10">         
              <ToastContainer />
              {/* ... (rest of the JSX code) */}
            </div>
          );
        case 3:             // Account Dashboard Page
          return (
            <div id="panel-ui" className="absolute top-0 ... flex-col ... p-10">
              <ToastContainer />
              {/* ... (rest of the JSX code) */}
            </div>
          );
        case 4:             // Fast Cash Page
          return (
            <div id="panel-ui" className="absolute top-0 ... flex-col ... p-10">
              <ToastContainer />
              {/* ... (rest of the JSX code) */}
            </div>
          );
        default:
          return <></>;
      }
    }
    ```

4. Dispatch the actions & export:
    ```jsx
    const PropMapFromState = (state) => ({
      gesture: state.hand.gesture,
    });

    export default connect(PropMapFromState)(DashboardUI);
    ```

> **ⓘ** Different case-wise previews of the **Dashboard.jsx** component:
>
> ![DashboardPreview](https://user-images.githubusercontent.com/48355572/263495871-d66d43af-9ed5-4bc5-ba95-3c77482935f3.png)
>
> <br/>
>
> 💡 It connects to the Redux store to access hand gesture data and utilizes the *connect* function from *react-redux*. On certain pages, users have the option to use the "Backspace" and "ESC" keys to initiate particular actions, allowing them to "undo" or "navigate back" to previous screens. 

<br/>

✅ **Now we're finally done with the React components. Let's move on to the Redux store.**

Inside the [**`redux`**](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/redux) directory, we have one subdirectoriy: <u style="background-image: linear-gradient(135deg, #ff33be, #f533ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`gesture`</u> & rest we have the Redux Reducer & the Store. 

> **ⓘ** Architecture of [**Redux**](https://redux.js.org/):
>
> ![reduxArch](https://user-images.githubusercontent.com/48355572/263496243-560d77f6-33ff-49ce-b88a-0cb76762e79d.png)

Let's start with the [<u style="background-image: linear-gradient(135deg, #ff33be, #f533ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">gesture</u>](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/redux/gesture) directory.

- [**<u style="background-image: linear-gradient(135deg, #f0580c, #f0910c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">gesture.forms.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/redux/gesture/gesture.forms.js): It define action types used in the Redux store for gestures.

```js
// Export action types used in the Redux store
export const GEST_ASSIGN = "GEST_ASSIGN";
export const FINLOCK_ASSIGN = "FINLOCK_ASSIGN";
export const INIT_ASSIGN = "INIT_ASSIGN";
```

- [**<u style="background-image: linear-gradient(135deg, #f0580c, #f0910c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">gesture.handler.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/redux/gesture/gesture.handler.js): It defines the initial state of the Redux store and the reducer function that handles the state updates.

```js
// import action types
import { GEST_ASSIGN, FINLOCK_ASSIGN, INIT_ASSIGN } from "./gesture.forms";

// define `initialState` object for Redux store, containing these three props
const initialState = {
  gesture: null, finger_locx: null, loaded: false,
};

// `state` = current state of Redux store ; `action` i= dispatched action
const gestureHandler = (state = initialState, action) => { 
  switch (action.type) {
    case GEST_ASSIGN:
      return {
        ...state,
        gesture: action.payload,
      };
    case FINLOCK_ASSIGN:
      return {
        ...state,
        finger_locx: action.payload,
      };
    case INIT_ASSIGN:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

// export the reducer function
export default gestureHandler;
```

- [**<u style="background-image: linear-gradient(135deg, #f0580c, #f0910c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">gesture.ops.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/redux/gesture/gesture.ops.js): It defines the action creators that dispatch actions to the Redux store.

```js
// Action creator functions to create actions with specific types and payload data to dispatch to the reducer.
// Action creators are functions that return an action object with a type and payload property.

// import action types
import { GEST_ASSIGN, FINLOCK_ASSIGN, INIT_ASSIGN } from "./gesture.forms";

export const putGesture = (gesture) => ({
  type: GEST_ASSIGN,
  payload: gesture,
});

export const putFingLock = (locs) => ({
  type: FINLOCK_ASSIGN,
  payload: locs,
});

export const putInitialze = () => ({
  type: INIT_ASSIGN,
});
```

Let's move back to the [**<u>`redux`</u>**](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/redux) directory 📁:

- [**<u style="background-image: linear-gradient(135deg, #f0580c, #f0910c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">root.handler.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/redux/root.handler.js): It combines the reducers from different modules and creates the root reducer for the Redux store.

```js
import { combineReducers } from "redux";
import gestureHandler from "./gesture/gesture.handler";

export default combineReducers({
  hand: gestureHandler,
});
```

- [**<u style="background-image: linear-gradient(135deg, #f0580c, #f0910c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">store.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/redux/store.js): It creates the Redux store using the root reducer and exports it.

```js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.handler";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
```

✅ Now we're done with the [Redux](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/redux) part. Let's move on to the [<u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**`utils`**</u>](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src/utils) directory.

- [**<u style="background-image: linear-gradient(135deg, #8d49d1, #fa4a0a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">allGesture.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/utils/allGesture.js): It defines the different gestures that the app can recognize for both the left and right hands. This is very important for the app to work properly. Let's take a look at the code:

```js
// This is the logic for the gesture recognition.
// Takes in parameter input from MP hand_landmarker which is an array of 
// 21 landmarks representing the coordinates of hand keypoints

// Function for right hand gestures
function rightHandGestures(landmarks) {
  const [thumbIsOpen, indexIsOpen, middleIsOpen, ringIsOpen, littleIsOpen] = [   // Values assigned to corresponding fingers 
      landmarks[3].x < landmarks[2].x && landmarks[4].x < landmarks[2].x,
      landmarks[7].y < landmarks[6].y && landmarks[8].y < landmarks[6].y,
      landmarks[11].y < landmarks[10].y && landmarks[12].y < landmarks[10].y,
      landmarks[15].y < landmarks[14].y && landmarks[16].y < landmarks[14].y,
      landmarks[19].y < landmarks[17].y && landmarks[18].y < landmarks[17].y
    ];
  
    // Above is set to true by default if x-coordinate of finger tip is less than x-coordinate of finger base (else false)
    // Reference: https://github.com/google/mediapipe/blob/master/docs/solutions/hands.md#hand-landmark-model
  
    if (!thumbIsOpen && !indexIsOpen && !middleIsOpen && !ringIsOpen && !littleIsOpen) {
      return "GRAB";
    } 
    // Euclidean distance between the tip of the index finger and the tip of the thumb
    else if (Math.sqrt(Math.pow(landmarks[4].x - landmarks[8].x, 2) + Math.sqrt(Math.pow(landmarks[4].y - landmarks[8].y, 2))) < 0.25) {  
      return "CLICK";
    } 
    else if (thumbIsOpen && indexIsOpen && middleIsOpen && ringIsOpen && littleIsOpen && landmarks[0].y > landmarks[12].y) {
      return "BACKSPACE";
    } 
    else {
      return "HOVER";
    }
}

// Function for left hand gestures
function leftHandGestures(landmarks) {
  const [thumbIsOpen, indexIsOpen, middleIsOpen, ringIsOpen, littleIsOpen] = [   // Values assigned to corresponding fingers 
      landmarks[3].x < landmarks[2].x && landmarks[4].x < landmarks[2].x,
      landmarks[7].y < landmarks[6].y && landmarks[8].y < landmarks[6].y,
      landmarks[11].y < landmarks[10].y && landmarks[12].y < landmarks[10].y,
      landmarks[15].y < landmarks[14].y && landmarks[16].y < landmarks[14].y,
      landmarks[19].y < landmarks[17].y && landmarks[18].y < landmarks[17].y
    ];
  
    if (!thumbIsOpen && !indexIsOpen && !middleIsOpen && !ringIsOpen && !littleIsOpen) {
      return "GRAB";
    }
    // Euclidean distance between the tip of the index finger and the tip of the thumb 
    else if (Math.sqrt(Math.pow(landmarks[4].x - landmarks[8].x, 2) + Math.sqrt(Math.pow(landmarks[4].y - landmarks[8].y, 2))) < 0.25) {        
      return "CLICK";
    } 
    else if (thumbIsOpen && indexIsOpen && middleIsOpen && ringIsOpen && littleIsOpen && landmarks[0].y > landmarks[12].y) {
      return "HOVER";
    } 
    else {
      return "BACKSPACE";
    }
}

// Export the functions (for both left and right hand gestures)
export { rightHandGestures, leftHandGestures };
```

These functions take an array of hand landmarks as input and analyze the positions of (hand) keypoints to determine the gesture being performed by either the right or left hand. Let's explain this in detail.

> ⚙️ In my previous blog post [*Predicting Custom Gestures*](https://blog.neilblaze.live/predicting-custom-gestures-for-interactive-web-demo), we explored creating a custom model using MediaPipe [Model Maker](https://developers.google.com/mediapipe/solutions/model_maker) for predicting and classifying hand gestures in web demos. Now, we'll use the **_`HandLandmarker`_** task instead of **_`GestureRecognizer`_** to streamline the process and reduce inference time. Detailed discussion follows below.

For now let's consider any of the two hands. In this section of the code:

```js
const [thumbIsOpen, indexIsOpen, middleIsOpen, ringIsOpen, littleIsOpen] = [
  landmarks[3].x < landmarks[2].x && landmarks[4].x < landmarks[2].x,
  landmarks[7].y < landmarks[6].y && landmarks[8].y < landmarks[6].y,
  landmarks[11].y < landmarks[10].y && landmarks[12].y < landmarks[10].y,
  landmarks[15].y < landmarks[14].y && landmarks[16].y < landmarks[14].y,
  landmarks[19].y < landmarks[17].y && landmarks[18].y < landmarks[17].y
];
```

We are calculating whether the five respective fingers on a detected hand are "open" or "closed" based on the positions of their landmarks. The landmarks represent specific points on the hand when detected via the <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">MediaPipe</u> [Hand Landmarker](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker) task.

Here's the breakdown of what's happening:

1️⃣ &nbsp; “[**`landmarks`**](https://developers.google.com/mediapipe/api/solutions/js/tasks-vision.handlandmarkerresult#handlandmarkerresultlandmarks)” represents an array of landmarks detected on the hand. Each landmark is a point with `x` and `y` coordinates, indicating its position in the 2D (Cartesian) space of the image. 

![HandSpec_Landmarker](https://user-images.githubusercontent.com/48355572/263504220-c2ed243e-87b3-4ff3-8668-ca273431373e.png)

<center style="color: #8fa387;"> ⬆️ Click to Zoom </center><br/><br/>

2️⃣ &nbsp; The code uses these landmarks to determine whether specific fingers are open or closed: 

   - For the thumb (`thumbIsOpen`), it checks if the `x` coordinate of the tip (`landmarks[4]`) and the base (`landmarks[2]`) of the thumb are both on the same side (i.e., the tip is to the left of the base). If they are on the same side, the thumb is considered open.
   - Similar comparisons are made for the index, middle, ring, and little fingers, checking if their `y` coordinates of their tips and bases are on the same side. If they are on the same side, the respective finger is considered open.


3️⃣ &nbsp; The variables <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">`thumbIsOpen`</em>, <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">`indexIsOpen`</em>, <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">`middleIsOpen`</em>, <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">`ringIsOpen`</em>, and <em style="color: #2a6ef5; font-family: 'Trebuchet MS', sans-serif;">`littleIsOpen`</em> will be either <u style="background-image: linear-gradient(135deg, #65d126, #65d126); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`true`</u> or <u style="background-image: linear-gradient(135deg, #fc3096, #fc3096); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`false`</u> based on whether the corresponding fingers are open or closed.

![openThumbLogic](https://user-images.githubusercontent.com/48355572/263503007-7c5cc4ff-81bf-4a33-b2ca-719b388fecc7.png)

<center style="color: #8fa387;"> ⬆️ Click to Zoom </center><br/><br/>

Next, we continue to determine the type of gesture being performed based on the calculated values. Here's the explanation for the remaining parts of the code (for right hand exclusively):

```js
// if all fingers are closed
if (!thumbIsOpen && !indexIsOpen && !middleIsOpen && !ringIsOpen && !littleIsOpen) {
  return "GRAB";  // Action → Preview Information Modal
} 

// Euclidean distance between the tip of the index finger and the tip of the thumb
else if (Math.sqrt(Math.pow(landmarks[4].x - landmarks[8].x, 2) + 
        Math.sqrt(Math.pow(landmarks[4].y - landmarks[8].y, 2))) < 0.25) {
        return "CLICK";   // Action → Click
} 

// if all fingers are open and the center axis of the hand is rotated 
// 180 degrees with respect to the camera
else if (thumbIsOpen && indexIsOpen && middleIsOpen && 
         ringIsOpen && littleIsOpen && landmarks[0].y > landmarks[12].y) {
        return "BACKSPACE";   // Action → Undo last input
} 

// Default case
else {
  return "HOVER";   // Action → Hover
}
```

![landmarkExtraction](https://user-images.githubusercontent.com/48355572/263534264-60bb146f-9d6f-4500-8924-599acf2a94fe.png)

<center style="color: #8fa387;"> ⬆️ Landmarks Projection on 2D Cartesian Space </center><br/><br/>

1️⃣ &nbsp; The first condition checks if all fingers (<em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">thumb</em>, <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">index</em>, <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">middle</em>, <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">ring</em>, & <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">little</em> finger) are closed. If all fingers are closed i.e. “✊”, the gesture is considered a "<mark>**GRAB**</mark>".

2️⃣ &nbsp; The second condition calculates the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) between the tip of the <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">index</em> finger (`landmarks[8]`) and the tip of the <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">thumb</em> (`landmarks[4]`). If this distance is less than 0.25 (which indicates that the tips are very close, i.e. “👌”), the gesture is considered a "<mark>**CLICK**</mark>". This condition represents a pinch-like motion between the thumb and index finger, simulating a click.

![ClickExplanation](./images/ClickExplanationHandLandmarker.gif)

<center style="color: #8fa387;"> ⬆️ Pinch-in or Click to Zoom </center><br/><br/>

> **<u style="background-image: linear-gradient(135deg, #030066, #580096); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">So, what's happening exactly?</u>** 🤔
>
><br/>
>
> 🟢 In the provided code, we initially calculate the difference in the *x-coordinates* of the two landmarks, **`landmarks[4].x - landmarks[8].x`**, and similarly compute the difference in *y-coordinates* **`landmarks[4].y - landmarks[8].y`**. We then squares both differences using **`Math.pow()`** to get their squares. Finally, we add the squared ***x** and **y** differences together, take the square root using **`Math.sqrt()`**, and compare the result with a fixed constant, which is set to **0.25**.
>
> <br/>
>
> 🟢 If the computed distance turns out to be less than this threshold of 0.25, it means the two landmarks are close together, and hence we yield "**CLICK**". This indicates that it's is recognizing a hand gesture similar to a click or tap ("👌"), where the "Thumb" and "Index finger" are close enough to each other to signify a clicking action. The selection of the threshold value, 0.25, is arrived at through empirical experimentation, *involving multiple trials* aimed at achieving optimal accuracy and reliable performance.

3️⃣ &nbsp; The third condition checks if all fingers are open and the right-hand palm is faced backwards towards the camera, i.e. “✋”, where it is vertically flipped along the mid axis (i.e. projection on y-axis) of the right hand, with respect to the tip of the <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">middle</em> finger (`landmarks[12]`) & <em style="color: #a340ff; font-family: 'Trebuchet MS', sans-serif;">wrist</em> (`landmarks[0]`). If this condition is met, the gesture is considered a "<mark>**BACKSPACE**</mark>". 

4️⃣ &nbsp; If none of the above conditions are met, the gesture is considered a "<mark>**HOVER**</mark>". This is the default case, where none of the specific gestures (GRAB, CLICK, BACKSPACE) are detected, & all the fingers (of right hand) are open i.e. “🤚”. 


The functions return strings representing different gestures such as "GRAB", "CLICK", "BACKSPACE", or "HOVER". These strings are then used to update the Redux store. 

> **🧙 NOTE:** We use the [handedness](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/web_js#handle_and_display_results) from MediaPipe Hand Landmarker to determine which hand (Left/Right) is being used and then call the appropriate function to determine the gesture. As the left hand mirrors the right hand, the logic for "BACKSPACE" and "HOVER" gestures is reversed for the left hand compared to the right hand.


Let's move back to the “[**`src`**](https://github.com/googlesamples/mediapipe/tree/main/tutorials/atm_playground/src)” directory. It can be noticed that there are two more files that we haven't discussed yet. Without any further ado, let's take a look at them.

- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">service-worker.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/service-worker.js): This essentially configures the caching behavior, routing, and handling of requests for our Web App, enhancing its performance and offline capabilities.

1. The service worker imports necessary modules from [Workbox](https://developer.chrome.com/docs/workbox/) for caching, routing, and strategies.
  ```js
  import { clientsClaim } from 'workbox-core';
  import { ExpirationPlugin } from 'workbox-expiration';
  import { precacheAndRoute, 
           createHandlerBoundToURL } from 'workbox-precaching';
  import { registerRoute } from 'workbox-routing';
  import { StaleWhileRevalidate } from 'workbox-strategies';

  clientsClaim();
  ```

2. The <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`precacheAndRoute`</u> function is used to precache and route the assets generated during it's build process. This step allows the application to serve cached resources efficiently.
  ```js
  precacheAndRoute(self.__WB_MANIFEST);
  ```

3. The service worker is configured to handle navigation requests by routing them to the index.html (built version) shell of the application. This helps in achieving an “[app shell](https://web.dev/app-shell-ux-with-service-workers/#implement-an-app-shell-ux-architecture-in-mpas-with-workbox)” architecture! ✨
  ```js
  const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
  registerRoute(
    ({ request, url }) => {
      if (request.mode !== 'navigate') {
        return false;
      }
      if (url.pathname.startsWith('/_')) {
        return false;
      }
      if (url.pathname.match(fileExtensionRegexp)) {
        return false;
      }
      return true;
    },
    createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
  );
  ```

4. Respective file extensions (e.g., .png, .mp3, .task, .gif) are cached and served using a "[*stale-while-revalidate*](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate)" strategy. This strategy serves cached content if available while fetching updated content in the background.
  ```js
  registerRoute(
    ({ url }) =>
      url.origin === self.location.origin &&
      (url.pathname.endsWith('.png')  || 
      url.pathname.endsWith('.mp3')  || 
      url.pathname.endsWith('.jpg')  || 
      url.pathname.endsWith('.task') || 
      url.pathname.endsWith('.gif')),   
    new StaleWhileRevalidate({
      cacheName: 'assets',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days (optional)
        }),
      ],
    })
  );
  ```

> **🛈** The [Stale-While-Revalidate](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate) strategy in Workbox serves cached responses to users while also updating the cache with fresh data from the network in the background.
>
> ![stale-while-revalidate](https://user-images.githubusercontent.com/48355572/263499968-90535cd7-2ac3-49a4-a03e-ab0207c152e3.png)
>
> <br/>
>
> 📌 For security purposes (especially to avoid cache-poisoning), the support has been limited to active [session](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/Session#:~:text=Note%20that%20different%20browsers%20might,is%20recorded%20as%20a%20Tab.) only, and cache expiration of 30 days has been set with [_stale-while-revalidate_](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#stale-while-revalidate) strategy for achieving best performance.


💡 The service worker listens for a custom message to trigger the <u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">skipWaiting</u> function, which allows the web app to skip the waiting phase and activate the new service worker immediately!

```js
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
```

> ⚠️ Service workers are only available to "secure origins" (HTTPS sites, basically) in line with a policy to prefer secure origins for powerful new features. However [http://localhost](http://localhost) is also considered a secure origin, so if you can, developing on localhost is an easy way to avoid this error.


- [**<u style="background-image: linear-gradient(135deg, #9333f2, #a011ed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">serviceWorkerRegistration.js</u>**](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/src/serviceWorkerRegistration.js): This essentially ensures the service worker's proper registration, validation, and handling for an improved offline experience and updates.

```js
// Register the service worker
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    /* ... (code) */
  }
}

// Register a valid service worker
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      /* ... (code) */
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

// Check validity of the service worker
function checkValidServiceWorker(swUrl, config) {
  // ... (code)
}

// Unregister the service worker
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
```

### Testing the Service Worker 🧪

- Open the [**live demo**](https://atm-playground.netlify.app) on your browser or run it locally on localhost. 

- If you're accessing it for the first time, it might take some time to load the model & assets on your local (depending on your internet speed). Once it's loaded, feel free to explore and interact with the demo for some amount of time.

- Open [DevTools](https://developer.chrome.com/docs/devtools/network/#:~:text=%23%20Open%20the%20Network%20panel&text=Open%20DevTools%20by%20pressing%20Control,The%20Console%20panel%20opens.&text=You%20might%20prefer%20to%20dock%20DevTools%20to%20the%20bottom%20of%20your%20window.&text=Click%20the%20Network%20tab.) by pressing “<u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`Control+Shift+J`</u>” or “<u style="background-image: linear-gradient(135deg, #0f81fa, #0f81fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">`Command+Option+J`</u>” (Mac). The **Console** panel should appear. 

- Then click on the “**Network**” tab, which will open the Network panel. Click on “**No Throttling**” & uncheck the “**Disable Cache**” to make sure the cached data is accessible. Then simply toggle it to “**Offline**” & perform a normal refresh to make it run while offline. 

- If you want to compare different trials, you can use the profiler to capture the waterfall. The mean result of these trials can be found above. 

> ⚠️ Please note that if you terminate the current browser session, you will need to perform the initial load using an internet connection.

You can see the working & registration of the service worker in the below video. Check it out! 👇

`youtube: https://www.youtube.com/watch?v=AhdWlZtsFa4`

> 🛈 Since [precaching](https://developer.chrome.com/docs/workbox/modules/workbox-precaching/) is enabled, the app will work offline after the first load 🎉


### Performance Benchmarks for the Web Application 📊

Below are the performance benchmarks for the web-app, obtained from the [Waterfall](https://developer.chrome.com/docs/devtools/network/reference/#waterfall) statistics. The latency results represent the average latency observed on **Ryzen 5 4600H** processor with GPU (`NVIDIA GTX 1650Ti`). These benchmarks provide insights into the performance improvements achieved after implementing a service worker.

| Metric           | Before Implementation | After Implementation     | Improvement 📈   |
|------------------|-----------------------|--------------------------|------------------|
| Load Time        | <u style="background-image: linear-gradient(135deg, #cc750a, #ba5106); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">16.8s</u>                 | **<u style="background-image: linear-gradient(135deg, #1f9404, #089e32); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">6.1s</u>**                 | **275%**       |

🔹 **Browser:** [Google Chrome](https://www.google.com/intl/en_in/chrome/) — Version 116.0.5845.97 (Official Build) (64-bit)

The performance boost achieved after the first load is significant, with the load time reducing from 16.8 seconds to 6.1 seconds which represents a remarkable improvement of **<u style="background-image: linear-gradient(135deg, #06bf22, #039e4c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">275%</u>** in load time efficiency! ⚡

> ⓘ **NOTE:** The provided benchmarks and details are based on the information provided and may not reflect actual application performance in all scenarios.

Besides, if you face any errors, open [Chrome DevTools](https://developer.chrome.com/docs/devtools/open/) and then check the Console panel for errors or review the previous steps to ensure that you didn't miss anything.


And that's a wrap! Thank you for joining me on this exciting adventure. Stay curious and keep exploring! 🚀





![line-breaker](https://github.com/google/mediapipe/assets/48355572/c2a5d7fd-0fa7-470d-ab05-561bb8748394)




### References 📌

Here are the links to some of the best resources to learn more about [MediaPipe](https://developers.google.com/mediapipe):

- MediaPipe GitHub repository → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://github.com/google/mediapipe)

- MediaPipe Hand Landmark Detection for Web → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/web_js)

- CodeSandbox Docs → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://codesandbox.io/docs/learn)

- **<u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">G</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #FBBC05, #FBBC05); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">o</u><u style="background-image: linear-gradient(135deg, #4285F4, #4285F4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">g</u><u style="background-image: linear-gradient(135deg, #34A853, #34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">l</u><u style="background-image: linear-gradient(135deg, #EA4335, #EA4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">e</u>** **AI** Blogs → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://ai.googleblog.com/)

- Applying Hand Gesture Recognition for User Guide Application Using MediaPipe — Research Paper (**ResearchGate**, 2021) → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://www.researchgate.net/publication/357216549_Applying_Hand_Gesture_Recognition_for_User_Guide_Application_Using_MediaPipe)

- MediaPipe official research paper (**Arxiv**, 2020) → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **link**</mark></u>](https://arxiv.org/pdf/2006.10214.pdf)

<br/>
<br/>

![MP_blogs](https://github.com/google/mediapipe/assets/48355572/8c77dc03-48c5-4e43-bf07-160317b42699)

- Watch Learn and build with [<u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u>](https://developers.google.com/mediapipe) → [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://developers.google.com/mediapipe#:~:text=Watch%2C%20learn%2C%20and%20build%20with%20MediaPipe) ✨

- Read more blogs on <u style="background-image: linear-gradient(135deg, #0097A7, #26b5a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**MediaPipe**</u> <u style="background-image: linear-gradient(135deg, #0097A7, #0097A7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Solutions**</u> [<u><mark style="color: #f20c70; font-family: 'Trebuchet MS', sans-serif;">🔗 **here**</mark></u>](https://developers.googleblog.com/search/label/MediaPipe) 🌟



<br/>

## License ⚖️
Copyright 2023 The MediaPipe Authors. Distributed under the Apache License 2.0. See [`LICENSE`](https://github.com/googlesamples/mediapipe/blob/main/tutorials/atm_playground/LICENSE) for more information.

<!-- ![dino](./images/dino_roar.gif "dino") -->
<!-- ![memes](https://github.com/googlesamples/mediapipe/assets/48355572/3fca322f-096f-4793-91ed-3d6e8d894c33) -->

# Conclusion 🚀

That’s it for now! I hope you found the content valuable and insightful. I'm immensely thankful to my mentor [**Jen Person** 👩](https://github.com/jenperson) for granting me this wonderful opportunity. Her feedback and guidance have been instrumental in propelling the project forward. As this chapter comes to a close, remember that every ending marks the beginning of a new journey.

I'm excited to present this final blog in the Google Summer of Code series. It has been a transformative experience, and I can't wait to share the culmination of my efforts with all of you. If you have any suggestions or feedback, don't hesitate to get in touch with me on [<u style="background-image: linear-gradient(135deg, #1DA1F2, #1DA1F2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**Twitter**</u>](https://twitter.com/@neilzblaze007) or [<u style="background-image: linear-gradient(135deg, #0077B5, #0077B5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: Lato, Arial;">**LinkedIn**</u>](https://www.linkedin.com/in/neilblaze). Your input is greatly valued! 😄
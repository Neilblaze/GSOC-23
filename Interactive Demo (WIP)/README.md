
## NOTE: This README is outdated! I'll update this soon.

### Getting Started with Interactive Demo using [GitHub Codespaces](https://github.com/features/codespaces):


Follow the exact instructions:

1. Visit the [GitHub Repository]()

2. You can fork the repository, but it's not necessary. Just click on the green button that says "Code" and select "Codespaces". Then simply click on "Create codespace on main" and wait for it to load.

![image](https://github.com/google/mediapipe/assets/57082943/9a88d568-6db6-4777-ac42-379fbdab4e30)

3. It should look something like this once it's done loading:

![image](https://github.com/google/mediapipe/assets/57082943/a03f4763-e163-42b8-9c1a-d6995c0c27d0)

It feels exactly the same as VS Code.

4. Now, to open the terminal and run the following command:

```sh
cd Int*
```

This should take you to the root directory [`Interactive Demo (WIP)`] of the project.

5. [Optional] Check the node version using the following command:

```sh
node -v
```

It should display **v20.3.0**


> ⚠️ **Disclaimer:** This project was built on create-react-app which is a tool to bootstrap React applications. The template which I've used has lost support in Node v20, so its recommended to use **v16.14.0** (which I use) or node v18, else it won't work on codespaces. This is the reason why I'll shifting the codebase to a new Next.js project in near future.

6. Now since we need node v16.14.0 (which I use), we'll use nvm to install it. To install **NVM** (Node Version Manager) and Node.js version 16.14.0 on Bash, you can follow these steps:


-  Download the NVM installation script using `cURL` by running the following command:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

   ![image](https://github.com/google/mediapipe/assets/57082943/b08b588a-e50a-4fb1-9774-1edec765758e)

   This command will download the NVM installation script and execute it.

- Run the following command in terminal to load NVM into the current session:

   ```bash
   source ~/.bashrc
   ```

- Verify that NVM is installed correctly by running the following command:

   ```bash
   nvm --version
   ```

   You should see the version number of NVM printed on the terminal, which should be **0.39.0**.

- Install Node.js version 16.14.0 using NVM:

   ```bash
   nvm install 16.14.0
   ```

- [Optional] Verify that Node.js is installed correctly by running the following commands:

   ```bash
   node --version
   ```

   ![image](https://github.com/google/mediapipe/assets/57082943/7a878a5e-97b6-4ac2-b4a3-f4264324f59d)

   You should see the version number of Node.js (16.14.0) printed on the terminal.

   ```bash
   npm --version
   ```

   You should see the version number of npm printed on the terminal, which should be **8.3.1**.

> 💡 Now you have NVM installed and Node.js version 16.14.0 set as the active version on your Bash terminal. You can switch between different Node.js versions using NVM if needed, and you can create and run your React app with the desired Node.js version.

7. Now, run the following command to install the dependencies:

```sh
npm install --silent
```

> Ignore the warnings, they're just about the peer dependencies.

8. Once the installation is done, run the following command to start the React App:

```sh
npm start
```

![image](https://github.com/google/mediapipe/assets/57082943/df712636-ffc4-4236-ae85-3107ea6170d4)

You should get a popup saying open in browser → The app should be running on port 3000. Or you can go to "PORTS" in Terminal & click on "Open in Browser".

![image](https://github.com/google/mediapipe/assets/57082943/77dda8b6-d373-4b54-b9db-b80e9a421cd3)

Once done, you can delete the active codespaces by visiting [this link](https://github.com/codespaces).

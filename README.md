# 🚀 React Vite + Tailwind CSS Template

This template helps you quickly set up a **React** app using **Vite** with **Tailwind CSS**. Follow the steps below to get your project up and running in no time. 🙌

---

## 🛠️ Setup Instructions

### Step 1: Create a Vite Project

1. Open your terminal and run `npm create vite@latest` to create a new Vite project.
2. Choose `client` as the project name and select `React` (JavaScript) as the template.
3. After creating the project, navigate into the project directory: `cd client`.
4. Install the required dependencies: `npm install`.

### Step 2: Install Tailwind CSS

1. Install **Tailwind CSS** and the necessary Vite plugin by running `npm install tailwindcss @tailwindcss/vite`.
2. After installation, open the `vite.config.js` file and update it to look like this:

    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
      plugins: [
        react(),
        tailwindcss()
      ],
    })
    ```

### Step 3: Configure Tailwind in Your CSS

1. In the `src` folder, open the `index.css` file and add this line to import Tailwind's default styles:

    ```css
    @import "tailwindcss";
    ```

### Step 4: Install Tailwind CSS IntelliSense (Optional but Recommended)

For a better development experience, especially for autocompletion and error checking in your Tailwind classes, install the **Tailwind CSS IntelliSense** extension in your code editor. This makes working with Tailwind easier and more efficient.

copy the tailwind.config.js from the /src folder

to make the the tailwind.config.js to work


---

## 🚀 Run Your Project

Once you’ve followed all the steps, run your project with `npm run dev`. You can then visit [http://localhost:3000](http://localhost:3000) to see it in action! 🎉

---

Enjoy building with **React**, **Vite**, and **Tailwind CSS**! 🚀



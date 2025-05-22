# 🧠 My-Dashboard

A responsive and user-friendly dashboard web application that displays articles and additional data widgets in a centralized interface. The goal is to create a clean and efficient platform for consuming useful information such as blog articles, tech news, user statistics, and other customizable data modules.

## 🚀 Features

- 📚 Displays a curated list of articles or blog posts
- 📊 Modular design for showing statistics or additional data
- 🧩 Dynamic and customizable widget components
- 🌐 Fully responsive UI for desktop and mobile devices
- 💾 Fetches data from APIs or local JSON files
- 🎨 Clean and modern UI using CSS frameworks (e.g., Tailwind, Bootstrap)
- ⚙️ Easy to extend with more data sources or widgets

## 📸 Screenshot

![Dashboard Screenshot](screenshot.png)

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, TypeScript / React / Shadcn Ui (edit according to your stack)
- **Styling**: Tailwind CSS  / Custom CSS

## 📂 Project Structure
```
my-dashboard/
├── public/
│   ├── index.html
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── ArticleList.tsx
│   │   ├── Widget.tsx
│   │   └── ...
│   ├── data/
│   │   └── articles.json
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

- **public/**: Static assets and the main HTML file.
- **src/components/**: Reusable React components (widgets, article lists, etc.).
- **src/data/**: Local JSON data files.
- **src/styles/**: CSS and Tailwind configuration.
- **App.tsx**, **index.tsx**: Main application entry points.
- Configuration files for TypeScript, Tailwind, and dependencies.



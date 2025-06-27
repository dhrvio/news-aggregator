# 📰 News Aggregator App

A modern Vite + React + Tailwind CSS frontend to display breaking news using the NewsAPI.  
Fully containerized with Docker and production-ready via Nginx.

---

## 🚀 Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — blazing-fast frontend tooling
- ⚛️ [React](https://reactjs.org/)
- 💨 [Tailwind CSS](https://tailwindcss.com/)
- 📡 [NewsAPI.org](https://newsapi.org/) — for real-time news
- 🐳 Docker + Nginx for containerized deployment

---

## 🖥️ Getting Started (Local)

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/news-aggregator.git
cd news-aggregator
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add `.env` File

Create a `.env` in the root folder:

```env
VITE_NEWS_API_KEY=your_newsapi_key_here
```

> 🔐 Get a free key from [https://newsapi.org](https://newsapi.org)

### 4. Run Dev Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Run local dev server           |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview local production build |

---

## 🐳 Docker Usage

### 1. Build Docker Image

```bash
docker build -t news-app .
```

### 2. Run the Container

```bash
docker run -p 8080:80 news-app
```

Access the app at [http://localhost:8080](http://localhost:8080)

---

## ⚙️ Folder Structure

```
news-aggregator/
├── public/
├── src/
│   ├── components/     # UI components (Modal, Loader, Filters, etc.)
│   ├── services/       # API logic
│   ├── App.jsx
│   └── main.jsx
├── .env                # Add your API key here
├── Dockerfile
├── package.json
└── tailwind.config.js
```

---

## 📦 Deployment

* You can deploy the Docker container on:

  * Render / Railway / Fly.io / Heroku / Azure / GCP
* Or export the static build using `npm run build` and serve via:

  * Nginx, Netlify, or Vercel (no server needed)

---

## 📃 License

This project is MIT licensed. Feel free to fork and modify for personal or commercial use.

---

## 🙌 Credits

Built with ❤️ by [Dhruva Shetty](https://github.com/dhrvio)

```

---

Let me know if:
- You want badges (Docker build, Vercel deploy, etc.)
- You’d like me to prep a `deploy.sh` script or GitHub Actions workflow
- You want a hosted public version for demo sharing

Shall I add this `README.md` to your project and push to GitHub for you?
```

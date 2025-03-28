# 🚀 Email Writer Assistant

*A powerful AI-powered email assistant that helps generate professional email replies instantly using Google's Gemini AI API.*

## ✨ Features

✅ One-click AI-generated email replies inside Gmail 📧\
✅ Uses **Gemini AI API** for intelligent email responses 🤖\
✅ Lightweight Chrome extension 🚀\
✅ Fully customizable email tone 🎭\
✅ Works seamlessly with Gmail UI ✨

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite) ⚛️
- **Backend**: Spring Boot (Java) ☕
- **Chrome Extension**: JavaScript + Content Scripts 🖥️
- **AI API**: Google Gemini AI 🧠

---

## 📂 Project Structure

```
email-writer
│── email-writer-react      # Frontend (React)
│── email-writer-sb         # Backend (Spring Boot)
│── email-writer-ext        # Chrome Extension
│── README.md               # Documentation
```

---

## 🚀 How to Use the Chrome Extension

1. **Download the project** from [GitHub](https://github.com/your-repo/email-writer-assistant).
2. **Load the Extension in Chrome:**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer Mode** (top-right corner)
   - Click **Load Unpacked**
   - Select the `email-writer-ext` folder
3. **Authorize Backend API:**
   - Start the backend server (`email-writer-sb`) locally or use the deployed version.
   - Ensure API keys are configured correctly.
4. **Open Gmail & Use the AI Reply Button!** 🎉

---

## 🛠️ Installation Guide (For Developers)

### 🔧 Setting Up the Backend (Spring Boot)

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/email-writer-assistant.git
   cd email-writer-sb
   ```
2. Set up environment variables (`.env` or application.properties):
   ```sh
   GEMINI_API_URL=https://api.gemini.google.com
   GEMINI_API_KEY=your_api_key_here
   ```
3. Build & Run the Spring Boot application:
   ```sh
   ./mvnw spring-boot:run
   ```
4. Backend runs at: `http://localhost:8080`

### 🖥️ Setting Up the Frontend (React)

1. Navigate to `email-writer-react` folder:
   ```sh
   cd email-writer-react
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```
4. Frontend runs at: `http://localhost:5173`

---

## 🔑 How to Get a Free Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Navigate to the **API Keys** section.
4. Click **Generate API Key**.
5. Copy the API key and add it to your `.env` file:
   ```sh
   GEMINI_API_KEY=your_generated_api_key_here
   ```

---

## ⚡ API Endpoints

| Method | Endpoint              | Description                         |
| ------ | --------------------- | ----------------------------------- |
| `POST` | `/api/email/generate` | Generates an AI-powered email reply |

**Example Request:**

```json
{
  "emailContent": "Can we schedule a meeting tomorrow?",
  "tone": "formal"
}
```

**Example Response:**

```json
{
  "reply": "Sure! What time works best for you?"
}
```

---

## 🔑 Environment Variables

Create a `.env` file in `email-writer-sb` and `email-writer-react` with the following:

```sh
GEMINI_API_URL=https://api.gemini.google.com
GEMINI_API_KEY=your_api_key_here
```

---

## 📜 License

This project is intended **only for educational purposes**. Any kind of commercial use, resale, or monetization is strictly prohibited.

---

## 📬 Contact

🔗 **GitHub**: [https://github.com/your-repo](https://github.com/your-repo)\
📧 **Email**: [your-email@example.com](mailto:your-email@example.com)

---

🔥 **Enjoy AI-powered email writing!** 🚀


## 🧠 AI Career Assistant & AI Resume Matcher

An advanced **RAG-based (Retrieval-Augmented Generation)** web app designed to help users get **personalized career advice, resume optimization tips, interview strategies, and industry insights** — making this platform a **complete career development solution**.

---

### 🎯 **Project Overview**

This project combines the power of **AI and NLP** to assist users in their career journey.
It includes two main modules:

1. **AI Career Assistant**

   * Chat with an intelligent AI that provides context-aware, career-focused responses.
   * Get advice on resume building, career growth, interview prep, industry insights, and networking.

2. **AI Resume Matcher**

   * Analyze and match resumes with job descriptions.
   * Identify missing skills, strengths, and areas for improvement.

The **RAG (Retrieval-Augmented Generation)** component enhances the AI’s responses using a simulated knowledge base built with embeddings, keyword matching, and context-driven templates.

---

### ✨ **Features**

#### 🤖 Intelligent Chat Interface

* Real-time chat with typing indicators
* Beautiful chat bubbles with timestamps
* Voice recording button (future-ready)

#### 💬 Smart Suggested Questions

* 6 categories: Resume Improvement, Career Growth, Interview Prep, Industry Insights, Learning & Development, Networking
* 18+ pre-built questions to get users started
* Dynamic suggestions based on context

#### 🧩 RAG Knowledge Base Simulation

* Industry best practices for resume writing
* Career growth and skill development insights
* Interview preparation techniques
* Latest market trends and job requirements

#### 🧭 Enhanced Navigation & UI

* Modern blue-to-teal gradient theme
* Glassmorphic effects with elegant shadows
* Smooth animations and responsive design
* Mobile-optimized and user-friendly interface

#### 🚀 Key Highlights

* RAG-enhanced contextual responses
* Resume analysis and skill recommendations
* Personalized career guidance
* Real-time, interactive experience

---

### 🧩 **Tech Stack**

**Frontend:** React (with TailwindCSS, Framer Motion, ShadCN UI)
**Backend:** FastAPI, LangChain, Transformers, ChromaDB
**AI/NLP:** Sentence Transformers, FAISS, SpaCy, NLTK
**Resume Parsing:** pdfplumber, docx2txt
**Database:** Simulated Vector Store (can connect to FAISS or Chroma)

---

### ⚙️ **Installation & Setup**

#### 1. Clone the Repository

```bash
git clone https://lovable.dev/projects/e2956f89-34f0-4e27-b9bb-519680c71659
cd ai-career-assistant
```

#### 2. Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # for macOS/Linux
venv\Scripts\activate     # for Windows
```

#### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

#### 4. Run the Backend Server

```bash
uvicorn main:app --reload
```

#### 5. Run the Frontend (React)

If you are working locally, navigate to the React app folder and run:

```bash
npm install
npm start
```

---
### 🧠 **Simulated RAG Logic**

Currently, the RAG system is simulated using intelligent **keyword matching and response templates**.
For a real deployment:

* Integrate **vector databases (Chroma / FAISS)**
* Use **OpenAI, Hugging Face, or Llama models** for dynamic embeddings
* Implement **context-aware retrieval pipelines**

---

### 💡 **Future Enhancements**

* Voice-enabled conversations
* Job description to resume ranking system
* Real-time AI feedback on resume uploads
* Integration with live labor market APIs

---

### 👩‍💻 **Developer Notes**

If you wish to work locally, you can clone this repo, make changes in your IDE, and push updates — your changes will be automatically reflected in **Lovable**.

URL: [https://lovable.dev/projects/e2956f89-34f0-4e27-b9bb-519680c71659](https://lovable.dev/projects/e2956f89-34f0-4e27-b9bb-519680c71659)




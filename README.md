# KOLA SAMEERA - Personal Portfolio

A modern, responsive, and professional personal developer portfolio website created for **KOLA SAMEERA**, a **B.Tech Computer Science and Engineering Student** at **Sridevi Women’s Engineering College**.

Built strictly with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (without any third-party frameworks or libraries).

---

## 📌 Profile & Career Objective

> *"A motivated and hardworking student seeking an internship opportunity to gain hands-on experience and practical knowledge. Eager to apply theoretical concepts learned during academics to real-world applications. Looking forward to enhancing technical and professional skills while contributing positively to the organization’s growth."*

- **Name**: KOLA SAMEERA
- **Degree**: B.Tech in Computer Science and Engineering (2023 – 2027)
- **Institution**: Sridevi Women’s Engineering College, India
- **Location**: Nagarkurnool, Telangana, India
- **Phone**: [+91-6301623737](tel:+916301623737)
- **Email**: [kolasameera90@gmail.com](mailto:kolasameera90@gmail.com)
- **Actual Resume PDF**: [`assets/resume.pdf`](assets/resume.pdf)

---

## 🎓 Education

1. **B.Tech in Computer Science and Engineering** (2023 – 2027)
   - *Institution*: Sridevi Women’s Engineering College, India
   - *Status*: Currently Pursuing

2. **Intermediate** (2021 – 2023)
   - *Institution*: New Era Junior College, Nagarkurnool District
   - *Status*: Completed

3. **Board of Secondary Education** (2020 – 2021)
   - *Institution*: ZPHS Chandakonda, Nagarkurnool District
   - *Status*: Completed

---

## 🛠️ Technical Skills

- **Programming Languages**: C, Python
- **Web Technologies**: HTML, CSS, Node.js
- **Tools**: Git, GitHub, VS Code, Power BI
- **Database / Other**: DevOps, Excel, DBMS

---

## 🚀 Projects (From Resume)

1. **Portfolio Website**
   - *Description*: Developed a responsive personal portfolio using HTML and CSS. Showcased projects, skills, and contact details.
   - *Technologies*: HTML, CSS

2. **Health and Fitness Application**
   - *Description*: Developed a health and fitness web app for workout and BMI tracking. Implemented using HTML, CSS, and Python.
   - *Technologies*: HTML, CSS, Python

3. **Digital Recommendation System**
   - *Description*: Developed a recommendation system that suggests relevant content based on user preferences and behavior. Implemented personalized features using data analysis and basic machine learning techniques.
   - *Technologies*: Python, Data Analysis, Machine Learning

4. **Personalized Learning System**
   - *Description*: Designed a personalized learning platform that adapts content according to individual user performance. Built using web technologies and data-driven methods to enhance user learning experience.
   - *Technologies*: Web Technologies, Data-driven Methods

---

## 🏆 Hackathons & Competitions

1. **Smart India Hackathon**
   - *Details*: Participated in Leaf Guard – Early Disease Alert System.
2. **Hackathon 2k26**
   - *Details*: Participated in Lost and Found Network.

---

## ✨ Features

- **Strictly Horizontal Slider Architecture (LEFT ↔ RIGHT)**:
  - Movement is strictly horizontal with smooth `transform: translateX()` transitions.
  - Zero vertical sliding — navigating between sections slides smoothly horizontally.
  - **Visible Floating Navigation Arrows**: Left Arrow (`←`) and Right Arrow (`→`) controls for instant section transitions.
  - **Floating Bottom Controller Bar**: Interactive slide indicator dots (8 sections), slide counter (`01 / 08`), and quick Prev / Next buttons.
  - **Keyboard Arrow Navigation**: Navigate effortlessly using the `←` and `→` arrow keys.
  - **Touch & Swipe Gestures on Mobile**: Swipe left to advance to the next section; swipe right to return to the previous section.
  - **Horizontal Projects Carousel**: Dedicated horizontal slider track for project cards with prev/next arrows and touch swiping.
- **Side-by-Side Horizontal Layout**:
  - **Hero**: Profile photo on the LEFT, Name + Introduction + 3 CTA buttons on the RIGHT.
  - **About**: Career Objective on the LEFT, 2x2 Academic Snapshot Cards on the RIGHT.
  - **Education**: 3 comprehensive timeline cards side-by-side.
  - **Skills**: 4 distinct category cards with tech icons and brand colors.
  - **Projects**: 4 project cards in a horizontal carousel slider.
  - **Hackathons**: Side-by-side competition cards.
  - **Resume**: Career highlights on the LEFT, View/Download buttons on the RIGHT.
  - **Contact**: Clickable phone, email, location on the LEFT, validated contact form on the RIGHT.
- **View Resume Integration**:
  - "View Resume" button in the sticky Navbar (opens `assets/resume.pdf` in a new tab).
  - "View Resume" button in the Hero section.
  - "View Resume" button in the dedicated Resume section.
  - "Download Resume" option across Hero and Resume sections.
- **Pure Web Standards**: 100% vanilla HTML5, CSS3, and JavaScript without external frameworks.

---

## 📁 Project Structure

```text
portfolio/
├── index.html              # Main HTML5 document
├── style.css               # Complete stylesheet (responsive design & animations)
├── script.js               # Vanilla JavaScript functionality
├── assets/
│   ├── profile.jpg         # Profile image (with fallback)
│   └── resume.pdf          # Actual resume PDF document
└── README.md               # Project documentation & deployment guide
```

---

## 💻 How to Run Locally

You do not need any compilers or package managers:

### Method 1: Direct Browser Opening
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 2: VS Code Live Server
1. Open the `portfolio` folder in Visual Studio Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.

### Method 3: Python Local Server
Run in PowerShell inside the `portfolio` directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## 🌐 How to Deploy on GitHub Pages

1. **Commit your code**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Kola Sameera portfolio with actual resume integration"
   git branch -M main
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, open **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch `main` and folder `/ (root)`.
   - Click **Save**. Within 1–2 minutes, your website will be live.

# Explore Singapore Tours 🌏

A responsive multi-page travel website built with **Next.js 13**, showcasing Singapore's iconic attractions, curated tours, and expert guides.

**Live Demo:** [https://explore-singapore-tours.vercel.app/](https://explore-singapore-tours.vercel.app/)

---

## 🖼 Pages Included

1. **Home Page** (`/`) – Hero section, carousel, featured tours.  
2. **Tours/Services Page** (`/tours`) – List of available tours/services.  
3. **Tour/Service Details Page** (`/tours/[id]`) – Individual tour details.  
4. **About Us Page** (`/about`) – Company story, mission, and team.  
5. **Contact Us Page** (`/contact`) – Contact form with validation.

---

## 🚀 Features

- Fully **responsive** (mobile, tablet, desktop)  
- **Navigation Bar** with hamburger menu for small screens  
- **Image Carousel/Slider** on homepage using Swiper  
- **Form Validation** for contact form (required fields, email validation)  
- Smooth hover effects and optional animations using Tailwind & Framer Motion  
- **Fallback images** for missing/broken images  

---

## 🛠 Tech Stack & Dependencies

- **Framework:** Next.js 15.4.6  
- **React:** 19.1.0  
- **CSS:** Tailwind CSS v4  
- **Icons:** Lucide React, React Icons, MUI Icons  
- **Animations:** Framer Motion  
- **Forms:** React Hook Form, SweetAlert2  
- **Carousel:** Swiper  
- **Other:** Emotion (styled components)

**Dev Dependencies:**

- ESLint & Next.js ESLint Config  
- Tailwind PostCSS

---

## 📁 Project Structure

src/
│
├─ app/
│ ├─ about/page.js
│ ├─ contact/page.js
│ ├─ tours/page.js
│ ├─ tours/[id]/page.js
│ ├─ api/
│ │ ├─ homePage/route.js
│ │ └─ tours/[id]/route.js
│ ├─ lib/utils.js
│ ├─ layout.js
│ ├─ theme-provider.js
│ └─ not-found.js
├─ assets/
├─ components/
│ ├─ contact-us/
│ ├─ home/
│ └─ shared/
│ ├─ footer/
│ ├─ navbar/
│ └─ HelpYouButton.jsx
├─ globals.css
├─ favicon.ico
└─ package.json

---

## 💻 Setup & Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/explore-singapore-tours.git
cd explore-singapore-tours
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to view the project.

NEXT_PUBLIC_BASE_URL=http://localhost:3000

---

⚡ **Notes**

- Make sure Node.js v18+ is installed  
- Project uses file-based routing in Next.js  
- Images fetched from Unsplash, with fallback placeholders  
- Tailwind CSS is used for responsive design and styling  
- Ensure all components are inside `src/app` following Next.js 13 App Router conventions  

---

📞 **Contact**

- Email: imran423521@gmail.com 
- LinkedIn: [https://linkedin.com/in/programmarimran](https://linkedin.com/in/programmarimran)  

Happy Exploring Singapore! 🏝️


# 🐾 Petvista

**Petvista** is a responsive web application designed to offer pet lovers an all-in-one platform for pet supplies, expert advice, tutorials, and 24/7 support. It features a modern UI, product showcases using SwiperJS, and a functional contact form integrated with [EmailJS](https://www.emailjs.com/) for real-time messaging.

---

## 🚀 Features

- ✨ Stylish and responsive design
- 📹 Embedded pet care tutorial videos for various animals (Cat, Dog, Bird, Fish, Cow, Goat)
- 🛒 Product carousel powered by SwiperJS
- 📬 Contact form with real-time email functionality using EmailJS
- 🔒 Client-side validation with user feedback messages
- 📱 Mobile-friendly layout

---

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Libraries/Plugins**:
  - [SwiperJS](https://swiperjs.com/) for product slider
  - [EmailJS](https://www.emailjs.com/) for handling contact form submissions

---

## 📁 Project Structure

```
.
├── index.html         # Main HTML page
├── style.css          # Styling and responsive layout
├── script.js          # SwiperJS carousel configuration
├── email.js           # EmailJS form handling script
├── images/            # All image assets (logo, product images, etc.)
```

---

## ✉️ Contact Form Setup (EmailJS)

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Create a new **Email Service** and **Email Template**.
3. Replace placeholders in `email.js` and `index.html`:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
```

```html
emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
```

> 💡 You can find these keys in your EmailJS dashboard after setup.

---

## 📦 How to Run

1. Clone or download this repository.
2. Ensure all assets are in place (images folder, linked CSS/JS).
3. Open `index.html` in any modern browser.
4. (Optional) Host it on platforms like GitHub Pages, Netlify, or Vercel.

---

## 📄 License

This project is open-source and free to use for educational or personal purposes.

---

## 💡 Author

Developed by **[Bickson]**

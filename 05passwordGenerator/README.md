# 🔐 Password Generator (Tailwind CSS + JavaScript)

A clean, modern, and responsive **Password Generator** built using **HTML**, **Tailwind CSS**, and **JavaScript**.  
This tool allows users to generate secure passwords based on customizable criteria such as length, uppercase/lowercase letters, numbers, and special characters.

---

## ✨ Features

- ✅ **Responsive Design** – Works on desktop and mobile devices.
- ✅ **Customizable Options** – Choose password length and included character types.
- ✅ **One-Click Copy** – Copy the generated password to the clipboard.
- ✅ **Modern UI** – Built with Tailwind CSS for a clean and minimal look.
- ✅ **Secure Generation** – Uses `Math.random()` logic for varied password combinations.

---

## 📂 Project Structure

```
password-generator/
│
├── index.html        # Main HTML structure
├── style.css         # Optional custom styles (minimal due to Tailwind)
├── script.js         # JavaScript logic for password generation
└── README.md         # Project documentation
```

---

## 🛠 Technologies Used

- **HTML5** – Page structure.
- **Tailwind CSS** – For modern, responsive, and utility-based styling.
- **Vanilla JavaScript (ES6)** – Password generation logic and event handling.

---

## 📜 How It Works

1. **Set Preferences**  
   - Choose desired password length.  
   - Select which character types to include (uppercase, lowercase, numbers, symbols).  

2. **Generate Password**  
   - Click the **Generate** button.  
   - A random password is generated based on selected criteria.  

3. **Copy to Clipboard**  
   - Click the **Copy** button to copy the generated password.  

---

## 💻 Example HTML Structure

```html
<div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 space-y-6">
  <h1 class="text-2xl font-bold text-gray-800 text-center">Password Generator</h1>

  <div class="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
    <input id="passwordOutput" type="text" readonly class="bg-transparent w-full outline-none">
    <button id="copyBtn" class="text-blue-500 hover:text-blue-700">📋</button>
  </div>

  <div class="space-y-4">
    <div>
      <label for="length" class="block text-sm font-medium text-gray-700">Length:</label>
      <input id="length" type="number" min="4" max="32" value="12" class="mt-1 w-full border rounded-lg p-2">
    </div>

    <div class="flex items-center space-x-2">
      <input id="includeUppercase" type="checkbox" checked>
      <label for="includeUppercase">Include Uppercase Letters</label>
    </div>

    <div class="flex items-center space-x-2">
      <input id="includeLowercase" type="checkbox" checked>
      <label for="includeLowercase">Include Lowercase Letters</label>
    </div>

    <div class="flex items-center space-x-2">
      <input id="includeNumbers" type="checkbox" checked>
      <label for="includeNumbers">Include Numbers</label>
    </div>

    <div class="flex items-center space-x-2">
      <input id="includeSymbols" type="checkbox" checked>
      <label for="includeSymbols">Include Symbols</label>
    </div>
  </div>

  <button id="generateBtn" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Generate</button>
</div>
```

---

## ⚙ Example JavaScript Logic

```javascript
document.getElementById('generateBtn').addEventListener('click', () => {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeLowercase = document.getElementById('includeLowercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}<>?/|';

  let charPool = '';
  if (includeUppercase) charPool += uppercaseChars;
  if (includeLowercase) charPool += lowercaseChars;
  if (includeNumbers) charPool += numberChars;
  if (includeSymbols) charPool += symbolChars;

  if (charPool === '') {
    alert('Please select at least one character type.');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  document.getElementById('passwordOutput').value = password;
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const password = document.getElementById('passwordOutput').value;
  if (password) {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  }
});
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/password-generator.git
cd password-generator
```

### 2️⃣ Install Tailwind CSS (via CDN for simplicity)
Add this inside your `<head>`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### 3️⃣ Open in Browser
Simply open `index.html` in your browser and start generating passwords!

---





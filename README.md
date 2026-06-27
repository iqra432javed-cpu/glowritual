# Glowritual — Landing Page

Authentic SCS Skincare & Perfumes · @glowritual.pkofficial

## 📁 File Structure

```
glowritual/
├── index.html        ← Main page (edit product names/prices here)
├── css/
│   └── style.css     ← All colors, fonts, layout (edit here)
├── js/
│   └── main.js       ← Filter tabs & animations
└── README.md
```

---

## 🚀 GitHub Pages Setup (Step by Step)

### Step 1 — GitHub par jao
1. github.com open karo
2. Login karo (ya free account banao)

### Step 2 — New Repository
1. Green "New" button click karo
2. Repository name: `glowritual` (ya jo chahiye)
3. Public rakho ✅
4. "Create repository" click karo

### Step 3 — Files Upload
1. "uploading an existing file" click karo
2. Yeh files drag & drop karo:
   - index.html
   - css/style.css (css folder bana ke andar rakho)
   - js/main.js (js folder bana ke andar rakho)
3. "Commit changes" click karo

### Step 4 — GitHub Pages Enable
1. Repository mein "Settings" tab click karo
2. Left sidebar mein "Pages" click karo
3. Source: "Deploy from a branch"
4. Branch: "main" select karo, folder: "/ (root)"
5. "Save" click karo

### Step 5 — Live URL
2-3 minutes baad tumhari site live hogi:
`https://[tumhara-username].github.io/glowritual/`

Yeh URL Instagram bio mein daalo! ✅

---

## ✏️ Easy Edits Guide

### Product price change karna hai?
`index.html` open karo → Ctrl+F → price search karo → update karo

### Color change karna hai?
`css/style.css` open karo → Line 1 mein `:root` section mein colors hain:
```css
--gold:  #C9A84C;   /* ← gold color */
--cream: #F5F0E8;   /* ← background */
--black: #1A1A1A;   /* ← text color */
```

### Naya product add karna hai?
`index.html` mein koi bhi existing product card copy karo
aur category `data-category` change karo.

### Real product photos add karna hai?
Product card mein yeh replace karo:
```html
<!-- YEH HATAO: -->
<div class="product-img-placeholder">🧴</div>

<!-- YEH LAGAO: -->
<img src="images/product-name.jpg" alt="Product Name" />
```
Aur apni images ek `images/` folder mein upload karo.

### Instagram handle change karna hai?
`index.html` mein Ctrl+F karo:
`glowritual.pkofficial` → sab jagah replace karo

---

## 🎨 Brand Colors

| Color | Hex | Use |
|-------|-----|-----|
| Gold | #C9A84C | Buttons, prices, accents |
| Cream | #F5F0E8 | Background |
| Black | #1A1A1A | Text, footer |
| White | #FFFFFF | Cards |

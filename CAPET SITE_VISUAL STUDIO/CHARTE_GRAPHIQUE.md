# 🎨 GUIDE CHARTE GRAPHIQUE - CAPET

**Version:** 1.0  
**Date:** 20 Janvier 2026  
**Pour:** Développeurs Front-end & UI/UX Designers  

---

## 📋 SOMMAIRE
1. [Identité Visuelle](#identité-visuelle)
2. [Palette de Couleurs](#palette-de-couleurs)
3. [Typographies](#typographies)
4. [Composants](#composants)
5. [Responsive Design](#responsive-design)
6. [Code Examples](#code-examples)
7. [Best Practices](#best-practices)

---

## 🏛️ IDENTITÉ VISUELLE

### Mission de la Charte
Créer une **présence institutionnelle moderne** qui inspire confiance et professionnalisme pour une école technique au Togo.

### Valeurs Visuelles
- **Institutionnel:** Bleu Oxford pour l'autorité
- **Moderne:** Orange Énergie pour l'innovation
- **Accessible:** Typographies lisibles sur tous appareils
- **Élégant:** Ombres douces et transitions fluides

---

## 🎨 PALETTE DE COULEURS

### Couleurs Primaires

```
┌─────────────────────────────────────────┐
│ PRIMARY - BLEU OXFORD                   │
│ Hex:     #002366                        │
│ RGB:     0, 35, 102                     │
│ Usage:   Headers, titres, footer        │
│ Note:    Institutionnel, confiance      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ACCENT - ORANGE ÉNERGIE                 │
│ Hex:     #E65100                        │
│ RGB:     230, 81, 0                     │
│ Usage:   CTA, liens, icônes, highlights │
│ Note:    Énergie, action, innovation    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ BACKGROUND - SLATE GIVRÉ                │
│ Hex:     #F8FAFC                        │
│ RGB:     248, 250, 252                  │
│ Usage:   Sections secondaires, bgs      │
│ Note:    Léger, neutre, lisible         │
└─────────────────────────────────────────┘
```

### Couleurs Secondaires

| Couleur | Hex | Usage | Notes |
|---------|-----|-------|-------|
| White | #ffffff | Backgrounds, texte clair | Utiliser var(--white) |
| Dark Text | #1a1a1a | Texte principal | Contraste AA+ |
| Light Text | #555555 | Texte secondaire | Gris moyen |
| Success | #27ae60 | Validations, succès | Notifications |
| Error | #e74c3c | Erreurs, alertes | Attention |
| Warning | #f39c12 | Avertissements | Vigilance |

### CSS Variables (à utiliser TOUJOURS)

```css
/* COPIER dans vos fichiers CSS */

/* Couleurs */
var(--primary-color)    /* #002366 - Bleu Oxford */
var(--accent-color)     /* #E65100 - Orange Énergie */
var(--background-light) /* #F8FAFC - Slate */
var(--white)            /* #ffffff */
var(--dark-text)        /* #1a1a1a */
var(--light-text)       /* #555555 */
var(--success-color)    /* #27ae60 */
var(--error-color)      /* #e74c3c */
var(--warning-color)    /* #f39c12 */

/* Typographies */
var(--font-headings)    /* Montserrat */
var(--font-primary)     /* Open Sans */
var(--font-secondary)   /* Georgia */

/* Effets */
var(--shadow-light)     /* Subtile */
var(--shadow-medium)    /* Normal */
var(--shadow-heavy)     /* Prominent */
var(--transition)       /* 0.3s cubic-bezier */
var(--radius)           /* 16px */
```

---

## 📝 TYPOGRAPHIES

### Police Principale: Montserrat (Titres)

```
Font Family:  Montserrat
Weights:      700 (bold), 800 (extra-bold)
Usage:        h1, h2, h3, h4, h5, h6
Import:       Google Fonts (automatique)
```

**Styles Recommandés:**

```css
h1 {
  font-family: var(--font-headings);
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.2;
}

h2 {
  font-family: var(--font-headings);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

h3 {
  font-family: var(--font-headings);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}
```

### Police Secondaire: Open Sans (Texte)

```
Font Family:  Open Sans
Weights:      400 (regular), 600 (semibold)
Usage:        Body, paragraphs, labels
Import:       Google Fonts (automatique)
```

**Style Recommandé:**

```css
body, p, label {
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
}

strong, .bold {
  font-weight: 600;
}
```

### Police Tertiaire: Georgia (Texte Secondaire)

```
Font Family:  Georgia
Weight:       400 (regular)
Usage:        Italiques, citations, textes secondaires
Import:       System fonts (pas d'import)
```

---

## 🧩 COMPOSANTS

### 1. BUTTONS

#### Button Primary (Orange Énergie)
```html
<button class="btn btn-primary">Inscription</button>
<a href="#" class="btn btn-primary">En savoir plus</a>
```

```css
.btn-primary {
  background-color: var(--accent-color);     /* #E65100 */
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: var(--radius);              /* 16px */
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(230, 81, 0, 0.2);
  transition: all var(--transition);
}

.btn-primary:hover {
  background-color: #d94700;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(230, 81, 0, 0.3);
}
```

#### Button Secondary (Bleu Oxford)
```html
<button class="btn btn-secondary">Annuler</button>
```

```css
.btn-secondary {
  background-color: var(--primary-color);    /* #002366 */
  color: var(--white);
  border: 2px solid var(--white);
  padding: 0.8rem 2rem;
  border-radius: var(--radius);              /* 16px */
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 35, 102, 0.2);
}

.btn-secondary:hover {
  background-color: var(--white);
  color: var(--primary-color);
  transform: translateY(-3px);
}
```

### 2. CARDS

```html
<div class="card">
  <h3 class="card-title">Titre</h3>
  <p class="card-text">Description...</p>
</div>
```

```css
.card {
  background: var(--white);
  border-radius: var(--radius);              /* 16px */
  padding: 2rem;
  box-shadow: var(--shadow-light);
  border: 1px solid #f0f0f0;
  overflow: hidden;
  transition: all var(--transition);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  transform: scaleX(0);
  transition: transform var(--transition);
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-medium);
}
```

### 3. FORM INPUTS

```html
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" name="email">
</div>
```

```css
input[type="text"],
input[type="email"],
textarea,
select {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: var(--font-primary);
  transition: all var(--transition);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--accent-color);         /* #E65100 */
  box-shadow: 0 0 0 4px rgba(230, 81, 0, 0.08);
  background-color: #fafafa;
}
```

### 4. ALERTS

#### Success
```html
<div class="alert alert-success">Opération réussie!</div>
```

```css
.alert-success {
  background-color: #d4edda;
  border-left: 4px solid var(--success-color);
  color: #155724;
  padding: 1rem;
  border-radius: var(--radius);
}
```

#### Error
```html
<div class="alert alert-error">Une erreur est survenue</div>
```

```css
.alert-error {
  background-color: #f8d7da;
  border-left: 4px solid var(--error-color);
  color: #721c24;
  padding: 1rem;
  border-radius: var(--radius);
}
```

### 5. NAVIGATION

```css
.nav-menu a {
  color: var(--primary-color);               /* Bleu Oxford */
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--accent-color);    /* Orange */
  transition: width var(--transition);
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
  width: 100%;
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
```css
/* Desktop (par défaut) */
/* 1400px */

@media (max-width: 1400px) {
  /* Large screens adjustments */
}

@media (max-width: 768px) {
  /* Tablettes */
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  .grid-3, .grid-4 { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  /* Mobile */
  html { font-size: 14px; }
  .navbar { padding: 0.75rem; }
  .hero h1 { font-size: 1.5rem; }
}
```

### Mobile-First Strategy
✅ Commencer par styles mobile  
✅ Ajouter media queries pour larger screens  
✅ Testable facilement (commencer par iPhone)  

---

## 💻 CODE EXAMPLES

### Créer une Section Nouvelle

```html
<section class="bg-white">
  <div class="container">
    <div class="section-title">
      <h2>Titre Section</h2>
      <p class="section-subtitle">Sous-titre descriptif</p>
    </div>
    
    <div class="grid grid-3">
      <div class="card">
        <div class="card-icon">🎯</div>
        <h3 class="card-title">Card 1</h3>
        <p class="card-text">Description...</p>
      </div>
      
      <div class="card">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">Card 2</h3>
        <p class="card-text">Description...</p>
      </div>
      
      <div class="card">
        <div class="card-icon">⭐</div>
        <h3 class="card-title">Card 3</h3>
        <p class="card-text">Description...</p>
      </div>
    </div>
  </div>
</section>
```

### CSS pour Section Personnalisée

```css
/* Section avec gradient */
.section-special {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    #00184a 100%
  );
  color: var(--white);
  padding: 4rem 2rem;
}

.section-special h2 {
  color: var(--white);
}

.section-special .btn-primary {
  /* Hérite automatiquement */
}
```

### HTML Form avec Validation

```html
<form class="form" id="contactForm">
  <div class="form-row">
    <div class="form-group">
      <label for="nom">Nom *</label>
      <input type="text" id="nom" name="nom" required>
      <span class="form-error" id="nomError"></span>
    </div>
    
    <div class="form-group">
      <label for="email">Email *</label>
      <input type="email" id="email" name="email" required>
      <span class="form-error" id="emailError"></span>
    </div>
  </div>
  
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
```

---

## ✨ BEST PRACTICES

### ✅ À FAIRE

1. **Toujours utiliser les CSS variables**
   ```css
   /* ✅ BON */
   color: var(--primary-color);
   
   /* ❌ MAUVAIS */
   color: #002366;
   ```

2. **Respecter la hiérarchie typographique**
   ```css
   h1 > h2 > h3 > p
   ```

3. **Ombres cohérentes**
   ```css
   box-shadow: var(--shadow-light);  /* Subtil */
   box-shadow: var(--shadow-medium); /* Normal */
   box-shadow: var(--shadow-heavy);  /* Important */
   ```

4. **Border radius unifié**
   ```css
   border-radius: var(--radius); /* Toujours 16px */
   ```

5. **Transitions fluides**
   ```css
   transition: all var(--transition);
   transition: color var(--transition);
   ```

6. **Tester mobile en priorité**
   - Chrome DevTools: F12 → Toggle device toolbar
   - Commencer par 375px (iPhone SE)

### ❌ À ÉVITER

1. **Hard-coded colors**
   ```css
   ❌ background: #E65100;
   ✅ background: var(--accent-color);
   ```

2. **Font-family non centralisée**
   ```css
   ❌ font-family: 'Arial', sans-serif;
   ✅ font-family: var(--font-primary);
   ```

3. **Ombres sans structure**
   ```css
   ❌ box-shadow: 0 2px 8px #000;
   ✅ box-shadow: var(--shadow-light);
   ```

4. **Border radius inconsisté**
   ```css
   ❌ border-radius: 5px; border-radius: 12px;
   ✅ border-radius: var(--radius); /* 16px partout */
   ```

5. **Transitions random**
   ```css
   ❌ transition: 0.1s ease; transition: 0.5s linear;
   ✅ transition: var(--transition); /* 0.3s cubic-bezier */
   ```

---

## 🎯 CHECKLIST MODIFICATION

Avant de livrer une modification:

- [ ] Tous les titres en Montserrat
- [ ] Texte body en Open Sans
- [ ] Couleurs primaires uniquement: #002366 (Bleu) / #E65100 (Orange)
- [ ] Border-radius: 16px sur cards/buttons
- [ ] Ombres via variables CSS
- [ ] Transitions fluides (cubic-bezier)
- [ ] Responsive: mobile 480px, tablet 768px, desktop 1400px
- [ ] Testée sur navigateurs (Chrome, Firefox, Safari)
- [ ] Pas de hard-coded colors
- [ ] Pas d'inline font-family (sauf exceptions)
- [ ] HTML sémantique (h1, h2, h3...)
- [ ] Accessibilité: contraste AA+ pour texte

---

## 📞 QUESTIONS FRÉQUENTES

**Q: Quelle couleur pour un lien de menu inactif?**  
R: `var(--primary-color)` (#002366 - Bleu Oxford)

**Q: Comment colorer une icône importante?**  
R: `color: var(--accent-color);` (#E65100 - Orange)

**Q: Ombre pour une dropdown menu?**  
R: `box-shadow: var(--shadow-medium);`

**Q: Font pour "À propos"?**  
R: Titre = Montserrat, Texte = Open Sans

**Q: Border radius sur input?**  
R: `border-radius: 8px;` (pas le radius principal de 16px)

**Q: Couleur de focus pour formulaire?**  
R: `border-color: var(--accent-color);` (#E65100)

---

## 📚 RESSOURCES

- **Google Fonts:** https://fonts.google.com
- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **CSS Variables MDN:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Figma Design System:** (À créer)

---

**✨ Charte Graphique CAPET - Professionnelle, Moderne, Institutionnelle**

*Dernière mise à jour: 20 Janvier 2026*

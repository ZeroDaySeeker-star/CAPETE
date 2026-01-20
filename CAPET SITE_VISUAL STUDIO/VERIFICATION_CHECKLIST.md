# ✅ VERIFICATION CHECKLIST - CHARTE GRAPHIQUE APPLIQUÉE

**Date:** 20 Janvier 2026  
**Responsable:** À compléter  
**Status:** À valider  

---

## 🎯 OBJECTIF

Vérifier que la charte graphique est correctement appliquée sur l'ensemble du site CAPET.

**Durée estimée:** 30-45 minutes  

---

## 📋 PRE-CHECK

Avant de commencer:

- [ ] Fichier `style.css` bien chargé (F12 → Network)
- [ ] Pas d'erreurs console (F12 → Console)
- [ ] Navigateur à jour (Chrome 120+, Firefox 121+, Safari 17+)
- [ ] Cache vidé (Ctrl+Shift+Del ou Cmd+Shift+Delete)
- [ ] Internet connexion OK (Google Fonts chargeables)

---

## 🎨 VÉRIFICATION COULEURS

### Primary Color - Bleu Oxford (#002366)

**À voir sur:**
- [ ] Header (background logo)
- [ ] Navigation menu (links texte)
- [ ] Tous les h1, h2, h3 (couleur texte)
- [ ] Footer (background)
- [ ] Buttons secondary (fond)

**Test rapide:**
1. Ouvrir DevTools (F12)
2. Inspecter logo → Voir `color: rgb(0, 35, 102)` ✅
3. Inspecter footer → Voir `background: rgb(0, 35, 102)` ✅

- [ ] **Couleur correcte partout**

### Accent Color - Orange Énergie (#E65100)

**À voir sur:**
- [ ] Buttons primary (fond)
- [ ] Navigation underline (hover)
- [ ] Header border bottom
- [ ] Card top bar (hover)
- [ ] Links (texte)
- [ ] Footer h3 (texte)
- [ ] Form focus border

**Test rapide:**
1. Ouvrir DevTools (F12)
2. Inspecter button primary → Voir `background: rgb(230, 81, 0)` ✅
3. Inspecter header border → Voir `border-color: rgb(230, 81, 0)` ✅

- [ ] **Couleur correcte partout**

### Background Light - Slate (#F8FAFC)

**À voir sur:**
- [ ] Sections alternées (background)
- [ ] Card backgrounds (normalement blanc)
- [ ] Alternance section paire/impaire

**Test rapide:**
1. Scroller la page → Voir alternance gris clair/blanc
2. DevTools → Inspecter section paire → `background-color: rgb(248, 250, 252)` ✅

- [ ] **Alternance visible et correcte**

---

## 📝 VÉRIFICATION TYPOGRAPHIES

### Montserrat (Titres)

**À tester:**
- [ ] h1 - Titres hero (police bolder, lettres espacées)
- [ ] h2 - Titres sections (visibles, épais)
- [ ] h3 - Sous-titres (clairs)

**Test rapide:**
1. Inspecter h1 → DevTools → Computed → `font-family: Montserrat` ✅
2. Vérifier poids: `font-weight: 800` ou `700` ✅

- [ ] **Montserrat appliquée sur h1-h6**

### Open Sans (Texte Body)

**À tester:**
- [ ] Paragraphes lisibles
- [ ] Labels formulaires
- [ ] Descriptions cards

**Test rapide:**
1. Inspecter paragraphe → DevTools → `font-family: Open Sans` ✅
2. Vérifier: `font-weight: 400` ou `600` ✅

- [ ] **Open Sans appliquée sur body**

### Letter-spacing & Line-height

**À tester:**
- [ ] Titres avec espacement réduit (plus serré)
- [ ] Texte corps avec line-height > 1.6

**Test rapide:**
1. Inspecter h1 → `letter-spacing: -1px` ✅
2. Inspecter p → `line-height: 1.7` ✅

- [ ] **Espacement typographique correct**

---

## 🔘 VÉRIFICATION BUTTONS

### Button Primary (Orange)

**Visual Check:**
- [ ] Fond orange (#E65100) ✅
- [ ] Texte blanc
- [ ] Border-radius arrondi (≈16px)
- [ ] Ombre légère visible

**Interaction Check:**
1. Survoler bouton
   - [ ] Fond plus foncé (#d94700) ✅
   - [ ] Bouton monte (-3px transform) ✅
   - [ ] Ombre augmente ✅

2. Cliquer bouton
   - [ ] Feedback visuel (active state) ✅
   - [ ] Lien fonctionne ✅

**Test sur pages:**
- [ ] index.html - Boutons CTA
- [ ] admission.html - Soumettre
- [ ] contact.html - Envoyer

- [ ] **Buttons primary corrects**

### Button Secondary (Bleu)

**Visual Check:**
- [ ] Fond bleu (#002366) ✅
- [ ] Texte blanc
- [ ] Bordure blanche 2px
- [ ] Border-radius arrondi (≈16px)

**Interaction Check:**
1. Survoler bouton
   - [ ] Fond → blanc ✅
   - [ ] Texte → bleu ✅
   - [ ] Bouton monte (-3px) ✅

- [ ] **Buttons secondary corrects**

---

## 🎴 VÉRIFICATION CARDS

### Card Style

**Visual Check sur chaque page:**
- [ ] index.html - Why CAPET cards
- [ ] about.html - Values cards
- [ ] programs.html - Certifications
- [ ] levels.html - Module cards

**Pour chaque card, vérifier:**
- [ ] Border-radius: 16px ✅
- [ ] Background blanc ✅
- [ ] Ombre légère visible ✅
- [ ] Border top fin (#f0f0f0) ✅

**Interaction Check:**
1. Survoler card
   - [ ] Card monte (-6px transform) ✅
   - [ ] Ombre augmente ✅
   - [ ] Barre top gradient apparaît ✅

**Test: Tous les types de cards**
- [ ] cards.card ✅
- [ ] cards.card:hover ✅

- [ ] **Cards design correct**

---

## 📋 VÉRIFICATION FORMS

### Form Input Style

**Visual Check:**
- [ ] Border gris (#e0e0e0) 2px ✅
- [ ] Border-radius 8px ✅
- [ ] Padding suffisant ✅
- [ ] Background blanc ✅

**Focus State:**
1. Cliquer dans input
   - [ ] Border → orange (#E65100) ✅
   - [ ] Box-shadow orange léger ✅
   - [ ] Background → #fafafa ✅

2. Taper texte
   - [ ] Validation temps réel (si active) ✅
   - [ ] Pas d'erreur console ✅

**Test sur formulaires:**
- [ ] index.html - Quick contact
- [ ] admission.html - Admission form (30+ fields)
- [ ] contact.html - Contact form
- [ ] news.html - Newsletter

- [ ] **Forms inputs corrects**

### Form Labels

**Visual Check:**
- [ ] Texte bleu (#002366) ✅
- [ ] Font-weight 600 ✅
- [ ] Lisibles ✅

- [ ] **Form labels corrects**

---

## 🔗 VÉRIFICATION NAVIGATION

### Header Navigation

**Visual Check:**
- [ ] Logo bleu (#002366) ✅
- [ ] Nav links texte bleu ✅
- [ ] Header border bottom 3px orange ✅
- [ ] Header shadow visible ✅

**Interaction Check:**
1. Survoler nav link
   - [ ] Underline orange apparaît ✅
   - [ ] Texte → orange ✅
   - [ ] Smooth transition ✅

2. Cliquer nav link
   - [ ] Page change ✅
   - [ ] Active link reste orange ✅

**Mobile Check (480px):**
1. F12 → Toggle device → 375px
   - [ ] Hamburger visible ✅
   - [ ] Menu caché par défaut ✅

2. Cliquer hamburger
   - [ ] Menu déploie ✅
   - [ ] Menu enligne (flex column) ✅
   - [ ] Links cliquables ✅

- [ ] **Navigation correcte**

---

## 🏠 VÉRIFICATION HERO SECTION

**Visual Check:**
- [ ] Gradient bleu visible (#002366 → #00184a) ✅
- [ ] Titre h1 blanc, Montserrat ✅
- [ ] Subtitle lisible ✅
- [ ] CTA buttons orange & bleu ✅

**Interaction Check:**
1. Survoler button
   - [ ] Feedback visuel ✅

- [ ] **Hero section correct**

---

## 👥 VÉRIFICATION FOOTER

**Visual Check:**
- [ ] Background bleu (#002366) ✅
- [ ] Border top 4px orange ✅
- [ ] Sections h3 texte orange ✅
- [ ] Links texte blanc ✅

**Interaction Check:**
1. Survoler footer link
   - [ ] Texte → orange ✅

2. Footer responsive
   - [ ] Grid → 1 colonne à 480px ✅

- [ ] **Footer correct**

---

## 📱 VÉRIFICATION RESPONSIVE

### Desktop (1400px+)
**Check:**
- [ ] Layout complet visible ✅
- [ ] Pas de scroll horizontal ✅
- [ ] Grids multi-colonnes visibles ✅

**Pages à tester:**
- [ ] index.html ✅
- [ ] programs.html (comparison table) ✅
- [ ] gallery.html (12 items grid) ✅

### Tablet (768px)
**Check:**
- [ ] Grid 3-4 colonnes → 2 colonnes ✅
- [ ] Sections empilées ✅
- [ ] Texte lisible ✅
- [ ] Buttons pleine largeur ✅

**Pages à tester:**
- [ ] index.html ✅
- [ ] about.html (team grid) ✅

### Mobile (480px)
**Check:**
- [ ] All grids → 1 colonne ✅
- [ ] Hamburger menu visible ✅
- [ ] Buttons taille clickable (48px min) ✅
- [ ] Texte lisible (pas de zoom nécessaire) ✅
- [ ] Images responsive ✅

**Pages à tester:**
- [ ] index.html ✅
- [ ] admission.html (form full width) ✅
- [ ] gallery.html (filters responsive) ✅

- [ ] **Responsive design OK**

---

## 🎯 VÉRIFICATION PAGES SPÉCIALES

### Gallery Page
- [ ] Filter buttons responsive ✅
- [ ] 12 items grid layout ✅
- [ ] Lightbox fonctionne (click item) ✅
- [ ] Lightbox close (X button) ✅
- [ ] 4 YouTube videos responsive ✅

### Admission Form
- [ ] 30+ fields visibles/cliquables ✅
- [ ] Form validation active ✅
- [ ] Submit button responsive ✅
- [ ] FAQ expandable ✅

### Results Page
- [ ] 4 animated counters ✅
- [ ] Progress bars visibles ✅
- [ ] Stats cards layout ✅

---

## 🔧 VÉRIFICATION TECHNIQUE

### Console Check (F12 → Console)
- [ ] Pas d'erreurs JavaScript ✅
- [ ] Pas d'avertissements CSS ✅
- [ ] Pas d'erreurs 404 (images/fonts) ✅

### Network Check (F12 → Network)
- [ ] style.css chargé ✅
- [ ] main.js chargé ✅
- [ ] Google Fonts chargés ✅
- [ ] Pas de ressources bloquées ✅

### Performance Check
- [ ] Page load < 3 secondes ✅
- [ ] Scroll smooth (pas de lag) ✅
- [ ] Animations fluides (60fps) ✅

---

## 🌐 VÉRIFICATION NAVIGATEURS

Tester sur au minimum 3 navigateurs:

**Chrome/Chromium**
- [ ] Tous les tests passent ✅
- [ ] Layout correct ✅
- [ ] Animations fluides ✅

**Firefox**
- [ ] Tous les tests passent ✅
- [ ] Fonts correctes ✅
- [ ] Couleurs identiques ✅

**Safari (si Mac disponible)**
- [ ] Tous les tests passent ✅
- [ ] Pas de display bugs ✅

---

## 🔐 VÉRIFICATION SÉCURITÉ & ACCESSIBILITÉ

### Sécurité de Base
- [ ] Pas de console.log() debug ✅
- [ ] Pas de credentials en clair ✅
- [ ] Links externes = https:// ✅

### Accessibilité (WCAG AA)
- [ ] Contraste texte ≥ 4.5:1 ✅
- [ ] Titres ordonnés (h1 → h2 → h3) ✅
- [ ] Boutons texte descriptif ✅
- [ ] Forms labels associés ✅

---

## 📊 RÉSUMÉ VÉRIFICATION

### Scores
| Aspect | Status | Points |
|--------|--------|--------|
| Couleurs | ✅ | /10 |
| Typographies | ✅ | /10 |
| Buttons | ✅ | /10 |
| Cards | ✅ | /10 |
| Forms | ✅ | /10 |
| Navigation | ✅ | /10 |
| Hero | ✅ | /10 |
| Footer | ✅ | /10 |
| Responsive | ✅ | /10 |
| Pages Spéciales | ✅ | /10 |
| Technique | ✅ | /10 |
| Navigateurs | ✅ | /10 |
| **TOTAL** | **✅** | **/120** |

---

## ✅ VALIDATION FINALE

### Check Points Critiques
- [ ] Bleu Oxford sur headers ✅
- [ ] Orange Énergie sur CTAs ✅
- [ ] Montserrat sur titres ✅
- [ ] Open Sans sur texte ✅
- [ ] Border-radius 16px ✅
- [ ] Mobile responsive ✅
- [ ] Forms working ✅
- [ ] No console errors ✅

### Sign-Off
```
Validé par:  ____________________
Date:        ____________________
Observations: ____________________
```

---

## 🚀 PRÊT POUR PRODUCTION?

- [ ] Tous les checks passés
- [ ] Aucune régression visible
- [ ] Tests sur 3+ navigateurs OK
- [ ] Mobile responsive OK
- [ ] Pas d'erreurs console
- [ ] Documentation à jour
- [ ] Backup fait

**STATUS: ✅ PRÊT POUR DEPLOYMENT**

---

**Merci d'avoir validé la charte graphique!**

*Dernière mise à jour: 20 Janvier 2026*

# 📧 Configuration EmailJS pour votre Formulaire de Contact

## 🎯 Étapes à suivre

### 1️⃣ Créer un compte EmailJS (GRATUIT)

1. Allez sur **https://www.emailjs.com/**
2. Cliquez sur **"Sign Up"** (ou **"Get Started"**)
3. Créez un compte avec votre email (vous pouvez utiliser **elhandaayo@gmail.com**)
4. Vérifiez votre email et confirmez votre compte

---

### 2️⃣ Connecter votre Gmail

1. Une fois connecté, allez dans **"Email Services"** dans le menu de gauche
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **"Gmail"**
4. Cliquez sur **"Connect Account"**
5. Connectez-vous avec votre compte Gmail : **elhandaayo@gmail.com**
6. Autorisez EmailJS à envoyer des emails depuis votre compte
7. Notez le **Service ID** qui s'affiche (ex: `service_xyz123`)

---

### 3️⃣ Créer un Template d'Email

1. Allez dans **"Email Templates"** dans le menu de gauche
2. Cliquez sur **"Create New Template"**
3. Configurez votre template comme suit :

**Template Name:** Portfolio Contact Form

**Subject:**
```
Nouveau message de {{from_name}} - {{subject}}
```

**Content (Body):**
```
Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre formulaire de contact.
```

4. Dans **"To Email"**, mettez : `{{to_email}}` ou directement `elhandaayo@gmail.com`
5. Cliquez sur **"Save"**
6. Notez le **Template ID** (ex: `template_abc456`)

---

### 4️⃣ Obtenir votre Public Key

1. Allez dans **"Account"** → **"General"**
2. Vous verrez votre **Public Key** (aussi appelé User ID)
3. Notez cette clé (ex: `L9xYZ-abc123def`)

---

### 5️⃣ Mettre à jour votre code

Ouvrez le fichier : `src/app/components/contact/contact.component.ts`

Remplacez ces 3 lignes :

```typescript
private readonly EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';     // Remplacez par votre Service ID
private readonly EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // Remplacez par votre Template ID
private readonly EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // Remplacez par votre Public Key
```

**Exemple :**
```typescript
private readonly EMAIL_SERVICE_ID = 'service_xyz123';
private readonly EMAIL_TEMPLATE_ID = 'template_abc456';
private readonly EMAIL_PUBLIC_KEY = 'L9xYZ-abc123def';
```

---

## ✅ Test de votre formulaire

1. Sauvegardez tous les fichiers
2. Le serveur Angular devrait se recompiler automatiquement
3. Rafraîchissez votre navigateur
4. Remplissez le formulaire de contact
5. Cliquez sur **"Envoyer le message"**
6. Vérifiez votre boîte email **elhandaayo@gmail.com** !

---

## 📊 Plan Gratuit EmailJS

- ✅ **200 emails/mois gratuits** (suffisant pour un portfolio)
- ✅ Aucune carte bancaire requise
- ✅ Support de Gmail, Outlook, etc.

---

## 🆘 En cas de problème

Si vous avez des erreurs :

1. Vérifiez que les 3 IDs sont corrects (Service ID, Template ID, Public Key)
2. Vérifiez que votre compte Gmail est bien connecté sur EmailJS
3. Ouvrez la console du navigateur (F12) pour voir les erreurs
4. Vérifiez que vous avez bien autorisé EmailJS à accéder à votre Gmail

---

## 🔒 Sécurité

Les clés EmailJS sont publiques (côté frontend), c'est normal. EmailJS gère la sécurité via :
- Limitation de domaine (vous pouvez restreindre aux domaines autorisés)
- Limitation du nombre d'emails par mois
- CAPTCHA optionnel pour éviter le spam

---

**Besoin d'aide ?** Contactez-moi une fois que vous aurez créé votre compte EmailJS et je vous aiderai à configurer les clés ! 🚀

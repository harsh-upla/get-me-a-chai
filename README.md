# This is a next.Js app made by Harsh Upla myself . it was first completed on 26 january, 2026.

This project is hosted live here [https://get-me-a-chai-seven-virid.vercel.app/](https://get-me-a-chai-seven-virid.vercel.app/)

### So basically this is my first documentation i am writing also i am llittle weak in english writiing and speaking.so yeah lets start

### this project is created by me when i am a very beginner developer . So please Ignore some of things which i mistakenly or unknowingly added .

Tech stack of this project is

```
NEXT.JS [front-end and backend]
MongoDB [databse]
Mongoose ORM
Razorpay payment gateway
Next-Auth [authentication]
```

while other libraries like

```
react toasify [for showing toasts]
framer motion [ for animation]
```

### Deployment

- This app is deployed on vercel
- database was from mongoDb atlas free plan gave 512mb only which was enough for this project .

btw , you can see exact versions of the frameworks and pakages in package-lock.json file in root dir of this project

## This is the project file and folder structure

<pre>
get-me-a-chai
├── README.md
├── actions
│   └── userActions.js
├── app
│   ├── [username]
│   │   ├── loading.js
│   │   └── page.js
│   ├── about
│   │   ├── loading.js
│   │   └── page.js
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.js
│   │   ├── razorpay
│   │   │   └── route.js
│   │   └── test-db
│   │       └── route.js
│   ├── contact
│   │   ├── loading.js
│   │   └── page.js
│   ├── dashboard
│   │   ├── loading.js
│   │   └── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── login
│   │   ├── loading.js
│   │   └── page.js
│   ├── page.js
│   └── signup
│       └── page.js
├── bones
│   ├── blog-card.bones.json
│   └── registry.js
├── components
│   ├── ContactForm.js
│   ├── Dashboard.js
│   ├── Footer.js
│   ├── Loginpage.js
│   ├── Navbar.js
│   ├── PageTransition.js
│   ├── PaymentPage.js
│   └── SessionWrapper.js
├── db
│   └── connectDB.js
├── eslint.config.mjs
├── jsconfig.json
├── models
│   ├── Payment.js
│   └── User.js
├── next.config.mjs
├── node_modules
│    package-lock.json
├── package.json
├── postcss.config.mjs
└── public
</pre>

-- this is the basic folder structure can change over time .

## This app contains features given below

[x] Login system

- [x] JWT auth
- [ ] Payment integration
- [ ] Admin dashboard

### There are more updates coming sonn if u are a beginer just like me then u are open to contribute and contact me at this email :

```
dsharsh150@gmail.com
```

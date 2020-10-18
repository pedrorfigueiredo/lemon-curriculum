# Pedro Ramalho Figueirêdo - Lemon Curriculum

## Introduction

Lemon Curriculum is a presentation CV visualization with lemon theme based. The frontend is made in React and the backend in Node.js.
The web app is responsive, so it is easily adapted for mobiles.

Demo: 

## Install

The frontend and the backend servers are separated from each other, granting more scalability. You'll need to install and run each one separately, so they can comunicate with each other.

### Frontend

```sh
cd frontend/
npm install
```

### Backend

```sh
cd backend/
npm install
```

If you want to host your own database, you'll need to change the environment variables.

## Starting the project

### Frontend

```sh
cd frontend/
npm start
```

Frontend runs on port 3000.

### Backend

```sh
cd backend/
npm start
```

Backend runs on port 5000.

## Testing

Unit tests are implemented, so you can test your software.

### Frontend

```sh
cd frontend/
npm test
```

### Backend

```sh
cd backend/
npm test
```

## Pages

The pages are locally routed with the aid of react-router.

* Profile Page: `/`

This page contains the user profile, links to social media, about section and skills.

* Skills Page: `/skills`

This page contains the user skills.

* Experience Page: `/experience`

This page contains the user work experience.

* Education Page: `/education`

This page contains the academic life of the user.

* Certifications Page: `/certifications`

This page contains the user certifications.

## API's Endpoints

* Get the user profile: `GET /api/profile`

* Create a new profile, overwriting the old one: `POST /api/people`

```js
body: {
  name: String,
  job: String,
  linkedin: String,
  github: String,
  imageUrl: String,
  about: String,
  skills: [ String ],
  abilities: [ String ],
  experience: [
    {
      date: String,
      company: String,
      role: String,
      activities: String
    }
  ],
  education: [
    {
      title: String,
      university: String,
      date: String,
    }
  ],
  certifications: [
    {
      title: String,
      description: String 
    },
  ]
}
```
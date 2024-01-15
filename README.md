## EOS Assessment

### Social Media Aplication with nodejs backend and reactjs frontend using mongodb as database
## Stack versions
```
npm version: v10.2.4
node version: v20.11.0
mongodb version: v4.2.0
node express version: v@4.17.1
React version: v18.2.0
```
###### *You must have docker installed if you want to execute the app with one command, otherwise you need to up the backend and frontend servers individually.*

## Deploy with docker compose

```
$ docker compose up -d
```
After the server start go to `http://localhost:3000` in your browser to access the frontend.

# Stop and remove containers
```
$ docker compose down
Stopping server   ... done
Stopping frontend ... done
Stopping mongo    ... done
Removing server   ... done
Removing frontend ... done
Removing mongo    ... done
```

# Future Features and Fixes
🟩 Backend (NodeJs), Frontend (ReactJs) and Database (MongoDB) Servers

🟩 Docker

🟩 Proxy

🟩 Posts CRUD

🟩 User Auth System

🟩 User Registration

🟩 Frontend for Feed

🟨 Image to the post

🟨 User foreign key in the post

🟨 Owner can Edit Posts

🟨 Comments in post (Model, CRUD, API, routes and consuming in frontend)

🟨 Save post edit history

🟨 View Counter for Posts

🟨 Likes and dislikes in posts

🟨 Email post author when new comments in post

🟨 Edit User logged in

🟨 Create a route that generates a report containing the posts with the following fields:

a. Title;

b. Number of comments;

c. Number of views;

d. Number of likes;

e. Number of dislikes.



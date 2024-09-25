## Zoom Clone with REACT NATIVE!
This is my first Zoom clone native app developed with Expo and Next.JS to provide live video call feature in both ios and android. Video Call one friend or Group video call with as many friends as you want. 
Taken help from youtube: 
-     Sonny Sangha
Features:
- 👉 Implementing Real-time Seamless Audio and Video calling Functionality using GetStream.io
- 👉 Build real iOS & Android apps that can be launched on the Apple App Store and Google Play Store!
- 👉 Secure User Authentication and Sessions with Clerk Integration
- 👉 Using EAS to create development builds with Expo leveraging iOS/Android Native dependancies
- 👉 Building a Secure Backend with Next.js for Handling Server Requests
- 👉 TypeScript to reduce the overall number of Bugs and Errors
- 👉 Group Calling with Dynamic Participant Management and Layouts
- 👉 Implemented a 'Join Room' functionality so users can send Room ID's to other users they want to Video call with!

## Tech Stack:
- Expo
- GetStream.io
- Clerk
- NextJS
- Typescript

## Backend:
Built with NextJS to create PULL request and generate a user token. Available in the master branch.

## How to:
Clone the git repository both main and master and create and env file (.env in Expo and .env.local in NextJS) to store the get stream api key as:
-     EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
-     EXPO_PUBLIC_GET_STREAM_API_KEY=
-     EXPO_PUBLIC_API_URL= Url of NexJS hosted
-     API_GETSTREAM_PUBLISHABLE_KEY= same as EXPO_PUBLIC_GET_STREAM_API_KEY
-     API_GETSTREAM_SECRET_KEY=
And also install the dependencies:
-      npm install
-      yarn install

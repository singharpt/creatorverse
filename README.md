# WELCOME TO 👉🏿 CREATORVERSE

Submitted by: **👉🏿 Arpit Singh**

About this web app: **👉🏿 It is a simple content management interface where you can view/add/modify/delete your favourite creators.**

Tech stack used: **👉🏿 Front-End -> React, CSS, Material UI | Datbase & ORM -> Supabase**

How to run the app **👉🏿 Very Important**

1. Create an account at Supabase
2. Create a new project at Supabase
3. Create a "creators" table with columns
   1. name - varchar
   2. url - varchar
   3. description - text
   4. imageURL - varchar
   5. youtubeURL - varchar
   6. instagramURL - varchar
   7. twitterURL - varchar
4. After creating the table get your credentials
   1. API_KEY
   2. URL
5. Open the CLI: Git clone the repo: https://github.com/singharpt/creatorverse.git
6. Run command: npm install (to install the node packages)
7. Once the project directory is visible create a .env file and add your credentials you got from supabase
   1. REACT_APP_API_KEY=your_key
   2. REACT_APP_URL=your_url
8. Make sure you add .env to .gitignore so that you don't expose any sensitive data
9. Run command: npm start
10. Interact with the web interface and enjoy.

Time spent: **👉🏿 12** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [-] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [X] User can add social links for creators.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<!-- 👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' /> -->

<!-- Replace this with whatever GIF tool you used! -->

GIF created with ... 👉🏿 GIF tool here

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

## License

Copyright [👉🏿 2023] [👉🏿 Arpit Singh]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

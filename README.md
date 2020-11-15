# Here listen

![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoickR5eWxpT0U5WHFBM0pvMlgvYzRROGRWNWQ0MDl6d0xYSTRrQzdmT1VJWm12N1dxTzVxejRReUQ1SktPeXE4THZJTmJMS3F5Q1U4VjFWZkVXRG94cnR3PSIsIml2UGFyYW1ldGVyU3BlYyI6IjNCVWJPMnVuQWhmM3NkV0MiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

🤔🤔🤔 I don't know why this isn't working ^ It passes in codebuild?
<br/>
Guess.. I'll switch it to CircleCi
<br/>
<br/>
Anyways....
<br/>
<br/>
Here listen is a microservice app that uses Alexa. Well... soon to use Alexa. This is a boilerplate as of now but it's already deployable with codebuild using ecs.
<br/>
But this project is to deliver important notices to an online bussiness or ongoing projects.

## Example

<ins></ins>
Say you have a project or a team and you want them to be informed about what's going on? 🤔

With Here listen you simply say 🗣️

"Hey Alexa ... Open Here Listen"
<br/>

"Tell the bois we don't have work tomorrow"

"Tell the bois I hope you have added Continous integration! 😡"

### Features for the future

- Maybe we can add an Emoji to comments
  "Emojis are cool"
- Workflows are cool

### Technologies

Here listen uses a number of open source projects to work properly:

- [React] - An awesome front end libary
- [Docker] 🐳 - To keep our application containerized from this updating Era
- [Aws] - A varity of services to make our web app fast and add crazyiness
- [Terraform] Cause aws is massive and setting it up is a hazzel. So we use this!
- [node.js] - Evented I/O for the backend
- [Express] - Fast node.js network app framework

# Want to contribute? Great!

It's ok don't be afraid to contribute to this project is in its early stages! Right now it's just suppose to login and logout. To get this up and running. Docker 🐳 will help you. It's made to run in your os without troubles! Head over to [Docker](https://www.docker.com/products/docker-desktop) and pick your operating system!

### Installation

<ol>
<li>Download Docker</li>
<li>Download this project</li>
<li>Go to this project in Terminal or CMD</li>

</ol>

## (Unix Users)

```
cd here-listen
export REACT_APP_USERS_SERVICE_URL=http://localhost:5001/
docker-compose up

// Also don't Forget to do!

docker-compose down

// Your code will not update if you don't do this!

// Also beware docker will eat your memory i have stuff to help you at the end of this Readme.md
```

## (Windows 10 pro Users)

You'll probably run into a FileSharing error because windows loves protecting you!
<br/>

```
Docker.Core.DockerException Filesharing has been cancelled
```

here is a link to fix this
<br/>
[file-share-error]
Bacially go to the Docker app ->dashboard ->click the setting wheel -> resources-> filesharing
then add your working directory

<br/>
then...

```
cd here-listen
SET  REACT_APP_USERS_SERVICE_URL=http://localhost:5001/
docker-compose up

// Also don't Forget to do!

docker-compose down

// Your code will not update if you don't do this!

```

Thats it !😄

## Note Docker will eat up your ssd or hdd

You can fix this in the resource and accumalate how much memory docker needs
personally i do 16gb

## Also to delete docker images

This site will help alot

- [free my memory from docker evils hands link](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

## TEST IT 🧑‍🔬

[localhost:3007](http://localhost:3007) For Client
<br/>

[localhost:5001](http://localhost:5001) For User Server

This project will virtualize itself in a container and Install all the dependencies and devDependencies to start the application.

## License

MIT

[file-share-error]: https://stackoverflow.com/questions/60754297/docker-compose-failed-to-build-filesharing-has-been-cancelled
[docker]: https://www.docker.com
[terraform]: https://www.terraform.io/
[express]: http://expressjs.com
[react]: https://reactjs.org
[aws]: https://aws.amazon.com
[node.js]: https://nodejs.org/

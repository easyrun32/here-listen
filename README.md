# Here listen

[![<easyrun32>](https://circleci.com/gh/easyrun32/here-listen.svg?style=svg)](https://app.circleci.com/pipelines/github/easyrun32/here-listen?branch=main)

🤖 [Alexa-repo](https://github.com/easyrun32/here-listen-alexa) Alexa repo code on Aws Lambda

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
export REACT_APP_USERS_SERVICE_URL=http://localhost:5001
// You can check if this work by doing
env

// For first time users
npm run starting


// then start up your environment with
npm run build


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
// For first time users
npm run starting

SET  REACT_APP_USERS_SERVICE_URL=http://localhost:5001

// To check all your env type

SET

// then start up your environment with

npm run build

```

Thats it !😄

## Note Docker will eat up your ssd or hdd

You can fix this in the resource and accumalate how much memory docker needs
personally i do 16gb

## Also to delete docker images

This site will help alot. Or you can clean docker by doing this just clears docker dangling volume

```
npm run clean

```

- [free my memory from docker evils hands link](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

## TEST IT 🔎 🔬

[localhost:3007](http://localhost:3007) For Client
<br/>

[localhost:5001](http://localhost:5001) For User Server

This project will virtualize itself in a container and Install all the dependencies and devDependencies to start the application.

## Infrastructure setup

Fill in all terraform information in terraform.example.tfvars

and rename to terrafrom.tfvars

MAKE SURE YOU DONT PUT THAT INTO GITHUB

After you created codebuild within aws

look for -> with repository with my github, check that and look for your git

DO NOT DO PUBLIC REPOSITORY otherwise the below info will not show.

- enabled report build statuses

- Under Primary source webhook events

- Rebuild every time a code change is pushed to this repository

^ important cause

ecs task definition will update the code otherwise nothing will happen

Then look for the role you made with codebuild !

- insert these policy names for codebuild

* AmazonS3FullAccess
* AmazonECS_FullAccess
* AmazonEC2ContainerRegistryPowerUser

This is for codebuild to have permissions to well... ecs..s3....

For S3 the reason you need a policy name well its cause i stored my dockerhub personal token in s3

https://www.docker.com/blog/docker-hub-new-personal-access-tokens/

so.. go grab that token off that website and create a file within s3
call it .docker.key

thats why thats there in buildspec.yml

it basically means log with aws create a copy from s3 and login with it

`- aws s3 cp s3://docker-token/.docker.key .docker.key`

And login with the token

`docker login -u {your_username} --password-stdin < .docker.key `

remove it cause spies are watching...
`docker rm .docker.key`

Some terraform code is moduled meaning it's from a terraform libary.
Ecs_cluster is from a libary i used

Then do

```
cd /terraform

terraform init

ssh-keygen -t rsa -b 4096 -C {Your_email} -N '' -f ./{Name_of_file}

```

- You should get two files
- One that says {Name_of_files}.pub and the other one {Name_of_file}
- change the {Name_of_file} to {Name_of_file}.pem
- upload the .pem file to aws key pair to ssh into ec2 instance

```
terraform apply

```

You'll probably be very disapointed at looking at a blank screen.
The reason is because auth0 within react says we don't support http
only https.The quickest way to fix this is by buying a domain from aws
or you could go to hostgator and buy cheap domains for 4\$ which will be a lot of configurations. Well not really i'll leave that to you to google search it.

But i bought a 12\$ domain from aws which created a hosted zone
so if you do that
all you have to do is go to aws certificate manager create a certificate for your {Domain} next next next when you look through the certificate manager look for create record in route 53

then go to route 53 and click the hosted zone. Create a record
define a simple record no need to put a name for it just look for alias
to application load balancer, chose region, and chose the the application load balancer

whew maybe that was too much but welcome to Devops world in AWS

benefits are massive scaling so you could create ec2 instances in any region
like Tokoyo or like scale your ec2 instance to some outragous ssd
but that will probably cost you more than 1,000 dollars a month....

## License

MIT

[file-share-error]: https://stackoverflow.com/questions/60754297/docker-compose-failed-to-build-filesharing-has-been-cancelled
[docker]: https://www.docker.com
[terraform]: https://www.terraform.io/
[express]: http://expressjs.com
[react]: https://reactjs.org
[aws]: https://aws.amazon.com
[node.js]: https://nodejs.org/

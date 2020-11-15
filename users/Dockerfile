# Dockerfile for node.js tellem

# FROM node:8-alpine
#New
FROM node:14-alpine
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#New
# RUN npm install npm@7

RUN npm install --only=production


# Bundle app source
COPY . .

CMD [ "npm", "start" ]
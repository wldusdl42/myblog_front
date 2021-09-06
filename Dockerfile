FROM node:12.12.0-alpine
MAINTAINER Jiyeon Kim <wldusdl34@gmail.com>

# ENV NODE_ENV=production
# WORKDIR /app
# COPY package.json /app
# COPY ["package.json", "package-lock.json*", "./"] /app
# RUN npm install --production
# COPY . .

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN npm install
RUN npm i css-loader

# Bundle app source

EXPOSE 8080

CMD ["npm", "start"]
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]
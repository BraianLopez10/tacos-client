FROM node:12.18.3-alpine3.10
RUN mkdir -p /usr/app
WORKDIR /usr/app
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]
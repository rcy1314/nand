FROM node:16

# Create app directory
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
Copy node_modules/ node_modules/

Copy site/ site/

COPY . .

EXPOSE 3000

# CMD [ "node", "app.js" ]
RUN node app.js

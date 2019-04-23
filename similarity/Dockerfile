FROM node:10.11.0

EXPOSE 3000

# Install all dependencies of the current project.
COPY package.json package.json
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
CMD npm start
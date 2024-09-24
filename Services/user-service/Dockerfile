# Use Node.js base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the service port (ensure this matches the port in your app)
EXPOSE 5000

# Run the application
CMD ["npm", "start"]

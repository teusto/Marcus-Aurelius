# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the rest of the source code
COPY . .

# Ensure you have installed the web3 or ethers.js package for blockchain interaction
RUN npm install web3 ethers

# Expose the service port (ensure this matches the port in your app)
EXPOSE 6000

# Start the service
CMD ["npm", "start"]

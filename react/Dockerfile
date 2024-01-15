# Use an official Node.js image as the base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json /app/
RUN npm install

# Copy the rest of the application code
COPY . /app/

# Build the React app
RUN npm run build

# Expose the port that the React app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

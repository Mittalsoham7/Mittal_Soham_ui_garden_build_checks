FROM nginx:alpine

# Copy the built Storybook static files to nginx html directory
COPY storybook-static /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

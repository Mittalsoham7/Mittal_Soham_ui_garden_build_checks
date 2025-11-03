FROM nginx:alpine

# copy the built Storybook static files to nginx html directory
COPY storybook-static /usr/share/nginx/html

# Expose port 8083 (forgot last time, so not forget again)
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

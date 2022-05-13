FROM php:8.1-apache
LABEL project jeopardy

# Composer install
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
# Node Setup
COPY --from=node:latest /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:latest /usr/local/bin/node /usr/local/bin/node
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

RUN a2enmod rewrite

RUN apt-get update && apt-get install -y \
	git \
	zip

WORKDIR /var/www

COPY jeopardy-front-end ./
RUN composer install

RUN npm install
RUN npm run-script build

RUN rm -r /var/www/html && ln -sF /var/www/build /var/www/html

WORKDIR /var/www/jeopardy-front-end

EXPOSE 80
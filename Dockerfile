FROM php:8.1-apache
LABEL project jeopardy

# Composer install
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN apt-get update && apt-get install -y \
	git \
	zip

WORKDIR /var/www

COPY jeopardy-front-end ./
RUN rm -r /var/www/html && ln -sF /var/www/jeopardy-front-end/public /var/www/html

RUN composer install

WORKDIR /var/www/jeopardy-front-end

EXPOSE 80
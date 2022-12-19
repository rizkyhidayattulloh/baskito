# Baskito

## About Baskito

Baskito stands for Backend Starter Kit Task Force that [Timedoor Backend Developer](https://github.com/backend-timedoor) built to improve development time for the admin page with a standardized tech stack and components built on:

- [Laravel 9](https://laravel.com/docs/9.x).
- [Vue 3](https://vuejs.org/guide/introduction.html).
- [Inertia](https://inertiajs.com).
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction).
- [Stisla](https://github.com/stisla/stisla).

## Prerequisites

Before starting a Baskito project, you need to install this program on your computer to match Baskito tech stack.

- ```php : ^8.0.2``` [docs](https://www.php.net)
- ```composer : ^2.0.0``` [docs](https://getcomposer.org/doc)
- ```nodejs : ^16.0.0``` [docs](https://nodejs.org)

## Dependencies

Besides the package that is already built-in with Laravel, here's list of installed dependencies within this project.

- ```inertiajs/inertia-laravel : ^0.6.4``` [docs](https://inertiajs.com)
- ```innocenzi/laravel-vite: 0.2.*``` [docs](https://laravel-vite.dev/guide/extra-topics/inertia.html)
- ```laravel/ui: ^4.1``` [docs](https://github.com/laravel/ui)
- ```tightenco/ziggy: ^1.5``` [docs](https://github.com/tighten/ziggy)
- ```barryvdh/laravel-debugbar: ^3.7``` [docs](https://github.com/barryvdh/laravel-debugbar)

## Installation

### PHP

First, you need to install all PHP package requirements.

```bash
composer install
```

Copy and paste the `.env.example` file into `.env` this project and generate `APP_KEY`.

```bash
cp .env.example .env

php artisan key:generate
```

Create and set your database configuration in the `.env` file then run the database migration and seeder.

```bash
php artisan migrate --seed
```

### Javascript

Install Javascript package dependencies.

```bash
npm install
```

Run Vite for development.

```bash
npm run dev
```

Build Vite.

```bash
npm run build
```

Set `DEV_SERVER_URL` setting in `.env` to match your local project URL and add a port for Vite to it. If you use HTTPS for `DEV_SERVER_URL` read the instruction below.

If you're using Laragon and place it not in the default folder (`C:\laragon`), you must specify the SSL key and certificate file path in the `DEV_SERVER_KEY` and `DEV_SERVER_CERT` settings in the `.env`

```.env
DEV_SERVER_URL=https://baskito.test:4000
DEV_SERVER_KEY=D:\laragon\etc\ssl\laragon.key
DEV_SERVER_CERT=D:\laragon\etc\ssl\laragon.crt
```

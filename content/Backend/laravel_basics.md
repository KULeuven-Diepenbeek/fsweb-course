---
title: "Laravel: basics"
weight: 2
author: Arne Duyver
draft: false
---

# Laravel
## Why Laravel?
- framework -> templates
  - faster
  - libraries
  - MVC model
  - very popular option -> a lot of information
- more secure -> because php is datasensitive
  - built-in security features
  - automatic integration with database

## Install Laravel
##### Edit php.ini file
**line 962**
uncomment (delete semicolon in fromt) extention=zip
**line 930**
uncomment extention=fileinfo
**line 942**
uncomment extention=openssl
**line 944**
uncomment extention=pdo_mysql

##### Add php.exe to path variables (new system variable)
name: PHP
location: C:\xampp\php\php.exe

##### Add dependency manager: [Composer](https://getcomposer.org/download/)
download .exe
add to path: C:\ProgramData\ComposerSetup\bin

##### Install Laravel using Composer
`$ composer global require laravel/installer`

##### Reinstall XAMPP and move project into Dashboard -> Laravel
first delete all files inside the dashboard directory

##### Create laravel project in your project folder
`$ laravel new <projectName>`
starterkit -> none
Pest -> 0 (testing framework, PHPUnit is older)
Git -> no

db -> mysql (via XAMPP)
default database migrations -> yes (make sure MySQL server is turned on in XAMPP)

##### Front page is in public/index.php

##### Setup database
inside phpmyadmin -> new database (give same name as laravel project '-' becomes '_').
OR set name in `.env` file

(`$ php artisan migrate`)

creates tables that integrate with laravel !

##### (Start webserver without apache: inside project folder)
`$ php artisan serve`

##### Intro into Laravel TodoList
resources/views/welcome.blade.php
routes/web.php
public/index.php

## Create object and db migration
`$ php artisan make:model <modelName> -m`
`$ php artisan migrate`
check migration in `/database/migrations/`

update migration so it interacts with table correctly (set correct model properties)
model will be in `app/model`

## .blade placeholders/variables
"{{ route('saveItem') }}"

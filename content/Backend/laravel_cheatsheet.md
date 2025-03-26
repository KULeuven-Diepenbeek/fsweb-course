---
title: "Laravel Cheatsheet"
weight: 5
author: Arne Duyver
draft: false
---

```bash
# CREATE PROJECT
$ laravel new <projectName>

starterkit -> none
Pest -> 0 (testing framework, PHPUnit is ouder) 
Git -> no 

db -> mysql (via XAMPP)
default database migrations -> yes (make sure MySQL server is turned on in XAMPP)

# START SERVER
$ php artisan serve

# TEST DATABASE CONNECTION
$ php artisan migrate:status

# CREATE CONTROLLER
$ php artisan make:controller ControllerName

# CREATE MODEL with MIGRATION
$ php artisan make:model ModelName -m
## With Controller
$ php artisan make:model ModelName -mc
## With Resource Controller
$ php artisan make:model ModelName -mcr

# MIGRATE DATABASE CHANGES
$ php artisan migrate

# INSTALL API
$ php artisan install:api

# CHECK ROUTES
$ php artisan route:list
```
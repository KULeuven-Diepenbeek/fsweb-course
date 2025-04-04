---
title: "Laravel Cheatsheet"
weight: 7
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
# LAST MIGRATION ROLLBACKEN
$ php artisan migrate:rollback
# LAST MIGRATION ROLLBACKEN van een specifieke migration table
$ php artisan migrate:rollback --path=database/migrations/2025_03_26_111505_create_students_table.php

# INSTALL API
$ php artisan install:api

# CHECK ROUTES
$ php artisan route:list

# CREATE FACTORY for an existing model
$ php artisan make:factory ModelNaamFactory --model=ModelNaam

# CREATE SEEDER for an existing model
$ php artisan make:seeder ModelNaamSeeder
# SEED THE DATABASE according to your ALL seeders
$ php artisan db:seed
# SEED THE DATABASE according to a specific seeder
$ php artisan db:seed --class=NaamSeeder

# CREATE A STANDALONE MIGRATION TABLE
$ php artisan make:migration create_table_name_table

# ACTIVATE STORAGE
$ php artisan storage:link
```
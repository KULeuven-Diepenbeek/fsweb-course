---
title: "Laravel: code and commands"
weight: 3
author: Arne Duyver
draft: false
---

## Important commandline commands
```bash
# Create new Laravel project
laravel new <projectName>

# Migrate creation tables
php artisan migrate

# Start project op poort 8000
php artisan serve

# Create new Laravel model with options
php artisan make:model
# Create just a new Laravel model
php artisan make:model <modelName>

# Create new Laravel migration 
php artisan make:migration create_<modelName>withS_table

# Create new Laravel controller
php artisan make:controller <controllerName>

# Create new Laravel seeder
php artisan make:seeder <seederName>
# Seed db 
php artisan db:seed --class=<SeederClassName>

# Generate a factory for a model
php artisan make:factory <FactoryName> --model=<ModelName>
```

## Connect to supabase

Enable/uncomment extentions via `php.ini` file:
- pdo_pgsql.so
- pgsql.so

Set database default in `confid->database.php`:
- `'default' => env('DB_CONNECTION', 'pgsql'),`

Edit `.env` file:
```yml
DB_CONNECTION=pgsql
DB_URL=<supabase->project->configuration->Database->connectionString->URI>
DB_PASSWORD=supabasePassword
```
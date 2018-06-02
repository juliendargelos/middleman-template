# Middleman Project Template

A [Middleman](https://middlemanapp.com) template.

## Usage

```bash
middleman init MY_PROJECT_FOLDER -T juliendargelos/middleman-template
```

## Features

- **Middleman project extension**
  Rename the `lib/middleman_app.rb` extension file and the class it contains with the name of your project. Then use it for adding custom Middleman features to your project and activate it in `config.rb`:

  ```ruby
    activate :middleman_app # Replace with the name you gave you gave to your extension
  ```

- **Helper module**
  Find it in `helpers/application_helper.rb` and add your helpers here. You can create other helper modules under `helpers/`, they will be loaded automatically.

- **Yarn/NPM**
  Use Yarn or NPM to manage your dependencies from `package.json`.


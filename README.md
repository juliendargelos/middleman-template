# Middleman Project Template

A [Middleman](https://middlemanapp.com) template.

## Usage

```bash
middleman init MY_PROJECT_FOLDER -T juliendargelos/middleman-template
```

## Features

- **Middleman project extension**
  The template creates an empty Middleman extension in `lib/APP_NAME.rb`. Use it to add custom features to your project and activate it in `config.rb` by uncommenting `activate :APP_NAME`

- **Helper module**
  Find it in `helpers/application_helper.rb` and add your helpers here. You can create other helper modules under `helpers/`, they will be loaded automatically.

- **Yarn/NPM**
  Use Yarn or NPM to manage your dependencies from `package.json`.

- **Component oriented Javascripts with ECMAScript 6**
  Create your javascript components under `source/javascripts/application` with the extension `.js.es6` so you can use ES6. Extend `Component` (`source/javascripts/lib/component.js.es6`) to create a basic component, and extend `Component.Element` (`source/javascripts/lib/component/element.js.es6`) to create a DOM element component.
  Store your classes in the Application namespace so they are automatically initialized on load, you can nest namespaces to define init order:
  ```javascript
    // source/javascripts/application/button.js.es6

    Application.Button = class Button extends Component.Element {
      // This will be called on instantiation
      load() {
        super.load()
        this.on('click touchstart', () => alert('Hey!'))
      }

      update() {
        super.update()
        if(this.visible) console.log('A button appeared in the viewport')
      }

      static get selector() {
        return '.button'
      }

      init() {
        super.init()
        this.instanciate() // This will use selector to instanciate buttons
        Application.on('scroll', () => this.update()) // This will update all buttons
      }
    }
  ```

  ```javascript
    // source/javascripts/application/button/icon.js.es6

    Application.Button.Icon = class Icon extends Component.Element {
      // ...
    }
  ```

  Discover all built-in javascript features under `source/javascripts/lib/`.

- **Component oriented Styleheets with SASS**
  Create your css components in sass under `source/stylesheets/application`, They will be automatically imported.

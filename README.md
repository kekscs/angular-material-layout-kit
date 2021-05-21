# :rocket: Material Design Layout Kit for Angular

**Popular layouts for Material Design web applications.**

The idea here is to provide ready to use Angular templates with typical [Material Design](https://material.io/) layout and navigational components.

<p align="center">
  <a href="http://angular-layouts.keks-code.com/" target="_blank">
    <img src="https://kekscs.blob.core.windows.net/dev/material-layout-kit/demo-btn.png" alt="DEMO" title="DEMO">
  </a>
</p>

## :heavy_check_mark: Key Characteristics

* Built using [Angular Material](https://material.angular.io/) and Google's [Material Design Components for web](https://material.io/develop/web) (or MDC-Web).
* You don't have to use MDC-Web for the rest of your application. MDC-Web fluently integrates with other CSS frameworks/components because it doesn't define any global CSS styles. And because the library is very modular, only used components will be bundled.
* Each layout template is built to work on phone, tablet and desktop.
* Some templates adapt layout and navigation based on screen size. Layout and behavior at each breakpoint is mostly based on [Material Studies examples](https://material.io/design/material-studies/about-our-material-studies.html). For example:
  * Navigation hidden on smaller screens gets revealed when additional space becomes available.
  * Navigational components can transform from one format to another at a designated breakpoint: side navigation can transform into tabs on a larger screen.
* Theming is done via Angular Material's [theming API](https://material.angular.io/guide/theming). Project includes a custom theme and an example of how to integrate it with [MDC Theming API](https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme). Changing colors, fonts, shapes is as easy as setting SASS variables.


## Usage

### Copy layout code to an existing Angular app

Adding _Material Design Components for Web_:
1. Run `yarn add material-components-web` or `npm install material-components-web`. The package includes all MDC components/APIs. Don't worry,
only necessary parts will be bundled into your application.
2. Somewhere in your application create a file - _material-components-web/styles.scss_. Usually it goes to the folder _/src/vendor/_.
3. Copy code from this file - https://github.com/material-components/material-components-web/blob/master/packages/material-components-web/material-components-web.scss. This is root SCSS file which includes all the MDC components.
4. Now comment all the lines in the file. Leave only components needed for a selected layout. Each layout requires only some subset of MDC components. See layout description for a list of required components.
5. Add the following line to your root SCSS file, or to a separate vendor root SCSS file if you have it:

   `@use 'src/vendor/material-components-web/styles' as mdc;`.

   Note: the line should go before any `@include` command.
6. What about Roboto font and Material icons? These components are optional, only if used.


Steps:
1. Clone the repo, or download the latest version from [Releases](https://github.com/kekscs/angular-material-layout-kit/releases).
2. Copy the necessary layout component files to your app. Layouts can be found in [/src/app/layouts](https://github.com/kekscs/angular-material-layout-kit/tree/master/src/app/layouts) folder.
3. Import layout into your _src/app/app-routing.module.ts_ file:
```ts
import { Layout101Component } from './layouts/layout101/layout101.component'
```
4. Configure layout for a route like this:
```ts
  {
    path: 'home',
    component: Layout101Component,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
```


### Use **angular-material-layout-kit** as a starter template

Go to [Releases](https://github.com/kekscs/angular-material-layout-kit/releases), download the latest version and unpack it. Rename the folder, change package name. Use it as a starting point for your new web app:

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:4200
yarn start

# build for production with minification
yarn build
```






# Application Title: A Description
An app intended for personal trainer to keep track of their clients. Helps to keep track of their workouts.

## Important Links

- [Deployed API] https://dashboard.heroku.com/apps/mighty-brook-13806
- [Deployed Client] https://tukrong.github.io/atenx-client/

GitHub repo-
AtenX-front-end: https://github.com/tukrong/atenx-client
API: https://github.com/tukrong/api-atenx

## Planning Story

- Create the user authentication with back end.
- Create the html page.
- Let user be able to create a client, update a client, remove a client and get all their clients along with their exercise.
- User should be able to log out.
- User should be able to log back in and get all their clients.


### User Stories

- As a user I want to create a user using email to sign up.
- As a user I want sign in using my email and password.
- As a user I want to sign in and be able to create a client and exercise.
- As a user I want to sign in and be able to update a client and exercise.
- As a user I want to sign in and be able to remove a client and exercise.
- As a user I want to be able to change my password after logging in.
- As a user I want to sign out.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- Handlebars

### Unsolved Problems

- Make the layout and design
- Have the nav bar on top.
- Have a table to list all of the clients

### Future planning
- Future design will be included in my wire frames.
- Design for it to look minimal
- Use React to create the app

## Images


### Styles

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

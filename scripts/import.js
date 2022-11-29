
// import scripts


const SCRIPTS = [
  `/scripts/header-footer.js`
]

SCRIPTS.forEach((script) => {
  $.getScript(script);
})

// import stylesheets
const STYLESHEETS = [
  `<link rel="stylesheet" href="/assets/stylesheets/site.css">`,
  `<link rel="stylesheet" href="/assets/stylesheets/fonts.css">`,
  `<link rel="stylesheet" href="/assets/stylesheets/header.css">`,
  `<link rel="stylesheet" href="/assets/stylesheets/footer.css">`,
  `<link rel="stylesheet" href="style.css">`
]

STYLESHEETS.forEach((stylesheet) => {

  $('head').append(stylesheet);
  
})
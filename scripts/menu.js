const menu = `
<div class="navbar">
    <nav>
      <a href="#work">work</a>
      <a href="/index.html">tin le</a>
      <a href="#info">info</a>
    </nav>
    <div class="divider"></div>
  </div>
`
let main = document.querySelector('main');
main.insertAdjacentHTML("afterbegin", menu);


console.log("hello")
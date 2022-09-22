class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="footer-container">
      <div class="footer-logo">
        <a href="#">
        <img src="./src/images/logo.svg" alt="logo" />
      </a>
      </div>
      <ul class="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
        <ul class="socials">
          <li>
            <a href="#"
              ><img src="./src/images/icons/github.svg" alt="github icon"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="./src/images/icons/twitter.svg" alt="twitter icon"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="./src/images/icons/linkedin.svg" alt="linkedin icon"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    </footer>
      `;
  }
}

customElements.define(`footer-component`, Footer);

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav>
            <div class="logo">
            <img src="./src/images/logo.svg" alt="logo" />
            </div>
            <button type="button" class="hamburger">
            <img src="./src/images/icons/hamburger.svg" alt="menu icon" />
            </button>
        </nav>
    `;
  }
}

customElements.define(`navbar-component`, Navbar);

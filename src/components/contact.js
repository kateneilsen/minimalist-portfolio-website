class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="contact" id="contact">
      <div class="contact-text">
        <h1>Interested in doing a project together?</h1>
        <button class="secondary">Contact Me</button>
      </div>
    </section>
      `;
  }
}

customElements.define(`contact-me`, Contact);

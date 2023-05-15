import { LitElement, html } from 'lit';

class AddressForm extends LitElement {
  static get properties() {
    return {
      addressLine1: { type: String },
      addressLine2: { type: String },
      landmark: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      zip: { type: String },
    };
  }

  constructor() {
    super();
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.landmark = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.zip = '';
  }

  render() {
    return html`
      <h2>Address Form</h2>
      <form @submit="${this.handleSubmit}">
        <label for="addressLine1">Address Line 1:</label>
        <input id="addressLine1" type="text" .value="${this.addressLine1}" @input="${this.handleInputChange}" required>

        <label for="addressLine2">Address Line 2:</label>
        <input id="addressLine2" type="text" .value="${this.addressLine2}" @input="${this.handleInputChange}">

        <label for="landmark">Landmark:</label>
        <input id="landmark" type="text" .value="${this.landmark}" @input="${this.handleInputChange}" required>

        <label for="city">City:</label>
        <input id="city" type="text" .value="${this.city}" @input="${this.handleInputChange}" required>

        <label for="state">State:</label>
        <input id="state" type="text" .value="${this.state}" @input="${this.handleInputChange}" required>

        <label for="country">Country:</label>
        <input id="country" type="text" .value="${this.country}" @input="${this.handleInputChange}" required>

        <label for="zip">Zip:</label>
        <input id="zip" type="text" .value="${this.zip}" @input="${this.handleInputChange}" required>

        <button type="submit">Submit</button>
      </form>
    `;
  }

  handleInputChange(event) {
    const inputName = event.target.id;
    this[inputName] = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    const addressData = {
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      landmark: this.landmark,
      city: this.city,
      state: this.state,
      country: this.country,
      zip: this.zip,
    };
    this.saveAddressToLocalStorage(addressData);
  }

  saveAddressToLocalStorage(addressData) {
    const existingAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    existingAddresses.push(addressData);
    localStorage.setItem('addresses', JSON.stringify(existingAddresses));
    this.clearForm();
    console.log('Address saved to local storage:', addressData);
  }

  clearForm() {
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.landmark = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.zip = '';
  }
}

customElements.define('address-form', AddressForm);

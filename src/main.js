import {LitElement, html} from 'lit';

import './employee-data';
import './address';

class HomePage extends LitElement {
  render() {
    return html`
      <employee-form>  </employee-form>
      <!-- <address-form></address-form> -->
    
    
      
    `;
  }
}
customElements.define('home-page', HomePage);

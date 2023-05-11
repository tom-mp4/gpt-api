import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`

      <main class="main">
        <img src="/dog.png" class="header-image" />
        <h3>Name my pet</h3>
        <form @click=${this._onClick}>
          <input
              type="text"
              name="animal"
              placeholder="Enter an animal"
              value={animalInput}
              <!--onChange={(e) => setAnimalInput(e.target.value)}-->
          />
          <input type="submit" value="Generate names" />
        </form>
        <div class="respond">{result}</div>
      </main>
      </div>
      
      <!--<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>-->
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    @font-face {
      font-family: "ColfaxAI";
      src: url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff2)
      format("woff2"),
      url(https://cdn.openai.com/API/fonts/ColfaxAIRegular.woff) format("woff");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "ColfaxAI";
      src: url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff2) format("woff2"),
      url(https://cdn.openai.com/API/fonts/ColfaxAIBold.woff) format("woff");
      font-weight: bold;
      font-style: normal;
    }
    .main,
    .main input {
      font-size: 16px;
      line-height: 24px;
      color: #353740;
      font-family: "ColfaxAI", Helvetica, sans-serif;
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 60px;
    }
    .main .icon {
      width: 34px;
    }
    .main h3 {
      font-size: 32px;
      line-height: 40px;
      font-weight: bold;
      color: #202123;
      margin: 16px 0 40px;
    }
    .main form {
      display: flex;
      flex-direction: column;
      width: 320px;
    }
    .main input[type="text"] {
      padding: 12px 16px;
      border: 1px solid #10a37f;
      border-radius: 4px;
      margin-bottom: 24px;
      outline-color: #10a37f;
    }
    .main ::placeholder {
      color: #8e8ea0;
      opacity: 1;
    }
    .main input[type="submit"] {
      padding: 12px 0;
      color: #fff;
      background-color: #10a37f;
      border: none;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
    }
    .main .result {
      font-weight: bold;
      margin-top: 40px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}

import { miro } from "./constants";
import "./style.css";
miro.onReady(() => {
	// eslint-disable-next-line
	const lock: string = require("./icons/lock.svg");
	document.body.innerHTML = `
    <div class="auth-modal-wrapper">
      <div class="auth-modal">
        <h1>${lock} You need to authorize this plugin first</h1>
        <button class="button button-primary">Authorize</button>
        <p>hey!... come back here when you are done!</p>
      </div>
    </div>
  `;
	window.addEventListener("click", () => {
		miro.authorize({ response_type: "token" }).then((code: string) => {
			if (code) {
				miro.board.ui.closeModal();
			}
		});
	});
});

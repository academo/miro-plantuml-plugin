import { APP_ID, miro } from "./constants";
import CodeFlask from "codeflask";
import plantumlEncoder from "plantuml-encoder";
import "./style.css";

miro.onReady(async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const widgetId = urlParams.get("widget");

	new Editor(widgetId);
});

class Editor {
	widgetId: string;
	editor: CodeFlask;

	constructor(widgetId: string) {
		this.widgetId = widgetId;
		this.editor = new CodeFlask("#editor", { language: "Markup" });
		this.init();
	}

	async init() {
		const currentCode = await this.getWidgetCode(this.widgetId);

		this.editor.updateCode(currentCode);
		document
			.getElementById("save")
			.addEventListener("click", this.handleSave.bind(this));
	}

	async getWidgetCode(widgetId: string): Promise<string> {
		let currentCode = "";
		if (widgetId === "new") {
			currentCode = "@startuml\nBob -> Alice : hello\n@enduml";
		} else {
			const result = await miro.board.widgets.get({ id: widgetId });
			if (result.length) {
				const widget = result[0];
				currentCode = plantumlEncoder.decode(widget.metadata[APP_ID].code);
			}
		}
		return currentCode;
	}

	async handleSave(event: Event) {
		const saveButton = <HTMLButtonElement>event.target;
		saveButton.setAttribute("disabled", "disabled");
		const code: string = this.editor.getCode();
		try {
			const encoded = plantumlEncoder.encode(code);
			const imageUrl = "https://www.plantuml.com/plantuml/svg/" + encoded;
			const response = await fetch(imageUrl);
			const svgText = await response.text();

			if (this.widgetId === "new") {
				await miro.board.widgets.create({
					type: "svg",
					content: svgText,
					metadata: {
						[APP_ID]: {
							code: encoded,
						},
					},
				});
			} else {
				await miro.board.widgets.update({
					id: this.widgetId,
					content: svgText,
					metadata: {
						[APP_ID]: {
							code: encoded,
						},
					},
				});
			}
			miro.board.ui.closeModal();
		} catch (e) {
			miro.showNotification(
				"An error occurred while trying to generate your diagram"
			);
		}
		saveButton.removeAttribute("disabled");
	}
}

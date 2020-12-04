import { APP_ID, miro } from "./constants";

miro.onReady(() => {
	// eslint-disable-next-line
	const iconSvg = require("./icons/chart.svg");
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: "Insert PlantUML",
				librarySvgIcon: iconSvg,
				toolbarSvgIcon: iconSvg,
				onClick: async () => {
					if (miro.isAuthorized()) {
						miro.board.ui.openModal("/editor.html?widget=new");
					} else {
						miro.showNotification("Not authorized");
						miro.board.ui.openModal("/auth-banner.html");
					}
				},
			},
			getWidgetMenuItems: async function (widgets) {
				if (widgets.length === 1) {
					const widget = widgets[0];
					if (
						widget.metadata &&
						widget.metadata[APP_ID] &&
						widget.metadata[APP_ID].code
					) {
						return {
							tooltip: "Edit PlantUML",
							svgIcon: iconSvg,
							onClick: () => {
								miro.board.ui.openModal("/editor.html?widget=" + widget.id);
							},
						};
					}
				}
				return [];
			},
		},
	});
});

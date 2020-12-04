import SDK from "./miro";
export const APP_ID = "3074457351770184441";
// eslint-disable-next-line
//@ts-ignore
export const miro: SDK.Root = window.miro;
export function getBaseUrl(): string {
	if (location.href.includes("localhost")) {
		return location.href;
	}
	return "https://academo.github.io/miro-plantuml-plugin/";
}

import { createElement } from "complate-stream";

export default function P(_, ...items) {
	return (<p><span style="background-color:red;">{items}</span></p>);
}

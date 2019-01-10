import { createElement } from "complate-stream";

export default function List(_, ...items) {
	return (<ul>
			{
				items.map((item) => (<li>{item}</li>))
			}
		   	</ul>);
}

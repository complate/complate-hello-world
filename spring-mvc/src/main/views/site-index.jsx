import Layout from "./layout";
import P from "complate-hello-world-p";
import List from "complate-hello-world-list";

import { createElement } from "complate-stream";

export function SiteIndex({ title, lines }) {

	const contentP = (<P>
					    This is stuff from the Spring server, <em>embedded</em> into a component.
					  </P>);
	const plainLines = ["With a simple line within", "And another one."]

	return (<Layout>
				<h1>{title}</h1>

				<p>The following is a plain component:</p>

	        	{contentP}

				<p>And this is a more complicated list component:</p>

		    	<List>
				    {lines}
				    <P>And with a <em>component</em> within</P>
				</List>
			</Layout>);
}

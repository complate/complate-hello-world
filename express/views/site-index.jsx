import DefaultLayout from "./components/layout";
import P from "complate-hello-world-p";
import List from "complate-hello-world-list";

import { createElement } from "complate-stream";

export function SiteIndex({ title, _layout }) {

	const contentP = (<P>
					    This is stuff from the express server, <em>embedded</em> into a component.
					  </P>);
	const plainLines = ["With a simple line within", "And another one."]

	return (
			<DefaultLayout title={title}>
			    <h1>{title}</h1>

			    <p>The following is a plain component:</p>

	            {contentP}

			    <p>And this is a more complicated list component:</p>

		        <List>
			       {plainLines}
			       <P>And with a <em>component</em> within</P>
			    </List>

			</DefaultLayout>);

}

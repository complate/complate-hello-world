import Renderer, { createElement } from "complate-stream";

let renderer = new Renderer();

const Layout = (_, ...children) => {
    return <html>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <title>Hello, World (from Spring)!</title>
        </head>
        <body style="padding-top: 4rem">
            {children}
        </body>
    </html>;
};

const SiteIndex = ({ model }) => {
    return <Layout>
		<p>Hallo, Welt.</p>
    </Layout>;
};

renderer.registerView(SiteIndex);

export default (stream, view, params, callback) => {
    let fragment = params && params._fragment === true;
    return renderer.renderView(view, params, stream, { fragment }, callback);
};

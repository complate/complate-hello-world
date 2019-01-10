
import Renderer from "complate-stream";

import {SiteIndex} from "./site-index";

const renderer = new Renderer();

renderer.registerView(SiteIndex);

export default (view, params, stream, fragment, callback) => {
	return renderer.renderView(SiteIndex, params, stream, { fragment }, callback);
};

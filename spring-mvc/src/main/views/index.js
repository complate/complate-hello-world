import Renderer, { createElement } from "complate-stream";
import {SiteIndex} from "./site-index";

const renderer = new Renderer();

renderer.registerView(SiteIndex);

export default (stream, view, params, callback) => {
    const fragment = params && params._fragment === true;
	params["lines"] = Java.from(params["lines"]);
    return renderer.renderView(view, params, stream, { fragment }, callback);
};

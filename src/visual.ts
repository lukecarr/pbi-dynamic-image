import powerbiVisualsApi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbiVisualsApi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbiVisualsApi.extensibility.visual.IVisual;


import * as React from "react";
import * as ReactDOM from "react-dom";
import component from "./component";

import "./../style/visual.less";

// noinspection JSUnusedGlobalSymbols
export class Visual implements IVisual {
    private readonly target: HTMLElement;
    private src = "";

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;

        this.render();
    }

    public update(options: VisualUpdateOptions) {
        const src = options.dataViews[0]?.single?.value.toString() || "";
        if (src !== this.src) {
            this.src = src;
            this.render();
        }
    }

    private render() {
        ReactDOM.render(React.createElement(component, { src: this.src }), this.target);
    }
}
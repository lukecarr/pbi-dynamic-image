"use strict";
import powerbiVisualsApi from "powerbi-visuals-api";

import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbiVisualsApi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbiVisualsApi.extensibility.visual.IVisual;

// Import React dependencies and the added component
import * as React from "react";
import * as ReactDOM from "react-dom";
import component, { State } from "./component";

import "./../style/visual.less";

// noinspection JSUnusedGlobalSymbols
export class Visual implements IVisual {
    private readonly target: HTMLElement;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;

        this.render();
    }

    public update(options: VisualUpdateOptions) {
        this.render({
            src: options.dataViews && options.dataViews[0] && options.dataViews[0].single.value.toString() || "",
        });
    }

    private render(state?: State) {
        ReactDOM.render(React.createElement(component, {
            src: "",
            ...state,
        }), this.target);
    }
}
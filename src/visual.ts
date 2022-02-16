import powerbiVisualsApi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbiVisualsApi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbiVisualsApi.extensibility.visual.IVisual;
import VisualObjectInstance = powerbiVisualsApi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbiVisualsApi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbiVisualsApi.VisualObjectInstanceEnumerationObject;
import { VisualSettings } from "./settings";
import * as React from "react";
import * as ReactDOM from "react-dom";
import component from "./component";

import "./../style/visual.less";

// noinspection JSUnusedGlobalSymbols
export class Visual implements IVisual {
    private readonly target: HTMLElement;
    private settings: VisualSettings;
    private src = "";

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;

        this.render();
    }

    public enumerateObjectInstances(
        options: EnumerateVisualObjectInstancesOptions
    ): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
    }

    public update(options: VisualUpdateOptions) {
        const dataView = options.dataViews[0];

        if (typeof dataView === 'undefined') return this.reset();

        this.settings = VisualSettings.parse(dataView) as VisualSettings;
        this.src = dataView.single?.value.toString() || "";

        this.render();
    }

    private reset() {
        this.src = "";
            this.settings = undefined;
            this.render();
    }

    private render() {
        ReactDOM.render(React.createElement(component, {
            src: this.src,
            paddingLeft: this.settings?.padding.left || 0,
            paddingRight: this.settings?.padding.right || 0,
            paddingTop: this.settings?.padding.top || 0,
            paddingBottom: this.settings?.padding.bottom || 0,
        }), this.target);
    }
}
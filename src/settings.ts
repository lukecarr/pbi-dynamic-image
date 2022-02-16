"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class PaddingSettings {
    public left = 0;
    public right = 0;
    public top = 0;
    public bottom = 0;
}

export class VisualSettings extends DataViewObjectsParser {
    public padding = new PaddingSettings();
}

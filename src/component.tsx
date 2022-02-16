import react, { FunctionComponent } from "react";
import React = react;

export type State = {
    src: string,
    paddingLeft: number,
    paddingRight: number,
    paddingTop: number,
    paddingBottom: number,
};

const Component: FunctionComponent<State> = ({ src, paddingLeft, paddingRight, paddingTop, paddingBottom }) => {
    return <div
        className="image-visual"
        style={{
            backgroundImage: `url("${CSS.escape(src)}")`,
            left: paddingLeft,
            right: paddingRight,
            top: paddingTop,
            bottom: paddingBottom,
        }}    
    />
};

export default Component;
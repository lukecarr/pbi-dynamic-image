import react, { FunctionComponent } from "react";
import React = react;

export type State = {
    src: string,
};

const Component: FunctionComponent<State> = ({ src }) => {
    return (
        <div className="image-visual" style={{
            backgroundImage: `url("${CSS.escape(src)}")`,
        }} />
    )
};

export default Component;
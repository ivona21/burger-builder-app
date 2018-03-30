import React, { PureComponent } from "react";
import Aux from "../../hoc/Auxiliary";

class BurgerBuilder extends PureComponent {
    render () {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
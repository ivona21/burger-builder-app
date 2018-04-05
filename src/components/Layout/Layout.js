import React, { PureComponent } from "react";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends PureComponent {
    state = {
        showSideDrawer: true
    }

    sideDrowerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrowerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
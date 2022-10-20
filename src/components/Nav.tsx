import {useActions} from "../overmind/overmind";
import { Button, Row } from "antd"

export const Nav = () => {
    const actions = useActions();
    return <Row justify={"end"}>
        <Button onClick={ () => actions.app.signOut() }>
            Sign Out
        </Button>
    </Row>
};

export default Nav;


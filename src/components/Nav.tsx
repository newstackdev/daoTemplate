import {useActions, useAppState} from "../overmind/overmind";
import { Button, Row } from "antd"

export const Nav = () => {
    const actions = useActions();
    const state = useAppState();
    return <Row justify={"end"}>
        {
            state.api?.auth?.user?.id ? <Button href={"/home"} onClick={ () => actions.app.signOut() }> Sign Out </Button> : <p>{state.api.auth.user.username}</p>
        }

    </Row>
};
export default Nav;


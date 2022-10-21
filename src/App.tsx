import { Provider } from "overmind-react";
import { overmind } from './overmind/overmind';
import { NLView } from '@newstackdev/iosdk/dist/types';
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ViewProposalPage} from "@newstackdev/iosdk/dist/Pages/Dao/Views/ProposalView/ViewProposal";
import { ViewWhitelistProposalPage} from "@newstackdev/iosdk/dist/Pages/Dao/Views/WhitelistProposalView/ViewWhitelistProposal";
import {ProposalsPage} from "@newstackdev/iosdk/dist/Pages/Dao/Views/Proposals/ProposalList";
import NewProposal from "@newstackdev/iosdk/dist/Pages/Dao/Views/NewProposal/NewProposal";
import "./styles/Dao.less"
import Nav from "./components/Nav";

const om = overmind();

export const App: NLView = () => {
  return (
    <Provider value={om}>
        <Nav/>
      <Router>
        <Switch>
            <Route key="h" exact path="/" component={Home} />
            <Route key="hi" exact path="/home" component={Home} />
            <Route key="hj" exact path="/dao/:daoOwner/new-proposal" component={NewProposal} />
            <Route key="da" exact path="/dao/:daoOwner/proposal/:id" component={ViewProposalPage} />,
            <Route key="db" exact path="/dao/:daoOwner/member-proposal/:id" component={ViewWhitelistProposalPage} />,
            <Route key="dc" exact path="/dao/:daoOwner/proposals/:type?" component={ProposalsPage} />,
            <Route key="dd" exact path="/dao/:daoOwner/new-proposal" component={NewProposal} />,
            <Route key="df" exact path="/dao/:daoOwner" component={ProposalsPage} />,
          </Switch>
      </Router>
    </Provider>
  );
};
export default App;

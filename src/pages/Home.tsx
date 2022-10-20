import { useAppState } from "../overmind/overmind";
import {ProposalsPage} from "@newstackdev/iosdk/dist/Pages/Dao/Views/Proposals/ProposalList";
import {NewsafeAuth} from "@newstackdev/iosdk/dist/Components/NewsafeAuth";
import DaoCreate from "@newstackdev/iosdk/dist/Pages/Dao/Views/DaoCreate/DaoCreate";

export const Home = () => {
    const state = useAppState();
    return <div>
        {
            state.newcoin &&  <ProposalsPage />
        }
        {
            !state.api?.auth?.user?.id && <NewsafeAuth />
        }
        {
            !state.api?.auth?.user?.id && !state.newcoin.daos &&  <DaoCreate />
        }
    </div>;
};
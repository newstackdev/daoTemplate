import { useAppState } from "../overmind/overmind";
import {ProposalsPage} from "@newstackdev/iosdk/dist/Pages/Dao/Views/Proposals/ProposalList";
import {NewsafeAuth} from "@newstackdev/iosdk/dist/Components/NewsafeAuth";
import DaoCreate from "@newstackdev/iosdk/dist/Pages/Dao/Views/DaoCreate/DaoCreate";

export const Home = () => {
    const state = useAppState();
    const user:string = state.api!.auth!.user!.username!;
    return <div>
        {
            !state.api?.auth?.user?.id && <NewsafeAuth />
        }
        {
            state.api?.auth?.user?.id && state.newcoin.daos[user] &&  <ProposalsPage />
        }
        {
            state.api?.auth?.user?.id && !state.newcoin.daos[user] &&  <DaoCreate />
        }
    </div>;
};
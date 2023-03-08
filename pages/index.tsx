import type {NextPage} from "next";
import List from "./components/List";
import AlbumProvider from "./context/albumContext";
import GetAlbums from "./components/GetAlbums";
import GetMePlaylists from "./components/GetMePlaylists";

const Home: NextPage = () => {
    return (
        <AlbumProvider>
            <div className="flex-1 mx-auto">
                <GetMePlaylists/>
                <GetAlbums/>
                <List/>
            </div>
        </AlbumProvider>
  );
};

export default Home;

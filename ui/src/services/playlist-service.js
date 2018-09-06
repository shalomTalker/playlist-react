// import countryInfo from "../components/CountryInfo/ComponentInfo";

export class PlaylistService {

    setUrl(actionType, playlistId) {
        switch (actionType) {
            case "ALL":
                this.url = `http://localhost:5000/`;
                break;

            case "SINGLE_COUNTRY":
                this.url = `http://localhost:5000/${playlistId}`;
                break;
            default:
                break;
        }

        // this.getPlaylist
    }

    async getPlaylist() {
        try {
            let response = await fetch(this.url);
            let body = await response.json();
            console.log(body);
            return body;
        }
        catch (e) {
            console.log(e);
        }
    }
}


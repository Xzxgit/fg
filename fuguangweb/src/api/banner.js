import http from "../utils/http";
import {ref, reactive} from "vue";

const banner = reactive({
    banner_list: [],
    get_banner() {
        return http.get("/banner/")
    }
})

export default banner;
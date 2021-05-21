import { SAVE_DATA } from "./actionType";

const saveData = (val) => {
    return{
        type: SAVE_DATA,
        payload:val
    }
}

export default saveData;
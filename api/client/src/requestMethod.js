import axios from "axios";
const BASE_URL="http://localhost:5000/api/"

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzgxNTAyM2IxMGFkOWM0NzFhZWNjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODIxNzM0NywiZXhwIjoxNjU4NDc2NTQ3fQ.xu3kXuqwM9VWRoKtKN2knL60Yw9-GKBapoyDcp68i7s";

export const publicRequest=axios.create({
    baseURL:BASE_URL,

});
export const userRequest=axios.create({
    baseURL:BASE_URL,
     header:{token:`Bearer ${TOKEN}`}
});

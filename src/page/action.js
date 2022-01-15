import banner from "./banner";
import header from "../component/header";
import footer from "../component/footer";

const action = {
    render() {
        return /* html */`
        ${header.render()}
        ${banner.render()}
        <h1>action</h1>
        ${footer.render()}
        `;
    },
};
export default action;

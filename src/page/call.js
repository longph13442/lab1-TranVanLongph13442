import banner from "./banner";
import header from "../component/header";
import footer from "../component/footer";

const call = {
    render() {
        return /* html */`
        ${header.render()}
        ${banner.render()}
        <h1>Lien he</h1>
        ${footer.render()}
        `;
    },
};
export default call;

import banner from "./banner";
import header from "../component/header";
import footer from "../component/footer";

const edu = {
    render() {
        return /* html */`
        ${header.render()}
        ${banner.render()}
        <h1>edu</h1>
        ${footer.render()}
        `;
    },
};
export default edu;

import banner from "./banner";
import header from "../component/header";
import footer from "../component/footer";

const student = {
    render() {
        return /* html */`
        ${header.render()}
        ${banner.render()}
        <h1>student</h1>
        ${footer.render()}
        `;
    },
};
export default student;

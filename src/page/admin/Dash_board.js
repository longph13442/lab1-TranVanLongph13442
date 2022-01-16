import header2 from "./component/header";
import footer from "../../component/footer";
import table from "./table";

const dashboard = {
    render() {
        return /* html */`
          ${header2.render()}
          
          ${table.render()}
          
          ${footer.render()}
        `;
    },
};
export default dashboard;

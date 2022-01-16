import Navigo from "navigo";
import home from "./src/page/home";
import action from "./src/page/action";
import edu from "./src/page/edu";
import student from "./src/page/student";
import call from "./src/page/call";
import signin from "./src/page/sign_in";
import signup from "./src/page/sign_up";
import newsdetail from "./src/page/newsdetail";
import dashboard from "./src/page/Dash_board";
// { linksSelector: "a" } không load lại trang
const router = new Navigo("/", { linksSelector: "a" });
const print = (content, id) => {
    document.getElementById("app").innerHTML = content.render(id);
};

router.on({
    "/": () => {
        print(home);
    },
    "/edu": () => {
        print(edu);
    },
    "/action": () => {
        print(action);
    },
    "/student": () => {
        print(student);
    },
    "/call": () => {
        print(call);
    },
    "/signin": () => {
        print(signin);
    },
    "/signup": () => {
        print(signup);
    },
    "/dashboard": () => {
        print(dashboard);
    },
    "/news/:id": ({ data: { id } }) => {
        print(newsdetail, id);
    },
});
router.resolve();

// class Animal {
//     constructor(color, type) {
//         this.color = "red";
//         this.type = "yellow";
//     }

//     showInfo() {
//         console.log(`
//         màu sắc : ${this.color}
//         loại : ${this.type}
//         `);
//     }
// }
// const dog = new Animal("yellow", "japan");
// console.log(dog.color);
// console.log(dog.type);

// dog.showInfo();

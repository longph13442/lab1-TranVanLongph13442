import Navigo from "navigo";
import home from "./src/page/home";
import action from "./src/page/action";
import edu from "./src/page/edu";
import student from "./src/page/student";
import call from "./src/page/call";
import header from "./src/component/header";
import footer from "./src/component/footer";
import signin from "./src/page/sign_in";
import signup from "./src/page/sign_up";
import dashboard from "./src/page/dashboard";

// { linksSelector: "a" } không load lại trang
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("header").innerHTML = header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = footer.render();
};

router.on({
    "/": () => {
        print(home.render());
    },
    "/edu": () => {
        print(edu.render());
    },
    "/action": () => {
        print(action.render());
    },
    "/student": () => {
        print(student.render());
    },
    "/call": () => {
        print(call.render());
    },
    "/signin": () => {
        print(signin.router());
    },
    "/signup": () => {
        print(signup.router());
    },
    "/dashboard": () => {
        print(dashboard.router());
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

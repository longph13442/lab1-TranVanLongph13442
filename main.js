import Navigo from "navigo";
import home from "./home/home";
import action from "./action-page/action";
import edu from "./edu-page/edu";
import student from "./student-page/student";
import call from "./call-page/call";
import header from "./component/header";
import footer from "./component/footer";

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

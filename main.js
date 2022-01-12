import Navigo from "navigo";
import home from "./home/home";
import products from "./products/products";
import pages from "./pages/pages";
import header from "./component/header";
import footer from "./component/footer";

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
    "/products": () => {
        print(products.render());
    },
    "/pages": () => {
        print(pages.render());
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

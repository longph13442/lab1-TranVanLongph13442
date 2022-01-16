import banner from "./banner";
import header from "../component/header";
import footer from "../component/footer";
import posts from "../data";

const newsdetail = {
    render(id) {
        const currentPost = posts.find((post) => post.id === id); // tìm id trong data
        return /* html */`<div class="content">
        ${header.render()}
        ${banner.render()}
        <div class="item py-2 px-2">
                <h1>${currentPost.title}</h1>
                <div class="item-img w-60 mx-auto">
                <a href=""><img src="${currentPost.img}" alt="" class="w-full" ></a>
                </div>
                <!-- end item img -->
                <div class="item-content">
                    
                    <p>${currentPost.desc}</p>
                </div>
                <!-- end item-content -->
        </div>
        <!-- end item -->
        ${footer.render()}
    </div>
    <!-- end content -->`;
    },
};
export default newsdetail;

import header from "../component/header";
import footer from "../component/footer";
import data from "../data";

const edu = {
    render() {
        return /* html */`
        ${header.render()}
        <main>
        <div class="grid grid-cols-3 gap-4 my-5">
        ${data.map((post) => /* html */`
            <div class="item border-2 border-solid border-neutral-600 py-2 px-2">
                <div class="item-img ">
                <a href="/news/${post.id}"><img src="${post.img}" alt="" class="w-full" ></a>
                </div>
                <!-- end item img -->
                <div class="item-content">
                    <h3>${post.title}</h3>
                    <p>${post.desc}</p>
                </div>
                <!-- end item-content -->
        </div>
        <!-- end item -->            
                `).join("")}
        </div>
        <!-- end grid -->
        </main>
        
        ${footer.render()}
        `;
    },
};
export default edu;

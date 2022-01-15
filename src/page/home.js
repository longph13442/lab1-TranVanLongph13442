import data from "../data";
import banner from "./banner";

const home = {
    render() {
        return /* html */`<div class="content">
        ${banner.render()}
        <div class="title py-5 px-3">
            <h3 class="font-bold text-lg ">Tin tức học tập</h3>
        </div>
        <!-- end title -->
        <div class="grid grid-cols-3 gap-4 ">
        ${data.map((post) => /* html */`
            <div class="item border-2 border-solid border-neutral-600 py-2 px-2">
                <div class="item-img ">
                   <img src="${post.img}" alt="" class="w-full" >
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
        <div class="title py-5 px-3">
                <h3 class="font-bold text-lg ">Tin tức học tập</h3>
        </div>

        <div class="grid grid-cols-3 gap-4">
        ${data.map((post) => /* html */`
            <div class="item border-2 border-solid border-neutral-600 py-2 px-2">
                <div class="item-img ">
                   <img src="${post.img}" alt="" class="w-full" >
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
        
    </div>
    <!-- end content -->`;
    },
};
export default home;

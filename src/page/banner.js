import dataBanner from "../data-banner";

const banner = {
    render() {
        return /* html */`
        <div class="banner">
            ${dataBanner.map((post) => /* html */ `
                   <img src="${post.img}" alt="">
            `)}
                
            </div>
            <!-- end banner -->
        `;
    },
};
export default banner;

import dataBanner from "../data-banner";

const header = {
    render() {
        return /* html */ `
        <div class="h-6 bg-teal-700">
        <div class="flex flex-1 float-right">
        <a href="/dashboard" class="mx-2 text-amber-600">Dashboard/</a>
        <a href="/signin" class="text-amber-600">Sign in/</a>
        <a href="/signup" class="mx-2 text-amber-600">Sign up</a>
        </div>
        <!-- end -->
        </div>
        <!-- end side bar -->
        <div class="header">
            <div class="logo  h-20 bg-sky-700 py-2">
            ${dataBanner.map((post) => /* html */ `
                   <img src="${post.logo}" alt="" class="mx-auto w-40" >
            `)}
            </div>
            <!-- end logo -->
            <div class="box flex py-3 bg-orange-600">
                <div class="menu ">
                    <ul class="flex flex-nowrap ">
                        <li class="mx-5"><a href="/" class="">Trang chủ</a></li>
                        <li class="mx-5"><a href="/edu" class="">Đào tạo</a></li>
                        <li class="mx-5"><a href="/action" class="">Hoạt động</a></li>
                        <li class="mx-5"><a href="/student" class="">Sinh viên</a></li>
                        <li class="mx-5"><a href="/call" class="">Liên hệ</a></li>
                    </ul>
                </div>
                <!-- end menu -->
                <div class="search mx-6 ">
                   <input type="text" name="" id="" placeholder="Search...." class="h-7 border-black ">
                    <button class="ml-3 bg-sky-700 w-20 h-7">Tìm kiếm</button>
                </div>
                <!-- end search -->
            </div>
            <!-- end box -->
            
        </div>
        <!-- end header -->
         `;
    },

};
export default header;

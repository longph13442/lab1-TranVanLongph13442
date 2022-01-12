const header = {
    render() {
        return /* html */ `
        <div class="header">
            <div class="logo  h-20 bg-sky-700 py-2">
                <img src="./img/logo.png" alt="" class="mx-auto">
            </div>
            <!-- end logo -->
            <div class="box flex py-3 bg-orange-600">
                <div class="menu ">
                    <ul class="flex flex-nowrap ">
                        <li class="mx-5"><a href="" class="">Trang chủ</a></li>
                        <li class="mx-5"><a href="" class="">Đào tạo</a></li>
                        <li class="mx-5"><a href="" class="">Hoạt động</a></li>
                        <li class="mx-5"><a href="" class="">Sinh viên</a></li>
                        <li class="mx-5"><a href="" class="">Liên hệ</a></li>
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
            <div class="banner">
                <img src="./img/banner.jpg" alt="">
            </div>
            <!-- end banner -->
        </div>
        <!-- end header -->
         `;
    },

};
export default header;

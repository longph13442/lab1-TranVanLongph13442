import footer from "../../component/footer";
import header2 from "./component/header";
import datas from "../../data";

const edit = {
    render(id) {
        const edits = datas.find((post) => post.id === id); // tìm id trong data
        return /* html */`
        ${header2.render()}
        <div>
  <div class="w-4/5 mx-auto my-5">
    
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            
            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >${edits.title}</textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                ${edits.desc}
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
              <img src="${edits.img}" alt="" class="w-1/3">
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
                </button>
              </div>
            </div>

            
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

        ${footer.render()}
        `;
    },
};
export default edit;

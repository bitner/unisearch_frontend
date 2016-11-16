import * as angular from "angular";


class PagerController {
    currentPage: number
    pageCount: number

    constructor() {
        this.currentPage = 1;
        this.pageCount = 0;
    }
}


export default PagerController;

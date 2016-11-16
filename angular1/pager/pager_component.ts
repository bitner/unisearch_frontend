import * as angular from "angular";
import PagerController from "./pager_controller";


class PagerComponent implements angular.IComponentOptions {
    readonly controller: any = PagerController
    readonly templateUrl: string = "pager/pager.html"
    readonly bindings: any = {
        currentPage: "=?",
        pageCount: "=?"
    }
}

angular.module("pagerModule").component(
    "pagerComponent", new PagerComponent()
);

export default PagerComponent;

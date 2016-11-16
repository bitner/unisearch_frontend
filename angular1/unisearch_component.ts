import * as angular from "angular";
import UnisearchController from "./unisearch_controller";


class UnisearchComponent implements angular.IComponentOptions {
    readonly controller: any = UnisearchController
    readonly templateUrl: string = "unisearch.html"
}

angular.module("unisearchModule").component(
    "unisearchComponent", new UnisearchComponent()
);

export default UnisearchComponent;

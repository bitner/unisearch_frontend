import * as angular from "angular";
import TextFilterController from "./text_filter_controller";


class TextFilterComponent implements angular.IComponentOptions {
    readonly controller: any = TextFilterController
    readonly templateUrl: string = "text_filter/text_filter.html"
    readonly bindings: any = {
        text: "="
    }
}

angular.module("textFilterModule").component(
    "textFilterComponent", new TextFilterComponent()
);

export default TextFilterComponent;

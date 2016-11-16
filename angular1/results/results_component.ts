import * as angular from "angular";
import ResultsController from "./results_controller";


class ResultsComponent implements angular.IComponentOptions {
    readonly controller: any = ResultsController
    readonly templateUrl: string = "results/results.html"
    readonly bindings: any = {
        order: "=?",
        textFilter: "=",
        results: "=?"
    }
}

angular.module("resultsModule").component(
    "resultsComponent", new ResultsComponent()
);

export default ResultsComponent;

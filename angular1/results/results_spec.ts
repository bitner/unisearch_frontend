import * as angular from "angular";
import { assert } from "chai";
import ResultsController from "./results_controller";


describe("resultsModule", function() {

    beforeEach(
        angular.mock.module("resultsModule")
    );

    describe("ResultsController", function() {

        let ctrl: ResultsController;

        beforeEach(
            inject(
                function($componentController: any) {
                    ctrl = $componentController("resultsComponent");
                }
            )
        );

        it("should have a test", function() {
            assert.ok(ctrl);
        });

    });

});

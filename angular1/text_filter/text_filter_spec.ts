import * as angular from "angular";
import { assert } from "chai";
import TextFilterController from "./text_filter_controller";


describe("textFilterModule", function() {

    beforeEach(
        angular.mock.module("textFilterModule")
    );

    describe("textFilterController", function() {

        let ctrl: TextFilterController;

        beforeEach(
            inject(
                function($componentController: any) {
                    ctrl = $componentController("textFilterComponent");
                    ctrl.onSubmit = function() {};
                }
            )
        );

        it("should default to empty string", function() {
            assert.equal(ctrl.text, "");
        });

    });

});

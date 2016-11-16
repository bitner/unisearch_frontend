import * as angular from "angular";
import { assert } from "chai";
import UnisearchController from "./unisearch_controller";
import Result from "./result";


describe("unisearchModule", function() {

    beforeEach(
        angular.mock.module("unisearchModule")
    );

    let testData: Array<Result>;

    before(function() {
        fixture.setBase("angular1/fixtures");
        testData = fixture.load("test_data.json");
    });

    describe("UnisearchController", function() {

        let $httpBackend: any;
        let ctrl: UnisearchController;

        beforeEach(
            inject(
                function(
                    this: UnisearchController,
                    $componentController: any,
                    _$httpBackend_: any
                ) {
                    $httpBackend = _$httpBackend_;
                    let promise = $httpBackend.expectGET("fixtures/test_data.json");
                    promise.respond(testData);
                    ctrl = $componentController("unisearchComponent");
                }
            )
        );

        it("should have a shared.order property set to `'age'`", function() {
            assert.isDefined(ctrl.shared.order);
            assert.equal(ctrl.shared.order.value, "age");
        });

        it("should have a shared.currentText property set to `''`", function() {
            assert.isDefined(ctrl.shared.currentText);
            assert.equal(ctrl.shared.currentText, "");
        });

        it("should populate shared.results on a call to getData", function() {

            // Before the mock HTTP request; undefined means uninitialized,
            // to distinguish from empty results
            assert.equal(ctrl.shared.results.length, 0);

            // Now make an HTTP request
            ctrl.getData({});

            // Now cause the promise to be resolved
            $httpBackend.flush();

            // After the mock HTTP request, we expect to have results
            assert.equal(ctrl.shared.results.length, testData.length);
            assert.sameDeepMembers(ctrl.shared.results, testData);
        });

    });

});

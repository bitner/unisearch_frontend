import * as angular from "angular";
import { assert } from "chai";
import PagerController from "./pager_controller";


describe("pagerModule", function() {

    beforeEach(
        angular.mock.module("pagerModule")
    );

    describe("PagerController", function() {

        let ctrl: PagerController;

        beforeEach(
            inject(
                function($componentController: any) {
                    ctrl = $componentController("pagerComponent");
                }
            )
        );

        it("starts with 0 pages", function() {
            assert.equal(ctrl.pageCount, 0);
        });

        it("defaults to page 1", function() {
            assert.equal(ctrl.currentPage, 1);
        });

    });

});

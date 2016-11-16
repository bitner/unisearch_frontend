import * as angular from "angular";
import { assert } from "chai";
import OrderController from "./order_controller";


describe("orderModule", function() {

    beforeEach(
        angular.mock.module("orderModule")
    );

    describe("OrderController", function() {

        let ctrl: OrderController;

        beforeEach(
            inject(
                function($componentController: any) {
                    ctrl = $componentController("orderComponent");
                }
            )
        );

        it("should set two options", function() {
            assert.equal(ctrl.options.length, 2);
        });

        it("should set a default order on age", function() {
            assert.equal(ctrl.order.value, "age");
        });

    });

});

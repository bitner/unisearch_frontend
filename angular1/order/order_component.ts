import * as angular from "angular";
import OrderController from "./order_controller";


class OrderComponent implements angular.IComponentOptions {
    readonly controller: any = OrderController
    readonly templateUrl: string = "order/order.html"
    readonly bindings: any = {
        order: "=?"
    }
}

angular.module("orderModule").component(
    "orderComponent", new OrderComponent()
);

export default OrderComponent;

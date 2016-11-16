import * as angular from "angular";
import SortOrder from "../sort_order";


class OrderController {
    options: Array<SortOrder>
    order: SortOrder

    // TODO: take options from outside this controller/component
    constructor() {
        this.options = [
            {
                label: "Age",
                value: "age"
            },
            {
                label: "Name",
                value: "name"
            }
        ];

        // ng-options gives us one of the objects defined in this.options, so
        // consumers of this value have to grab .value.
        this.order = this.options[0];
    }
}

export default OrderController;

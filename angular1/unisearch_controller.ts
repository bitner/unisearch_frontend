import * as angular from "angular";
import SortOrder from "./sort_order";
import Query from "./query";
import Result from "./result";


class UnisearchBindings {
    currentText: string
    submittedText: string
    order: SortOrder
    pageNumber: number
    pageCount: number
    results: Array<Result>
}

class UnisearchController {
    // This object is just a place to put bindings.
    // Can't be private, or we can't get it in tests
    shared: UnisearchBindings

    // Store the url to fetch against
    private endpoint: string

    constructor(private $http: any) {
        // TODO: fix hardcoding
        // TODO: actually need multiple endpoints for different APIs
        this.endpoint = "fixtures/test_data.json";

        // The template binds these variables for child components.
        this.shared = {
            currentText: "",
            submittedText: "",
            order: {
                label: "Age",
                value: "age"
            },
            pageNumber: 1,
            pageCount: 0,
            results: []
        };
    }

    url(query: Query): string {
        return this.endpoint;
    }

    getData(query: Query): void {
        // TODO: probably use ngResource, which does interpolation for us
        const url: string = this.url(query);

        // TODO: actually do something with query parms
        // TODO: properly expect a well-typed response
        this.$http.get(url)
        .then((response: any) => {
            if (response && response.status == 200 && response.data) {
                this.shared.results = response.data;
            }
            else {
                this.shared.results = [];
            }
        });
    }

    submit(): void {
        const query: Query = {
            text: this.shared.currentText,
            page: this.shared.pageNumber,
            order: this.shared.order.value
        };
        this.shared.submittedText = this.shared.currentText;
        this.getData(query);
    }

}

export default UnisearchController;

import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { LocationStrategy } from "@angular/common";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
    constructor(
        private client: HttpClient,
        private locationStrategy: LocationStrategy) {
        super();
    }

    override handleError(error: any): void {

        let errorEvent =  {
            path: this.locationStrategy.path(),
            message: error.message ?? error.toString(),
            handler: "GlobalErrorHandler",
            user: "users id",
            time: new Date(),
            stack: error.stack
        }

        this.client.post("http://localhost:3002/errors", errorEvent)
            .subscribe(() => { })
    }
}
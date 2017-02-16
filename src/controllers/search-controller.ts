export class SearchController {
    public message:KnockoutObservable<string> = ko.observable("Hello World");

    public clickMe(): void {
        this.message('Ouch!!!');        
    }
}
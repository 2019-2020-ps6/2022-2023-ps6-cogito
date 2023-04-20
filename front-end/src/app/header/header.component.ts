import { Component, OnInit } from "@angular/core";
import { Router, ActivationStart } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    public noHeader: boolean = true;
    private noHeaderRoutes: string[] = ["game-page"];
    public title: string = "";

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((data): void => {
            if (data instanceof ActivationStart && data.snapshot.data) {
                this.noHeader = this.noHeaderRoutes.includes(data.snapshot.url.toString());
                this.title = data.snapshot.data["title"];
            }
        });
    }
}

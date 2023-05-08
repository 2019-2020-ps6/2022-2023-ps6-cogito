import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Location {
    private path: string = "";
    private history: string[] = [];

    constructor() {}

    getPath(): string {
        return this.path;
    }

    setPath(path: string): void {
        this.path = path;
        this.history.push(path);
    }

    getHistory(): string[] {
        return this.history;
    }

    addPathToHistory(path: string): void {
        this.history.push(path);
    }

    backToHistory(): void {
        this.history.pop();
        this.path = this.history[this.history.length - 1];
    }

}
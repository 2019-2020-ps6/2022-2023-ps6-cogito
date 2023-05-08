import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class Location {

    private path : { path: string, id: number} | undefined;
    private historySubject: BehaviorSubject<{ path: string, id: number}[]> = new BehaviorSubject<{ path: string, id: number}[]>([] as { path: string, id: number}[]);

    constructor() {}

    getPath(): { path: string, id: number} {
        return this.path as { path: string, id: number};
    }

    setPath(path: { path: string, id: number}): void {
        this.path = path;
        const history = this.historySubject.getValue();
        if(history.length > 0 && history[history.length - 1] !== path) {
            history.push(path);
        }
        this.historySubject.next(history);
    }

    getHistory(): BehaviorSubject<{ path: string, id: number}[]> {
        return this.historySubject;
    }

    addPathToHistory(path: { path: string, id: number}): void {
        const history = this.historySubject.getValue();
        history.push(path);
        this.historySubject.next(history);
    }

    backToHistory(): {path: string, id: number} {
        const history = this.historySubject.getValue();
        history.pop();
        this.historySubject.next(history);
        this.path = history[history.length - 1];
        console.log(this.historySubject.getValue());
        const last = history[history.length - 1];
        return last as {path: string, id: number};
    }

    setHistory(history: { path: string, id: number}[]): void {
        this.historySubject.next(history);
    }

}
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { GameService } from "../../../services/game.service";
import { GameQuestion } from "../../../models/gameQuestion.model";
import { Configuration } from "../../../models/configuration.model";

@Component({
    selector: "corrWindow",
    templateUrl: "./corrWindow.component.html",
    styleUrls: ["./corrWindow.component.scss"]
})
export class GameQuestionResultComponent implements OnInit {

    public config?: Configuration;
    public description?:string;
    public picture?: string;
    public title?:string;

    @Input()
    public corrDisplayed?: boolean;
    @Input()
    public lastAnswer?: boolean;

    @Output()
    clickOnContinue: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(private gameService: GameService) {
        this.gameService.currentQuestion$.subscribe((question?: GameQuestion): void => {
            this.config = this.gameService.getConfig();
            if (this.config && question) {
                this.title=question.title;
                if ((this.config.correctDescription && this.lastAnswer)||(this.config.wrongDescription && !this.lastAnswer))
                this.description=question?.correcting?.description;
                if ((this.config.correctPicture && this.lastAnswer)||(this.config.wrongPicture && !this.lastAnswer))
                this.picture=question?.correcting?.picture;
            }
        });
    }


    ngOnInit(): void {
     }

    continueClicked() {
        console.log(true);
        this.clickOnContinue.emit(true);
    }
}

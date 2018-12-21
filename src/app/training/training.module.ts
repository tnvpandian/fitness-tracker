import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { StopTrainingComponent } from './current-training/stop-trainning.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingRouterModule } from './training.router.module';
@NgModule({
    declarations: [
        CurrentTrainingComponent,
        StopTrainingComponent,
        NewTrainingComponent,
        PastTrainingsComponent,
        TrainingComponent
    ],
    imports: [
        SharedModule,
        TrainingRouterModule
    ],
    entryComponents: [
        StopTrainingComponent
    ],
    exports: [
    ]
})
export class TrainingModule {

}
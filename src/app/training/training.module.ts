import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { StopTrainingComponent } from './current-training/stop-trainning.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingComponent } from './training.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
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
        AngularFirestoreModule,
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
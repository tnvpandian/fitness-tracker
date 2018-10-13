import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule
} from "@angular/material";

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule
    ],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule
    ]
})
export class FitnessAppMaterialModule {

}
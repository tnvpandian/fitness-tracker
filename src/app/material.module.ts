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
    MatTableModule,
    MatSortModule
} from "@angular/material";

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule,
        MatSortModule
    ],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatIconModule, MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule, MatProgressSpinnerModule, MatDialogModule,MatTableModule,
        MatSortModule
    ]
})
export class FitnessAppMaterialModule {

}
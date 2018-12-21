import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessAppMaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
imports: [
    CommonModule,
    FitnessAppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
],
exports: [
    CommonModule,
    FitnessAppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
]
})
export class SharedModule {

}
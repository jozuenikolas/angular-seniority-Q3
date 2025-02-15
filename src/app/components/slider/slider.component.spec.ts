import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SliderComponent} from './slider.component';
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: 'app-host',
    template: `
        <app-slider [formControl]="testControl" [label]="label"></app-slider>`
})
class HostComponent {
    @ViewChild(SliderComponent)
    public sliderComponent!: SliderComponent;
    public label: string = 'Por defecto';
    testControl: FormControl = new FormControl("10");
}


describe('SliderComponent', () => {
    let fixture: ComponentFixture<HostComponent>;
    let hostComponent: HostComponent;
    let labelHostComponent: string;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SliderComponent, HostComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            schemas: []
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        hostComponent = fixture.componentInstance;
    });

    it('change the field value if input changes', () => {
        hostComponent.sliderComponent.writeValue('11');
        hostComponent.sliderComponent.registerOnTouched(() => {
        });
        hostComponent.sliderComponent.registerOnChange(() => {
        });
        expect(hostComponent.sliderComponent.field).toBe("11");
    });

    it("Label must change the component label", () => {
        hostComponent.label = 'Cambio';
        fixture.detectChanges();
        expect(hostComponent.sliderComponent.label).toBe("Cambio");
    });

    it("registerOnTouched its defined", () => {
        expect(hostComponent.sliderComponent.registerOnTouched).toBeDefined()
    })
});

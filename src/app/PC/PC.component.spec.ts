import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCComponent } from './PC.component';

describe('TaskAddComponent', () => {
	let component: PCComponent;
	let fixture: ComponentFixture<PCComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PCComponent]
		});
		fixture = TestBed.createComponent(PCComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

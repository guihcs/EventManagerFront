import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sub-event-modal',
  templateUrl: './sub-event-modal.component.html',
  styleUrls: ['./sub-event-modal.component.css']
})
export class SubEventModalComponent implements OnInit {

  formGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    startDate: [''],
    endDate: [''],
    price: [''],
    manager: [''],
  })

  constructor(
    private dialogRef: MatDialogRef<SubEventModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }


  close(){
    this.dialogRef.close();
  }
}

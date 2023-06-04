import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  minDate: Date = new Date();
  maxDate: Date = new Date(2024, 3, 5);
  myControl = new FormControl()
  objectOpt = [
    {name:'taras', age:25},
    {name:'oksna', age:5}
  ]
  options: string[] = ['Angular', 'React', 'Vue']
  inputValue: string = 'z'
  opened: boolean = false;
  value = 'Clear me';
  favoriteColor: string = '';
  lang: string='';
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  filteredOptions: Observable<any> | undefined

  constructor( private matSnack: MatSnackBar, private dialog: MatDialog){}

  openSnack(text:string, action:string){
    this.matSnack.open(text, action, {duration: 2000})
  }

  openDialog(text: string){
    let dialogRef = this.dialog.open(DialogComponent, {data: {name: 'Vishwas'}});
    dialogRef.afterClosed().subscribe(r => console.log('res: ' + `${r}`))
  }

 ngOnInit(): void {
   this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
   )
 }



 _filter(value: string){
   let filteredValue = value.toLowerCase();
   return this.objectOpt.filter(i => i.name.toLowerCase().includes(filteredValue))
 }

  showInput(){
    console.log(this.inputValue)
  }

  showLanguage(){
    console.log(this.lang)
  }

  showColor(){
    console.log(this.favoriteColor)
  }


}

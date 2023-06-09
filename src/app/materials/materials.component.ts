import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit, AfterViewInit {
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

  
  displayedColumns: string[] = ['symbol' ,'position', 'name', 'weight' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor( private matSnack: MatSnackBar, private dialog: MatDialog){}

  ngOnInit(): void {
   
    this.filteredOptions = this.myControl.valueChanges.pipe(
     startWith(''),
     map(value => this._filter(value))
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }

  applyFilter(filterValue:any){
    if(filterValue){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  
  openSnack(text:string, action:string){
    this.matSnack.open(text, action, {duration: 2000})
  }

  openDialog(text: string){
    let dialogRef = this.dialog.open(DialogComponent, {data: {name: 'Vishwas'}});
    dialogRef.afterClosed().subscribe(r => console.log('res: ' + `${r}`))
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

import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  apiData: any;
  cars$: any;
  carFlag = false;


  carNames = ['minicup', 'volvo', 'jaguar', 'i10', 'i20'];
  datalist: any;
  cData: any;
  obs2: any;
  obs1: any;
  asynData: any;
  


  constructor(private dataService: DataService) { }


  ngOnInit(): void {

    this.obs2 = new Observable((obser) => {
      setTimeout(() => {
        obser.next('in process')
      }, 3000);
    }).subscribe(data => {
      console.log(data);

    })

  }

  getObservableData() {
    console.log('cars var before making it obs', this.cars$);
    return this.obs1 = this.cars$ = of(this.carNames);
    console.log('cars var after making it obs', this.cars$);
  }
  getObsrData() {
    this.getObservableData().subscribe((carData) => {
      console.log(carData);
      this.carFlag = true;
      this.cData = carData;

    });


  }

  getData() {
    this.datalist = this.dataService.getApiData()
      .subscribe((xyz) => {
        this.apiData = xyz;
        console.log(xyz);

      })
    // this.dataService.getApiData().toPromise().then(resp=>
    //   console.log(resp))
  }
  deleteRecord(id: any) {
    this.dataService.deletApiCall(id).subscribe(data => {
      console.log(data);

    })

  }

  putRecord(id: any) {
    const body = { name: 'shreedharNew' };
    this.dataService.putApiCall(id, body).subscribe(data => {
      console.log(data);

    })
  }
  ngOnDestroy() {
    console.log('destor calling to unsubscribe');
    this.datalist.unsubscribe();
    // this.obs1.unsubscribe();
    this.obs2.unsubscribe();

  }
  getPromises() {

    let pen = new Promise((resolve, reject) => {
      if (!true) {
        resolve('resolved...got product')
      }
      else reject('not got')
    })
    pen.then((msg) => {
      console.log(msg);
    }).catch(res => {
      console.log(res);

    })
  }

 async asynAwait() {
   this.asynData = await this.dataService.getApiData().toPromise()
    console.log(this.asynData);

  }


}

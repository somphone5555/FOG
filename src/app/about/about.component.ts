import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
        <div fxLayout="row" fxLayoutAlign="center stretch" >
          <md-card>
            <h1>About Website</h1>
            <md-card-content>
              <p>เวบไซต์สำหรับ กวดสอบสภาพ
                อากาศในพื้นที่ทีคุณอยู่ และ พื้นที่ ทีคุณสนใจได้ทั่วโลก ด้วยการค้นหา จาก Google maps
                นอกจากนั้น สามารถบันทึก สถานที่ ทีคุณต้องการได้ตลอดเวลา เพื่อให้รู้ว่าเวลานี้ สภาพอากาศเป็นอย่างไร และ
                เวลาอื่นๆ เป็นอย่างไร และที่ สำคัญสามารถดูในรูปแบบออฟไลน์ได้.</p>
            </md-card-content>
          </md-card>
        </div>




  `,
  styles: [`
  md-card {
    width: 400px;
    margin-top: 1rem;
    margin: 1rem;
    text-align: center;
  }
    p {
      font-size: 1rem;
    }
  `]
})
export class AboutComponent implements OnInit {
  title = 'About is ready';

  constructor() {
  }

  ngOnInit() {
  }

}

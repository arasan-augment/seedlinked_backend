import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService} from '../_services/index';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit, AfterViewInit {
  date = new Date();
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {}
  ngAfterViewInit() {
      this.addJsScript('../../assets/js/jquery-2.1.4.min.js');
      this.addJsScript('../../assets/js/bootstrap.min.js');
      this.addJsScript('../../assets/js/plugins/pace.min.js');
      this.addJsScript('../../assets/js/main.js');
      // Datatable
      // this.addJsScript('../../assets/js/plugins/jquery.dataTables.min.js');
      // this.addJsScript('../../assets/js/plugins/dataTables.bootstrap.min.js');
  }

  addJsScript(url) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = url;
      $('head').append(s);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilheaderComponent } from './profilheader/profilheader.component';
import {ProfilShellComponent} from "./profil-shell/profil-shell.component";
import { ImportComponent } from './import/import.component';
import {MatIconModule} from "@angular/material/icon";
import {ProfilComponent} from "./profil/profil.component";
import {NgxDropzoneModule} from "ngx-dropzone";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SpinnerInterceptorService } from '../http-interceptor/spinner-interceptor.service';
import { GlobalinfoService } from '../_services/globalinfo.service';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    ProfilComponent,
    ProfilShellComponent,
    ProfilheaderComponent,
    ImportComponent
  ],
  exports: [
    ProfilheaderComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    ProfilRoutingModule,MatIconModule,NgxDropzoneModule,HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true,
      extend: true
    })
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    },
    GlobalinfoService
  ]
})
export class ProfilModule { }

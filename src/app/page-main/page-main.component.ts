import { Component, OnInit } from '@angular/core';
import { HashElement } from '@app/models/hash-element';
import { HashService } from '@app/services/hash.service';
import { StorageService } from '@app/services/storage.service';

@Component({
    selector: 'app-page-main',
    templateUrl: './page-main.component.html',
    styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

    protected valid: boolean = false;
    protected pkey: string = '';
    protected spec: boolean = true;
    protected lens: number[] = [];
    protected len: number = 16;

    protected hashMap: HashElement[] = [];

    constructor(
        protected srv: StorageService,
        protected hash: HashService,
    ) {
        this.lens = hash.range(6, 30, 2);
    }

    ngOnInit() {
        this.valid = this.srv.exist();
        if (this.valid) {
            this.build();
        }
    }

    protected copy(passw) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = passw;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    protected build() {
        this.hashMap = this.hash.build(this.pkey, this.len, this.spec);
    }

    copyMessage(val: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

}

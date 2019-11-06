import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StorageService } from '@app/services/storage.service';
import { root } from 'rxjs/internal-compatibility';

@Component({
    selector: 'app-page-options',
    templateUrl: './page-options.component.html',
    styleUrls: ['./page-options.component.scss']
})
export class PageOptionsComponent implements OnInit {

    protected key1: string;
    protected key2: string;
    protected key3: string;

    constructor(
        protected srv: StorageService,
        protected route: Router,
    ) {
        this.load();
    }

    ngOnInit() {
    }

    protected load() {
        this.key1 = this.srv.get(StorageService.KEY1);
        this.key2 = this.srv.get(StorageService.KEY2);
        this.key3 = this.srv.get(StorageService.KEY3);
    }

    protected save() {
        this.srv.set(StorageService.KEY1, String(this.key1));
        this.srv.set(StorageService.KEY2, String(this.key2));
        this.srv.set(StorageService.KEY3, String(this.key3));

        this.route.navigate(['/']);
    }

}

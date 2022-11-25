webpackJsonp([8],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApostasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bilhete_bilhete__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApostasPage = /** @class */ (function () {
    function ApostasPage(navCtrl, navParams, loadCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
    }
    ApostasPage.prototype.ionViewDidLoad = function () {
        this.goPage('/apostas/list');
    };
    ApostasPage.prototype.goBilhete = function (aposta) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bilhete_bilhete__["a" /* BilhetePage */], {
            aposta: aposta,
        });
    };
    ApostasPage.prototype.goPage = function (url) {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Carregando lista de apostas...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_2__app_global__["b" /* http */]
            .get(url)
            .then(function (res) {
            var j = res.data;
            if (j.result == 1) {
                _this.busca = j;
            }
            else {
                _this.alertCtrl.create({});
            }
        })
            .catch(function () {
            _this.alertCtrl.create({
                title: '',
            });
        })
            .then(function () {
            load.dismiss();
        });
    };
    ApostasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apostas',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\apostas\apostas.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle left fixed>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Minhas apostas</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div *ngIf="busca">\n        <div class="apostas">\n            <div *ngFor="let v of busca.results" (click)="goBilhete(v)" class="aposta">\n                <div class="codigo"><span>{{ v.codigo }}</span></div>\n                <div class="cliente">Cliente: <span>{{ v.cliente }}</span></div>\n                <div class="jogos">Jogos: <span>{{ v.jogos }}</span></div>\n                <div class="valor">Valor: <span>{{ v.valor }}</span></div>\n            </div>\n        </div>\n        <div *ngIf="!busca.count">\n            Nenhuma aposta encontrada\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer no-padding *ngIf="busca && (busca.next || busca.prev)">\n    <ion-grid text-center>\n        <ion-row>\n            <ion-col *ngIf="busca.prev">\n                <button ion-button color="primary" (click)="goPage(busca.prev)">\n                    Anterior\n                </button>\n            </ion-col>\n            <ion-col *ngIf="busca.next">\n                <button ion-button color="secondary" (click)="goPage(busca.next)">\n                    Próxima\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\apostas\apostas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ApostasPage);
    return ApostasPage;
}());

//# sourceMappingURL=apostas.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CotacoesPage = /** @class */ (function () {
    function CotacoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.glob = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */];
        this.tempo = '90';
        this.jogo = this.navParams.get('jogo');
    }
    CotacoesPage.prototype.apostar = function (tempo, cotacao) {
        this.jogo.apostaEm = tempo + cotacao.campo;
        if (tempo == '90' && cotacao.principal) {
            this.jogo.outras = false;
        }
        else {
            this.jogo.outras = true;
        }
        this.jogo.cotacao = {
            id: cotacao.id,
            tempo: tempo,
            valor: this.jogo.cotacoes[tempo][cotacao.campo] || 1,
            cotacao: cotacao,
        };
        this.navCtrl.pop();
    };
    CotacoesPage.prototype.getCotacoes = function (grupo) {
        var _this = this;
        var cotacoes = [];
        this.glob.cotacoes.forEach(function (c) {
            if (c.grupo == grupo.id && _this.jogo.cotacoes[_this.tempo][c.campo] > 1)
                cotacoes.push(c);
        });
        return cotacoes;
    };
    CotacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotacoes',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\cotacoes\cotacoes.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            {{jogo.casa}} x {{jogo.fora}} - {{jogo.data.split(\'-\').reverse().join(\'/\')}} às {{jogo.hora}}\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="table-responsive">\n        <table class="table-cotacoes">\n            <thead>\n            <tr class="tr-head">\n                <th text-left>\n                    Descrição\n                </th>\n                <th width="100">\n                    Taxa\n                </th>\n            </tr>\n            </thead>\n            <tbody *ngFor="let g of glob.grupos">\n            <tr class="tr-grupo" *ngIf="getCotacoes(g).length">\n                <th colspan="2">{{g.title}}</th>\n            </tr>\n            <tr *ngFor="let c of getCotacoes(g)" class="tr-cotacao">\n                <td (click)="apostar(tempo, c)">{{c.title}}</td>\n                <td text-center (click)="apostar(tempo, c)">\n                    <div class="btn-cotacao" ngClass="{active: jogo.apostaEm == tempo + c.campo}">\n                        {{jogo.cotacoes[tempo][c.campo].toFixed(2)}}\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n\n</ion-content>\n\n<ion-footer text-center no-padding>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col (click)="tempo=\'90\'" [attr.active]="tempo == \'90\' ? true : null">\n                <div class="tempo">90</div>\n                <small>Jogo completo</small>\n            </ion-col>\n            <ion-col (click)="tempo=\'pt\'" [attr.active]="tempo == \'pt\' ? true : null">\n                <div class="tempo">PT</div>\n                <small>Primeiro tempo</small>\n            </ion-col>\n            <ion-col (click)="tempo=\'st\'" [attr.active]="tempo == \'st\' ? true : null">\n                <div>ST</div>\n                <small>Segundo tempo</small>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\cotacoes\cotacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CotacoesPage);
    return CotacoesPage;
}());

//# sourceMappingURL=cotacoes.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarApostaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_aposta_aposta__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bilhete_bilhete__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmarApostaPage = /** @class */ (function () {
    function ConfirmarApostaPage(navCtrl, navParams, alertCtrl, loadCtrl, aposta) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.aposta = aposta;
    }
    ConfirmarApostaPage.prototype.confirmar = function () {
        var _this = this;
        var jogos = [];
        this.aposta.getJogos().forEach(function (j) {
            jogos.push({
                jogo: j.id,
                cotacao: j.cotacao.cotacao.campo,
                tempo: j.cotacao.tempo,
            });
        });
        var load = this.loadCtrl.create({
            content: 'Enviando dados da aposta...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_2__app_global__["b" /* http */]
            .post('/apostar/apostar', this.aposta.getValues())
            .then(function (response) {
            var j = response.data;
            if (j.result == 1) {
                _this.alertCtrl.create({
                    title: "Parabéns!",
                    message: j.message,
                }).present();
                __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].user.creditos = j.saldo;
                _this.navCtrl.pop();
                _this.aposta.limpaAposta();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bilhete_bilhete__["a" /* BilhetePage */], { aposta: j.aposta });
            }
            else {
                _this.alertCtrl.create({
                    title: "Error!",
                    message: j.message,
                }).present();
            }
        })
            .catch(function (e) {
            console.log('Error Apostar', e);
            _this.alertCtrl.create({
                title: "Error",
                message: "Não foi possível concluír a aposta",
            }).present();
        })
            .then(function () {
            load.dismiss();
        });
    };
    ConfirmarApostaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-aposta',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\confirmar-aposta\confirmar-aposta.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Confirmar do bilhete</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n    <div class="informacoes">\n        <ion-grid no-padding>\n            <ion-row>\n                <ion-col col>\n                    <div class="info">\n                        <div>Qtde. jogos</div>\n                        <span>{{aposta.getJogos().length}}</span>\n                    </div>\n                </ion-col>\n                <ion-col col>\n                    <div class="info">\n                        <div>Valor da aposta</div>\n                        <span>R$ {{aposta.getValor().toFixed(2).replace(\'.\', \',\')}}</span>\n                    </div>\n                </ion-col>\n                <ion-col col>\n                    <div class="info">\n                        <div>Valor do prêmio</div>\n                        <span>R$ {{aposta.getPremio().toFixed(2).replace(\'.\', \',\')}}</span>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div class="table-responsive">\n        <table class="tb-jogos">\n            <tbody>\n            <tr *ngFor="let j of aposta.getJogos()">\n                <td text-left>\n                    <div class="times">{{j.casa}} x {{j.fora}}</div>\n                    <div class="cotacao" *ngIf="j.cotacao">\n                        {{j.cotacao.cotacao.title}}\n                        <span *ngIf="j.cotacao.tempo != \'90\'">({{j.cotacao.tempo == \'st\' ? \'Segundo tempo\' : \'Primeiro tempo\'}})</span>\n                    </div>\n                </td>\n                <td width="100" text-center *ngIf="j.cotacao">\n                    {{j.cotacao.valor.toFixed(2)}}\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n\n</ion-content>\n\n<ion-footer no-padding>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col class="btn-voltar" (click)="navCtrl.pop()">\n                Voltar\n            </ion-col>\n            <ion-col col class="btn-confirmar" (click)="confirmar()">\n                Confirmar\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\confirmar-aposta\confirmar-aposta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_aposta_aposta__["a" /* ApostaProvider */]])
    ], ConfirmarApostaPage);
    return ConfirmarApostaPage;
}());

//# sourceMappingURL=confirmar-aposta.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarBilhetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bilhete_bilhete__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultarBilhetePage = /** @class */ (function () {
    function ConsultarBilhetePage(navCtrl, navParams, sanitizer, loadCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
    }
    ConsultarBilhetePage_1 = ConsultarBilhetePage;
    ConsultarBilhetePage.prototype.carregaPdf = function () {
        var url = 'https://docs.google.com/gview?embedded=true&url=' + this.aposta.url;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ConsultarBilhetePage.prototype.buscaAposta = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Buscando bilhete...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_3__app_global__["b" /* http */]
            .post('/apostas/consultar', {
            codigo: this.codigo,
        })
            .then(function (res) {
            var j = res.data;
            if (j.result == 1) {
                _this.aposta = j.aposta;
                _this.carregaPdf();
                _this.content.resize();
            }
            else {
                _this.alertCtrl.create({
                    title: 'Error!',
                    message: j.message,
                }).present();
            }
        })
            .catch(function () {
            _this.alertCtrl.create({
                title: 'Erro de conexão',
                message: 'Não foi possível conectar com o servidor!',
            }).present();
        })
            .then(function () {
            load.dismiss();
        });
    };
    ConsultarBilhetePage.prototype.validar = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Validando aposta...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_3__app_global__["b" /* http */]
            .post('/apostas/validar', {
            token: this.aposta.token,
        })
            .then(function (res) {
            var j = res.data;
            if (j.result == 1) {
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].user.creditos = j.saldo;
                _this.navCtrl.setRoot(ConsultarBilhetePage_1);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bilhete_bilhete__["a" /* BilhetePage */], { aposta: _this.aposta });
            }
            else {
                _this.alertCtrl.create({
                    title: 'Error!',
                    message: j.message,
                }).present();
            }
        })
            .catch(function () {
            _this.alertCtrl.create({
                title: 'Erro de conexão',
                message: 'Não foi possível conectar com o servidor!',
            }).present();
        })
            .then(function () {
            load.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ConsultarBilhetePage.prototype, "content", void 0);
    ConsultarBilhetePage = ConsultarBilhetePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultar-bilhete',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\consultar-bilhete\consultar-bilhete.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle left fixed>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Consultar Bilhete</ion-title>\n\n    </ion-navbar>\n\n    <div class="consultar">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-12>\n                    <ion-list no-border no-margin>\n                        <ion-item no-border>\n                            <ion-label fixed>Código:</ion-label>\n                            <ion-input type="text" [(ngModel)]="codigo" mask="AAA AAA AAA"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n                <ion-col col-12 align-self-center>\n                    <button ion-button block (click)="buscaAposta()">\n                        Consultar\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-header>\n\n<ion-content no-padding>\n    <div *ngIf="aposta">\n        <iframe [attr.src]="url"></iframe>\n    </div>\n</ion-content>\n\n<ion-footer padding *ngIf="aposta && aposta.podeValidar">\n    <button ion-button color="secondary" block full (click)="validar()">\n        Validar aposta\n    </button>\n</ion-footer>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\consultar-bilhete\consultar-bilhete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConsultarBilhetePage);
    return ConsultarBilhetePage;
    var ConsultarBilhetePage_1;
}());

//# sourceMappingURL=consultar-bilhete.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineDominioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DefineDominioPage = /** @class */ (function () {
    function DefineDominioPage(navCtrl, navParams, alertCtrl, loadCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.platform = platform;
    }
    DefineDominioPage.prototype.ionViewDidEnter = function () {
        var url = window.localStorage.getItem('uri');
        if (url) {
            __WEBPACK_IMPORTED_MODULE_3__app_global__["b" /* http */].defaults.baseURL = url;
            this.getInformacoes();
        }
    };
    DefineDominioPage.prototype.getInformacoes = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Carregando informações da banca...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_3__app_global__["b" /* http */]
            .get('/')
            .then(function (res) {
            var j = res.data;
            if (typeof j == 'object' && j.result == 1) {
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].title = j.title;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].apostaMin = j.apostaMin;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].apostaMax = j.apostaMax;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].cotacaoMin = j.cotacaoMin;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].cotacaoMax = j.cotacaoMax;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].minJogos = j.minJogos;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].retornoMaximo = j.retornoMaximo;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].logotipo = j.logotipo;
                __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* global */].background = j.background;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else {
                window.localStorage.removeItem('uri');
                _this.alertCtrl.create({
                    message: 'Não foi possível validar o domínio, informe um novo domínio.',
                }).present();
            }
        })
            .catch(function () {
            _this.platform.exitApp();
        })
            .then(function () {
            load.dismiss();
        });
    };
    DefineDominioPage.prototype.acessar = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Validando domínio...',
        });
        load.present();
        var dominio = this.dominio
            .replace(/https?:\/\//, '')
            .replace('www.', '')
            .toLowerCase();
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a
            .get('https://' + dominio + '/api/validar')
            .then(function (res) {
            var j = res.data;
            if (typeof j == 'object' && j.result == 1) {
                window.localStorage.setItem('uri', j.url);
                __WEBPACK_IMPORTED_MODULE_3__app_global__["b" /* http */].defaults.baseURL = j.url;
                _this.getInformacoes();
            }
            else {
                _this.alertCtrl.create({
                    message: 'Domínio inválido',
                }).present();
            }
        })
            .catch(function () {
            _this.alertCtrl.create({
                title: 'Falha',
                message: 'Não foi possível validar o domínio',
            }).present();
        })
            .then(function () {
            load.dismiss();
        });
    };
    DefineDominioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-define-dominio',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\define-dominio\define-dominio.html"*/'<ion-content padding>\n\n    <div class="campo">\n        <label>Domínio da banca</label>\n        <input type="url" [(ngModel)]="dominio" placeholder="Ex: seusite.com.br"/>\n    </div>\n\n</ion-content>\n\n<ion-footer no-padding>\n    <button ion-button color="secondary" block full large no-margin (click)="acessar()">\n        Acessar banca\n    </button>\n</ion-footer>'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\define-dominio\define-dominio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], DefineDominioPage);
    return DefineDominioPage;
}());

//# sourceMappingURL=define-dominio.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aposta/aposta.module": [
		311,
		7
	],
	"../pages/apostas/apostas.module": [
		309,
		6
	],
	"../pages/bilhete/bilhete.module": [
		310,
		5
	],
	"../pages/confirmar-aposta/confirmar-aposta.module": [
		312,
		4
	],
	"../pages/consultar-bilhete/consultar-bilhete.module": [
		314,
		3
	],
	"../pages/cotacoes/cotacoes.module": [
		313,
		2
	],
	"../pages/define-dominio/define-dominio.module": [
		315,
		1
	],
	"../pages/login/login.module": [
		316,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return http; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

var global = {
    hoje: null,
    amanha: null,
    title: 'Mega Esportes',
    uri: 'https://www.megaesportes.net.br/api',
    appId: window.localStorage.getItem('randid'),
    appToken: window.localStorage.getItem('appToken'),
    cotacoes: [],
    logotipo: '',
    background: '',
    grupos: [],
    campeonatos: [],
    paises: [],
    user: null,
    apostaMin: 1,
    apostaMax: 1,
    cotacaoMin: 1,
    cotacaoMax: 1,
    minJogos: 1,
    retornoMaximo: 1,
};
var http = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    headers: {
        appToken: global.appToken,
    },
});
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_aposta_aposta__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cotacoes_cotacoes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_aposta_confirmar_aposta__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_aposta_aposta__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bilhete_bilhete__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_apostas_apostas__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_consultar_bilhete_consultar_bilhete__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_mask__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_printer__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_define_dominio_define_dominio__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_update__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_aposta_aposta__["a" /* ApostaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cotacoes_cotacoes__["a" /* CotacoesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_aposta_confirmar_aposta__["a" /* ConfirmarApostaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bilhete_bilhete__["a" /* BilhetePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_apostas_apostas__["a" /* ApostasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_consultar_bilhete_consultar_bilhete__["a" /* ConsultarBilhetePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_define_dominio_define_dominio__["a" /* DefineDominioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: 'md',
                }, {
                    links: [
                        { loadChildren: '../pages/apostas/apostas.module#ApostasPageModule', name: 'ApostasPage', segment: 'apostas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bilhete/bilhete.module#BilhetePageModule', name: 'BilhetePage', segment: 'bilhete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aposta/aposta.module#ApostaPageModule', name: 'ApostaPage', segment: 'aposta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-aposta/confirmar-aposta.module#ConfirmarApostaPageModule', name: 'ConfirmarApostaPage', segment: 'confirmar-aposta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cotacoes/cotacoes.module#CotacoesPageModule', name: 'CotacoesPage', segment: 'cotacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consultar-bilhete/consultar-bilhete.module#ConsultarBilhetePageModule', name: 'ConsultarBilhetePage', segment: 'consultar-bilhete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/define-dominio/define-dominio.module#DefineDominioPageModule', name: 'DefineDominioPage', segment: 'define-dominio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_aposta_aposta__["a" /* ApostaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cotacoes_cotacoes__["a" /* CotacoesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_aposta_confirmar_aposta__["a" /* ConfirmarApostaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bilhete_bilhete__["a" /* BilhetePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_apostas_apostas__["a" /* ApostasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_consultar_bilhete_consultar_bilhete__["a" /* ConsultarBilhetePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_define_dominio_define_dominio__["a" /* DefineDominioPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_aposta_aposta__["a" /* ApostaProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_printer__["a" /* Printer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_update__["a" /* AppUpdate */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_aposta_aposta__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_apostas_apostas__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_consultar_bilhete_consultar_bilhete__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_define_dominio_define_dominio__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_update__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splash, loadCtrl, update) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splash = splash;
        this.loadCtrl = loadCtrl;
        this.update = update;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_define_dominio_define_dominio__["a" /* DefineDominioPage */];
        this.pages = [
            { title: 'Nova aposta', page: __WEBPACK_IMPORTED_MODULE_5__pages_aposta_aposta__["a" /* ApostaPage */] },
            { title: 'Minhas apostas', page: __WEBPACK_IMPORTED_MODULE_6__pages_apostas_apostas__["a" /* ApostasPage */] },
            { title: 'Consultar bilhete', page: __WEBPACK_IMPORTED_MODULE_7__pages_consultar_bilhete_consultar_bilhete__["a" /* ConsultarBilhetePage */] },
        ];
        platform
            .ready()
            .then(function () {
            _this.statusBar.styleDefault();
            _this.glob = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */];
            _this.splash.hide();
        });
    }
    MyApp.prototype.goPage = function (v) {
        this.nav.setRoot(v.page, v.parans || null);
    };
    MyApp.prototype.sair = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Saindo...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_4__global__["b" /* http */]
            .get('user/logout')
            .then(function (res) {
            window.localStorage.removeItem('appToken');
            __WEBPACK_IMPORTED_MODULE_4__global__["a" /* global */].appToken = null;
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
        })
            .catch(function () {
            _this.platform.exitApp();
        })
            .then(function () {
            load.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\app\app.html"*/'<ion-menu [content]="content" class="app-menu" [persistent]="true" [enabled]="false" >\n\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n\n        <div *ngIf="glob && glob.user" class="usuario">\n            <div class="saldo"><b>Saldo:</b> {{glob.user.creditos.toFixed(2).toString().replace(\'.\', \',\')}}</div>\n            <ion-grid no-padding>\n                <ion-row align-items-center>\n                    <ion-col col-auto>\n                        <img src="{{glob.user.img}}"/>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="nome">{{glob.user.nome}}</div>\n                        <small class="email">{{glob.user.email}}</small>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n        <ion-list>\n            <button ion-item *ngFor="let v of pages" (click)="goPage(v)" menuClose>\n                {{v.title}}\n            </button>\n            <button ion-item (click)="sair()" menuClose>\n                Sair\n            </button>\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_update__["a" /* AppUpdate */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BilhetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BilhetePage = /** @class */ (function () {
    function BilhetePage(navCtrl, navParams, sanitizer, share, printer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.share = share;
        this.printer = printer;
        this.baseUrl = 'https://docs.google.com/gview?embedded=true&url=';
    }
    BilhetePage.prototype.ionViewDidEnter = function () {
        this.aposta = this.navParams.get('aposta');
        var url = this.baseUrl + this.aposta.url;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.content.resize();
    };
    BilhetePage.prototype.imprimir = function () {
        var options = {
            name: 'Aposta ' + this.aposta.codigo,
            grayscale: true,
        };
        this.printer.print(this.aposta.url + '/html', options);
    };
    BilhetePage.prototype.compartilhar = function () {
        this.share.shareViaWhatsApp("Aposta " + this.aposta.codigo, '', this.aposta.url);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], BilhetePage.prototype, "content", void 0);
    BilhetePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bilhete',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\bilhete\bilhete.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Bilhete <span *ngIf="aposta">{{aposta.codigo}}</span></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n    <div *ngIf="aposta">\n        <iframe [attr.src]="url"></iframe>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-grid>\n        <ion-row>\n            <ion-col col>\n                <button ion-button block full color="light" no-margin (click)="imprimir()">\n                    Imprimir\n                </button>\n            </ion-col>\n            <ion-col col>\n                <button ion-button block full color="secondary" no-margin (click)="compartilhar()">\n                    Compartilhar\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\bilhete\bilhete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__["a" /* Printer */]])
    ], BilhetePage);
    return BilhetePage;
}());

//# sourceMappingURL=bilhete.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApostaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cotacoes_cotacoes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmar_aposta_confirmar_aposta__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_aposta_aposta__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApostaPage = /** @class */ (function () {
    function ApostaPage(navCtrl, navParams, loadCtrl, alertCtrl, aposta) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.aposta = aposta;
        this.glob = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */];
        window.onresize = function () {
            _this.content.resize();
        };
    }
    ApostaPage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    ApostaPage.prototype.concluirAposta = function () {
        var validar = this.aposta.validarAposta();
        if (validar !== true) {
            this.alertCtrl.create({
                title: validar.title,
                message: validar.message,
            }).present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__confirmar_aposta_confirmar_aposta__["a" /* ConfirmarApostaPage */]);
        }
    };
    ApostaPage.prototype.getCotacoesPrincipais = function () {
        var cotacoes = [];
        this.glob.cotacoes.forEach(function (c) {
            if (c.principal)
                cotacoes.push(c);
        });
        return cotacoes;
    };
    ApostaPage.prototype.filtrar = function (jogo, campeonato, pais) {
        if (campeonato) {
            if (!this.filtros.campeonato || campeonato.id == this.filtros.campeonato) {
                if (this.getJogos(campeonato).length) {
                    return true;
                }
            }
        }
        if (jogo) {
            if (!this.filtros.data || jogo.data == this.filtros.data) {
                if (!this.filtros.time) {
                    return true;
                }
                else {
                    var exp = new RegExp(this.rmAcentos(this.filtros.time), 'i');
                    if (exp.exec(this.rmAcentos(jogo.casa)) || exp.exec(this.rmAcentos(jogo.fora))) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    ApostaPage.prototype.rmAcentos = function (str) {
        var result = str.replace(/[ÀÁÂÃÄÅàáâãäå]/, "a");
        result = result.replace(/[ÈÉÊËèéêë]/, "e");
        result = result.replace(/[Çç]/, "c");
        return result;
    };
    ApostaPage.prototype.limpaFiltros = function () {
        this.filtros = {
            time: '',
            data: null,
            campeonato: null,
            pais: null,
        };
    };
    ApostaPage.prototype.getJogos = function (campeonato) {
        var _this = this;
        var jogos = [];
        campeonato.jogos.forEach(function (j) {
            if (_this.filtrar(j)) {
                jogos.push(j);
            }
        });
        return jogos;
    };
    ApostaPage.prototype.getPaises = function () {
        var _this = this;
        var pais = [];
        this.glob.paises.forEach(function (p) {
            if (_this.getCampeonatos(p, true).length > 0) {
                pais.push(p);
            }
        });
        return pais;
    };
    /**
     * Lista de campeonatos
     * @returns {Campeonato[]}
     */
    ApostaPage.prototype.getCampeonatos = function (pais, filtrar) {
        var _this = this;
        var campeonatos = [];
        __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].campeonatos.forEach(function (c) {
            if (pais.id == c.pais) {
                if (filtrar !== false) {
                    if (_this.filtrar(null, c)) {
                        campeonatos.push(c);
                    }
                }
                else {
                    campeonatos.push(c);
                }
            }
        });
        return campeonatos;
    };
    ApostaPage.prototype.apostar = function (jogo, tempo, cotacao) {
        jogo.apostaEm = tempo + cotacao.campo;
        if (cotacao.principal && tempo == '90') {
            jogo.outras = false;
        }
        else {
            jogo.outras = true;
        }
        jogo.cotacao = {
            id: cotacao.id,
            tempo: tempo,
            valor: jogo.cotacoes[tempo][cotacao.campo] || 1,
            cotacao: cotacao,
        };
    };
    ApostaPage.prototype.limpar = function (jogo) {
        if (jogo) {
            jogo.cotacao = null;
            jogo.apostaEm = null;
            jogo.outras = false;
        }
        else {
            this.limpaFiltros();
            this.glob.campeonatos.forEach(function (c) {
                c.jogos.forEach(function (j) {
                    j.apostaEm = null;
                    j.outras = false;
                    j.cotacao = null;
                });
            });
        }
    };
    ApostaPage.prototype.countCotacoes = function (jogo) {
        var count = 0;
        for (var key1 in jogo.cotacoes) {
            for (var key2 in jogo.cotacoes[key1]) {
                var valor = jogo.cotacoes[key1][key2];
                if (valor > 1)
                    count++;
            }
        }
        return count;
    };
    ApostaPage.prototype.maisCotacoes = function (jogo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cotacoes_cotacoes__["a" /* CotacoesPage */], {
            jogo: jogo,
        });
    };
    /**
     * Carrega a lista de jogos
     */
    ApostaPage.prototype.load = function () {
        var _this = this;
        this.limpaFiltros();
        var load = this.loadCtrl.create({
            content: "Carregando jogos...",
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_2__app_global__["b" /* http */]
            .get('/apostar/jogos')
            .then(function (response) {
            var j = response.data;
            if (j.result == 1) {
                _this.glob.campeonatos = j.campeonatos;
                _this.glob.paises = j.paises;
                _this.glob.cotacoes = j.cotacoes;
                _this.glob.grupos = j.grupos;
                _this.glob.hoje = j.hoje;
                _this.glob.amanha = j.amanha;
            }
        })
            .catch(function (e) {
        })
            .then(function () {
            load.dismiss();
            _this.content.resize();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ApostaPage.prototype, "content", void 0);
    ApostaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aposta',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\aposta\aposta.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle left fixed>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>\n            {{ glob.title }}\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button (click)="aposta.limpaJogos()">\n                <ion-icon name="trash"></ion-icon>\n            </button>\n            <button ion-button (click)="load()">\n                <ion-icon name="refresh"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <div class="apostar">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-md col-12>\n                    <ion-list no-border no-margin>\n                        <ion-item no-border>\n                            <ion-label fixed>Cliente:</ion-label>\n                            <ion-input type="text" [(ngModel)]="aposta.cliente"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n                <ion-col col-md col-12>\n                    <ion-list no-border no-margin>\n                        <ion-item no-border>\n                            <ion-label fixed>Valor:</ion-label>\n                            <ion-input type="number" [(ngModel)]="aposta.valor" step="1.00" min="2"\n                                       max="999.99"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n                <ion-col col-md-auto col-12 align-self-center>\n                    <button ion-button block (click)="concluirAposta()">\n                        Confirmar\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <div class="informacoes">\n            <ion-grid no-padding>\n                <ion-row text-center>\n                    <ion-col col>\n                        <div class="info">\n                            <small>Saldo:</small>\n                            <div>{{glob.user.creditos.toFixed(2).replace(\'.\', \',\')}}</div>\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="info">\n                            <small>Nº jogos:</small>\n                            <div>{{aposta.getJogos().length}}</div>\n                        </div>\n                    </ion-col>\n                    <ion-col col>\n                        <div class="info">\n                            <small>Prêmio:</small>\n                            <div>{{aposta.getPremio().toFixed(2).replace(\'.\', \',\')}}</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="grid-jogos" *ngIf="filtros && glob.campeonatos">\n        <ion-grid no-padding>\n            <ion-row>\n                <ion-col col-md-auto col-12>\n                    <div class="col-cotacoes" *ngIf="filtros">\n                        <ul>\n                            <li [attr.active]="filtros.time && filtros.time.length > 0 ? true : null">\n                                <ion-grid no-padding>\n                                    <ion-row>\n                                        <ion-col col-auto>\n                                            <div padding-right>\n                                                <ion-icon name="search"></ion-icon>\n                                            </div>\n                                        </ion-col>\n                                        <ion-col col>\n                                            <ion-input [(ngModel)]="filtros.time" placeholder="Nome do time"\n                                                       no-margin></ion-input>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </li>\n                            <li>\n                                <div class="link" (click)="limpaFiltros()">Todos</div>\n                            </li>\n                            <li [attr.active]="filtros.data == glob.hoje ? true : null">\n                                <div class="link" (click)="filtros.data = glob.hoje">\n                                    Jogos hoje\n                                </div>\n                            </li>\n                            <li [attr.active]="filtros.data == glob.amanha ? true : null">\n                                <div class="link" (click)="filtros.data = glob.amanha">\n                                    Jogos amanhã\n                                </div>\n                            </li>\n                            <li *ngFor="let pais of glob.paises" class="tem-submenu">\n                                <div class="link">\n                                    <img [attr.src]="pais.img" /> {{pais.title}}\n                                </div>\n                                <ul class="submenu">\n                                    <li *ngFor="let c of getCampeonatos(pais, false)"\n                                        [attr.active]="filtros.campeonato == c.id ? true : null">\n                                        <div class="link" (click)="filtros.campeonato = c.id">{{c.title}}</div>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                </ion-col>\n                <ion-col col-md col-12>\n                    <div class="col-jogos">\n                        <div *ngFor="let pais of getPaises()" >\n                            <h3 class="pais-title">\n                                <img [attr.src]="pais.img" height="20"/> {{pais.title}}\n                            </h3>\n                            <div class="table-responsive">\n                                <table class="table-jogos">\n                                    <thead>\n                                    <tr class="tr-head">\n                                        <th text-left>Jogos</th>\n                                        <th *ngFor="let c of getCotacoesPrincipais()" width="50">\n                                            {{c.title}}\n                                        </th>\n                                        <th width="50">\n                                            +\n                                        </th>\n                                    </tr>\n                                    </thead>\n                                    <tbody *ngFor="let campeonato of getCampeonatos(pais)">\n                                    <tr class="tr-campeonato">\n                                        <th colspan="20" text-left>{{campeonato.title}}</th>\n                                    </tr>\n                                    <tr *ngFor="let jogo of getJogos(campeonato)" class="tr-jogo">\n                                        <td>\n                                            <div class="times">{{jogo.casa}} x {{jogo.fora}}</div>\n                                            <div class="data">\n                                                {{jogo.data.split(\'-\').reverse().join(\'/\').substr(0, 5)}} às\n                                                {{jogo.hora.substr(0, 5)}}\n                                            </div>\n                                        </td>\n                                        <td *ngFor="let c of getCotacoesPrincipais()" text-center\n                                            (click)="apostar(jogo, \'90\', c)">\n                                            <div class="btn-cotacao"\n                                                 [ngClass]="{active: jogo.apostaEm == \'90\' + c.campo}">\n                                                {{jogo.cotacoes[\'90\'][c.campo].toFixed(2)}}\n                                            </div>\n                                        </td>\n                                        <td text-center (click)="maisCotacoes(jogo)">\n                                            <div class="btn-cotacao outras" [ngClass]="{active: jogo.outras}">\n                                                +{{countCotacoes(jogo)}}\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\aposta\aposta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_aposta_aposta__["a" /* ApostaProvider */]])
    ], ApostaPage);
    return ApostaPage;
}());

//# sourceMappingURL=aposta.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aposta_aposta__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, loadCtrl, platform, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.logotipo = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].logotipo;
        this.background = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].background;
        this.checkUsuario();
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.checkUsuario = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__app_global__["b" /* http */]
            .get('/user/dados')
            .then(function (response) {
            var j = response.data;
            if (j.result == 1) {
                __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].user = j.user;
                _this.menuCtrl.enable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__aposta_aposta__["a" /* ApostaPage */]);
            }
        })
            .catch(function () {
            // Não faça nada
        });
    };
    LoginPage.prototype.entrar = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Autenticando...',
        });
        load.present();
        __WEBPACK_IMPORTED_MODULE_2__app_global__["b" /* http */]
            .post('/user/login', {
            username: this.username,
            password: this.password,
        })
            .then(function (response) {
            var j = response.data;
            if (j.result == 1) {
                __WEBPACK_IMPORTED_MODULE_2__app_global__["b" /* http */].defaults.headers.appToken = j.appToken;
                window.localStorage.setItem('appToken', j.appToken);
                __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].user = j.user;
                _this.menuCtrl.enable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__aposta_aposta__["a" /* ApostaPage */]);
            }
            else {
                _this.alertCtrl.create({
                    title: 'Error!',
                    message: j.message,
                }).present();
            }
        })
            .catch(function (e) {
            console.log(e);
        })
            .then(function () {
            load.dismiss();
        });
    };
    LoginPage.prototype.sair = function () {
        this.platform.exitApp();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\ionic\LWApostasAPP\src\pages\login\login.html"*/'<ion-content center>\n\n    <div class="background" [style.background-image]="\'url(\'+background+\')\'"></div>\n\n    <ion-grid padding-top>\n        <ion-row justify-content-center>\n            <ion-col col-auto>\n                <img [src]="logotipo" class="brand" height="65"/>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n        <ion-row align-items-center justify-content-center>\n\n            <ion-col col-lg-4 col-md-4 col-12>\n\n                <ion-list no-border>\n\n                    <ion-item no-border>\n                        <ion-label stacked>Username</ion-label>\n                        <ion-input type="text" [(ngModel)]="username"></ion-input>\n                    </ion-item>\n\n                    <ion-item no-border>\n                        <ion-label stacked>Password</ion-label>\n                        <ion-input type="password" [(ngModel)]="password"></ion-input>\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n            <ion-col col-12></ion-col>\n            <ion-col col-lg-4 col-md-4 col-12>\n                <ion-row>\n                    <ion-col col-5>\n                        <button ion-button color="light" block (click)="sair()">\n                            Sair\n                        </button>\n                    </ion-col>\n                    <ion-col col-7>\n                        <button ion-button block (click)="entrar()">\n                            Entrar\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"G:\ionic\LWApostasAPP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApostaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApostaProvider = /** @class */ (function () {
    function ApostaProvider() {
    }
    /**
     * Lista de jogos selecionados
     * @returns {Jogo[]}
     */
    ApostaProvider.prototype.getJogos = function () {
        var jogos = [];
        __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].campeonatos.forEach(function (c) {
            c.jogos.forEach(function (j) {
                if (j.cotacao)
                    jogos.push(j);
            });
        });
        return jogos;
    };
    /**
     * Valor apostado
     * @returns {number}
     */
    ApostaProvider.prototype.getValor = function () {
        var valor = parseFloat(this.valor);
        if (valor > 0) {
            return valor;
        }
        else {
            return 0;
        }
    };
    /**
     * Valor da cotação
     * @returns {number}
     */
    ApostaProvider.prototype.getCotacao = function () {
        var jogos = this.getJogos();
        if (jogos.length) {
            var cotacao_1 = 1;
            jogos.forEach(function (j) {
                cotacao_1 *= j.cotacao.valor;
            });
            return Math.min(cotacao_1, __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].cotacaoMax);
        }
        else {
            return 0;
        }
    };
    /**
     * Prêmio da aposta
     * @returns {number}
     */
    ApostaProvider.prototype.getPremio = function () {
        var cotacao = this.getCotacao();
        var valor = this.getValor();
        var premio = cotacao * valor;
        return Math.min(premio, __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].retornoMaximo);
    };
    ApostaProvider.prototype.getValues = function () {
        var values = {
            cliente: this.cliente,
            valor: this.valor,
            jogos: [],
        };
        this.getJogos().forEach(function (j) {
            values.jogos.push({
                jogo: j.id,
                cotacao: j.cotacao.cotacao.campo,
                tempo: j.cotacao.tempo,
            });
        });
        return values;
    };
    ApostaProvider.prototype.limpaAposta = function () {
        this.cliente = '';
        this.valor = '0';
        this.limpaJogos();
    };
    ApostaProvider.prototype.limpaJogos = function (jogo) {
        if (jogo) {
            jogo.cotacao = null;
        }
        else {
            this.getJogos().forEach(function (j) {
                j.cotacao = null;
            });
        }
    };
    ApostaProvider.prototype.validarAposta = function () {
        if (this.getJogos().length < __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].minJogos) {
            return {
                title: "Selecione mais jogos",
                message: 'A aposta deve conter no mínimo ' + __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].minJogos + ' jogos!',
            };
        }
        else if (this.getCotacao() < __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].cotacaoMin) {
            return {
                title: "Cotação inválida",
                message: 'A aposta deve atingir uma cotação mínima de: ' + __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].cotacaoMin.toFixed(2),
            };
        }
        else if (this.getValor() < __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].apostaMin) {
            return {
                title: "Valor inválido",
                message: 'Aposta mínima de R$ ' + __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].apostaMin.toFixed(2).replace('.', ','),
            };
        }
        else if (this.getValor() > __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].apostaMax) {
            return {
                title: "Valor inválido",
                message: 'Aposta máxima de R$ ' + __WEBPACK_IMPORTED_MODULE_1__app_global__["a" /* global */].apostaMax.toFixed(2).replace('.', ','),
            };
        }
        return true;
    };
    ApostaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApostaProvider);
    return ApostaProvider;
}());

//# sourceMappingURL=aposta.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map
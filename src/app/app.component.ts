import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Validator, ValidatorFn, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  @ViewChild('sablon', {static: true}) sablon: ElementRef;
  generatedHtml;

  selectedCartType;
  selectedBrand;
  selectedTvType;
  selectedTvSize;
  public CartType = null;
  public Brand = null;
  public TvType = null;
  public TvSize = null;
  public modelValue = '';
  public tvFeature = '';
  public cartCode = '';
  public panelCode = '';
  public productCode = '';

  public CardCodes = [];

  public CartTypes = [
    { id: 1, name: 'BESLEME KARTI', nameEng: 'POWER BOARD' },
    { id: 2, name: 'ANAKARTI', nameEng: 'MAINBOARD' },
    { id: 3, name: 'İNVERTÖR KARTI', nameEng: 'BACKLIGHT INVERTER' },
    { id: 4, name: 'Y-SUS KARTI', nameEng: 'Y-MAIN BOARD' },
    { id: 5, name: 'Z-SUS KARTI', nameEng: 'X-MAIN BOARD' },
    { id: 6, name: 'T-CON KARTI', nameEng: 'T-CON (LOGIC) BOARD' },
    { id: 7, name: 'PANEL LEDLERİ', nameEng: 'LED BACKLIGHT STRIPS' },
    { id: 8, name: 'LED ÇUBUK', nameEng: 'LED BAR' },
    { id: 9, name: 'LED SÜRÜCÜ KARTI', nameEng: 'LED DRIVER BOARD' },
    { id: 10, name: 'BUFFER KARTI', nameEng: 'BUFFER BOARD' },
  ]

  public Brands = [
    { id: 1, name: 'LG', fullName: 'LG ELECTRONICS' },
    { id: 2, name: 'SAMSUNG', fullName: 'SAMSUNG ELECTRONICS' },
    { id: 3, name: 'BEKO', fullName: 'BEKO ELECTRONICS' },
    { id: 4, name: 'ARÇELİK', fullName: 'ARÇELİK AŞ' },
    { id: 5, name: 'PHILIPS', fullName: 'PHILIPS ELECTRONICS' },
    { id: 6, name: 'VESTEL', fullName: 'VESTEL ELECTRONICS' },
    { id: 7, name: 'SUNNY', fullName: 'SUNNY ELECTRONICS' },
    { id: 8, name: 'TOSHIBA', fullName: 'TOSHIBA ELECTRONICS' },
    { id: 9, name: 'SONY', fullName: 'SONY ELECTRONICS' },
    { id: 10, name: 'SEG', fullName: 'SEG ELECTRONICS' },
    { id: 11, name: 'REGAL', fullName: 'REGAL ELECTRONICS' },
    { id: 12, name: 'AXEN', fullName: 'AXEN ELECTRONICS' },

  ]

  public TvSizes = [
    { id: 1, size: '15"', screen: '38 EKRAN' },
    { id: 2, size: '17"', screen: '43 EKRAN' },
    { id: 3, size: '19"', screen: '48 EKRAN' },
    { id: 4, size: '22"', screen: '55 EKRAN' },
    { id: 5, size: '23"', screen: '58 EKRAN' },
    { id: 6, size: '26"', screen: '66 EKRAN' },
    { id: 7, size: '32"', screen: '82 EKRAN' },
    { id: 8, size: '37"', screen: '94 EKRAN' },
    { id: 9, size: '39"', screen: '99 EKRAN' },
    { id: 10, size: '40"', screen: '102 EKRAN' },
    { id: 11, size: '42"', screen: '106 EKRAN' },
    { id: 12, size: '43"', screen: '109 EKRAN' },
    { id: 13, size: '46"', screen: '117 EKRAN' },
    { id: 14, size: '48"', screen: '122 EKRAN' },
    { id: 15, size: '49"', screen: '124 EKRAN' },
    { id: 16, size: '50"', screen: '127 EKRAN' },
    { id: 17, size: '55"', screen: '139 EKRAN' },
    { id: 18, size: '60"', screen: '152 EKRAN' },
    { id: 19, size: '75"', screen: '190 EKRAN' },
  ]

  public TvTypes = [
    { id: 1, name: 'LED', nameEng: 'LED' },
    { id: 2, name: 'LCD', nameEng: 'LCD' },
    { id: 3, name: 'PLAZMA', nameEng: 'PLASMA' },
  ]

  isNullorBlank(value) {
    return value == '' || value === null ? true : false
  }

  splitString(str){
    if(str == undefined || str == null) return '';
    return str.trim().split(' ').join(', ');
  }

  changeCartType(event) {
    const { value } = event.target;
    if(value == null) {
      this.selectedCartType = null;
      return
    }
    this.selectedCartType = this.CartTypes.find(item => item.id == value)
  }

  changeBrand(event) {
    const { value } = event.target;
    if(value == null) {
      this.selectedBrand = null;
      return
    }
    this.selectedBrand = this.Brands.find(item => item.id == value)
  }

  changeTvType(event) {
    const { value } = event.target;
    if(value == null) {
      this.selectedTvType = null;
      return
    }
    this.selectedTvType = this.TvTypes.find(item => item.id == value)
  }

  changeTvSize(event) {
    const { value } = event.target;
    if(value == null) {
      this.selectedTvSize = null;
      return
    }
    this.selectedTvSize = this.TvSizes.find(item => item.id == value)
  }

  addCardCode(value) {
    this.cartCode = '';
    if(this.CardCodes.indexOf(value) === -1) {
      this.CardCodes.push(value);
    }
  }

  removeCardCode(input, index) {
    this.CardCodes.splice(index, 1);
  }

  createHtml(form) {
    console.log(form);
    let outerHtml = this.sablon.nativeElement.outerHTML;
    this.generatedHtml = outerHtml.replace(/<\!--.*?-->/g, "");
  }

  copyHtml(codeTextElement) {
    codeTextElement.select();
    document.execCommand('copy');
    codeTextElement.setSelectionRange(0, 0);
  }

  clear(form :NgForm) {
    form.resetForm(form.value);
    this.CartType = null;
    this.Brand = null;
    this.TvType = null;
    this.TvSize = null;
    this.modelValue = '';
    this.tvFeature = '';
    this.cartCode = '';
    this.panelCode = '';
    this.productCode = '';

    this.CardCodes = []
    this.generatedHtml = undefined;
    this.selectedBrand = null;
    this.selectedCartType = null;
    this.selectedTvSize = null;
    this.selectedTvType = null
  }
}

import { VariablesConstant } from '../constants/variables.constant';
import { PAGE_SIZE_CONFIG, LIST_GIAOVIEN, LIST_BAIBAO, LIST_DETAI, LIST_SACH } from '../enums/variables.enum';


export function updatePageSizeConfig(key?:string, value?:number){
    var defaultSize = VariablesConstant.PAGE_SIZE;
    var conf = localStorage.getItem(PAGE_SIZE_CONFIG)
  
    if (conf === null || (conf && Object.keys(JSON.parse(conf)).length !== 4)){
      var config = {
        [LIST_GIAOVIEN]: defaultSize,
        [LIST_BAIBAO]: defaultSize,
        [LIST_DETAI]: defaultSize,
        [LIST_SACH]: defaultSize,
      }
  
      localStorage.setItem(PAGE_SIZE_CONFIG, JSON.stringify(config))
    }
    else {
      var current_config = JSON.parse(localStorage.getItem(PAGE_SIZE_CONFIG))
      current_config[key] = value
      localStorage.setItem(PAGE_SIZE_CONFIG, JSON.stringify(current_config))
    }
  }
import Config from '../config.json';
import { version } from '../../package.json';
import { getDataObject } from '@dgtx/coreui'
let CONFIG = {};
let _configLogin = {
  "app_name": "SIT",
  "contents": {
    "inform": "THÔNG BÁO TUYỂN DỤNG VỊ TRÍ",
    "inform1": "NHẬP DỮ LIỆU FULLTIME",
    "inform2": "LÀM VIỆC TẠI CÔNG TY QUẬN 12 TPHCM",
    "selectType": "Hình thức đăng ký",
    "buttonGoogle": "Mẫu đăng ký",
    "buttonFacebook": "Fan Page",
    "googleLink": "",
    "fackbookLink": ""
  },
  "footer": {
    "item1": {
      "item11": {
        "lengths": [
          "title",
          "mail",
          "hotlineOne"
        ],
        "title": "HR Support (Contract + Salary)",
        "mail": "hr@digi-texx.vn",
        "hotlineOne": "0902518218",
        "hotlineTwo": ""
      },
      "item12": {
        "lengths": [
          "title",
          "mail",
          "hotlineOne",
          "hotlineTwo"
        ],
        "title": "Project Support",
        "mail": "001_Question@digi-texx.vn",
        "hotlineOne": "+84 28 3715 5325 | Ext: 635",
        "hotlineTwo": "0908315474 | 0908303684"
      },
      "item13": {
        "lengths": [
          "title",
          "mail"
        ],
        "title": "Technical Support (Log in)",
        "mail": "001_Question@digi-texx.vn",
        "hotlineOne": "",
        "hotlineTwo": ""
      }
    },
    "item2": {
      "lengths": [
        "copyRight",
        "versions"
      ],
      "versions": "version: ",
      "copyRight": "Copyright: Digi-texx.vn"
    }
  }
}

try {
  if (typeof Config.configLogin === "string") {
    let data = JSON.parse(Config.configLogin);
    CONFIG = Object.assign({}, data)
  }
  else if (typeof Config.configLogin === "object") {
    CONFIG = Object.assign({}, Config.configLogin)
  }
} catch (error) {

}

export const ELROND_ENV = Config.ELROND_ENV;
export const API_ENDPOINT = Config.API_ENDPOINT;
export const UAC_ENDPOINT = Config.UAC_ENDPOINT;
export const OAUTH_ENDPOINT = Config.OAUTH_ENDPOINT;
export const API_LOOKUP = Config.API_LOOKUP;
export const API_OMR = Config.API_OMR;
export const API_OCR = Config.API_OCR;
export const SOCKET = Config.SOCKET;
export const QC_NUMBER_TASK_CLAIM = Config.QC_NUMBER_TASK_CLAIM;
export const REGISTER_PAGE = getDataObject('REGISTER_PAGE', Config);

export const APP_VERSION = version;
export const LOGIN_APP_NAME = getDataObject('app_name', CONFIG) || _configLogin.app_name;
export const LOGIN_CONTENT = getDataObject('contents', CONFIG) || _configLogin.contents;
export const LOGIN_FO0TER_ITEM1 = getDataObject('footer.item1', CONFIG) || _configLogin.footer.item1;
export const LOGIN_FO0TER_ITEM2 = getDataObject('footer.item2', CONFIG) || _configLogin.footer.item2;
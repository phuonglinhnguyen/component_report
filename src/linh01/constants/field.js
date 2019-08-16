// export const REGEX_EMPTY = "/^(\w+\S+)$" //eslint-disable-line
export const REGEX_EMPTY = /^(?!\s*$).+/ //eslint-disable-line

export const REGEX_PHONE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im //eslint-disable-line

export const REGEX_NUMBER = /^[0-9]*$/gm //eslint-disable-line

export const REGEX_NUMBER_ID = /^[0-9]*$/gm //eslint-disable-line 

export const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const REGEX_CHARACTERS = /^[A-Z]+$/i
export const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// This regex will enforce these rules REGEX_PASSWORD:
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)

export const REGEX_CHARACTERS_UTF8 = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +"ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/
// ^                           # start-of-string
//     [
//     a-zA-Z_                 # contains alphabets and underscore
//     ÀÁÂ...ỵỷỹ               # characters in Vietnamese
//     \\s                     # whitespace
//     ]+                      # must contains one or more characters
// $                           # end-of-string


export const KEY_FIELD_TYPE = "type";
export const KEY_FIELD_TYPE_DATE = "date";
export const KEY_FIELD_TYPE_COMBOBOX = "combobox";
export const KEY_FIELD_TYPE_IMAGE = "image";
export const KEY_FIELD_LIST_VALUES = "values";
export const KEY_FIELD_TYPE_ID = "id";
export const KEY_FIELD_TYPE_PASSWORD = "password";

export const KEY_FIELD_RULES = "rules";
export const FIELD_RULE_PHONE_NUMBER = "rules_phone_number";
export const FIELD_RULE_EMPTY = "rules_empty";
export const FIELD_RULE_EMAIL = "rules_email";
export const FIELD_RULE_NUMBER = "rules_number";
export const FIELD_RULE_NUMBER_ID = "rules_number_id";

export const KEY_FIELD_RULE_VALUE = "rules_value";
export const KEY_FIELD_RULE_VIEW = "rules_view";
export const KEY_FIELD_RULE_API = "rules_rulesAPI";
export const KEY_FIELD_RULE_SHOW_TEXT= "rules_showText";
export const KEY_FIELD_RULE_ERROR= "rules_error";
export const KEY_FIELD_RULE_AUTO_FOCUS= "rules_autoFocus";
export const KEY_FIELD_RULE_COMPARE= "rules_compare";
export const KEY_FIELD_RULE_SIZE_LENGTH= "rules_size_length";
export const KEY_FIELD_RULE_CHARACTERS= "rules_characters";
export const KEY_FIELD_RULE_CHARACTERS_UTF8= "rules_characters_utf8";
export const KEY_FIELD_RULE_18_PLUS= "rules_18_plus";
export const KEY_FIELD_RULE_IMAGE= "rules_image";
export const KEY_FIELD_RULE_PASSWORD= "rules_password";
export const KEY_FIELD_RULE_15_ID_CARD_NUMBER= "rules_15_id_card";
export const KEY_FIELD_RULE_DATETIME= "rules_datetime";

export const KEY_EMAIL = "email";

export const KEY_INDEX_CONTENT = "index_content";
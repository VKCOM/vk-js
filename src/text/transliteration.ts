import { Replacer } from '../lib/replacer';

/**
 * Словарь транслитерации ВКонтакте из русского в английский.
 */
export const transliterationDictVKRusEng: Record<string, string> = {
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  '\xa5': 'G',
  'Д': 'D',
  'Е': 'E',
  'Є': 'Ye',
  'Ё': 'Yo',
  'Ж': 'Zh',
  'З': 'Z',
  'И': 'I',
  'Ї': 'Yi',
  '\xb2': 'I',
  'Й': 'J',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ў': 'W',
  'Ф': 'F',
  'Х': 'Kh',
  'Ц': 'Ts',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Sch',
  'Ы': 'Y',
  'Ый': 'Y',
  'Э': 'E',
  'Ю': 'Yu',
  'Я': 'Ya',

  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  '\xb4': 'g',
  'д': 'd',
  'е': 'e',
  'є': 'ye',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'ия': 'ia',
  'ий': 'y',
  'и': 'i',
  'й': 'y',
  'ї': 'yi',
  '\xb3': 'i',
  'кс': 'x',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ў': 'w',
  'ф': 'f',
  'х': 'kh',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'sch',
  'ъ': '',
  'ый': 'y',
  'ы': 'y',
  'ь': '',
  'ье': 'ye',
  'ьо': 'io',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',
};

/**
 * Словарь транслитерации ГОСТ 7.79-2000 (ISO 9-95) по по системе Б
 * (с использованием буквосочетаний) для русского языка.
 */
export const transliterationDictGostLetterCombinationsRu = {
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'Yo',
  'Ж': 'Zh',
  'З': 'Z',
  'И': 'I',
  'Й': 'J',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'X',
  'Ц': 'Cz',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Shh',
  'Ъ': '``',
  'Ы': 'Y`',
  'Ь': '`',
  'Э': 'E`',
  'Ю': 'Yu',
  'Я': 'Ya',

  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'j',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'x',
  'ц': 'cz',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shh',
  'ъ': '``',
  'ы': 'y`',
  'ь': '`',
  'э': 'e`',
  'ю': 'yu',
  'я': 'ya',

  '’': `'`, // апостроф
  'Ѣ': 'ye', // ять
  'Ѳ': 'fh', //	фита
  'Ѵ': 'yh', // ижица
};

/**
 * Транслитератор, для передачи знаков одной письменности знаками другой.
 * По умолчанию переводит из русской кириллицы в латиницу по правилам ВКонтакте
 */
export class Transliterator {
  private readonly replacer: Replacer;

  constructor(dict: Record<string, string> = transliterationDictVKRusEng) {
    this.replacer = new Replacer(dict);
  }

  /**
   * Производит транслитерацию текста
   */
  transliteration(text: string): string {
    return this.replacer.replace(text);
  }
}

/**
 * Транслитератор ВКонтакте
 */
export const transliteratorVKRusEng = /*#__PURE__*/ new Transliterator(transliterationDictVKRusEng);

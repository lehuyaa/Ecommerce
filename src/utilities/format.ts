import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import {REGEX_SALARY} from './staticData';

dayjs.locale('ja');
export const changeLocale = (locale: string): void => {
  dayjs.locale(locale);
};
export const toLocalStringTime = (date: Date): string => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export const formatStringCurrency = (currency: string) => {
  const number = currency.substr(0, currency.length - 2);
  return Number(number.replace(REGEX_SALARY, ''));
};

export const caculatorTotalCart = (arrayProduct: any[]) => {
  const totalPrice = arrayProduct.reduce((total, item) => {
    return total + item?.quantity * item?.productPrice;
  }, 0);
  return totalPrice;
};

export const formatCurrencyVND = (currency: number) => {
  const currencyNumber = currency.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return currencyNumber;
};

export const convertRate = (rate: number) => {
    if (rate < 1000) {
      return 1;
    } 
    if (rate > 1000 && rate< 2000) {
      return 2;
    }
    if (rate>2000&&rate<3000) {
      return 3;
    }
    if (rate>3000 && rate < 4000) {
      return 4;
    }
    return 5;
}
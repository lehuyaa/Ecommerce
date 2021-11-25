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

export const caculatorTotalCart = arrayProduct => {
  const totalPrice = arrayProduct.reduce((total, item) => {
    return total + item?.quantity * formatStringCurrency(item?.productPrice);
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

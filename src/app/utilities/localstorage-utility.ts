import * as CryptoJS from 'crypto-js';

const CRYPTO_KEY = 'SMRT';

export class LocalstorageUtility {
  private static _ls: LocalstorageUtility | null = null;
  private _cryptoKey: string | null = null;

  private get cryptoKey(): string {
    if (!this._cryptoKey) {
      this._cryptoKey = localStorage.getItem(CRYPTO_KEY);
    }

    return this._cryptoKey as string;
  }

  private set cryptoKey(value: string) {
    this._cryptoKey = value;
    localStorage.setItem(CRYPTO_KEY, value);
  }

  constructor() {}

  public static getInstance(): LocalstorageUtility {
    if (!this._ls) {
      this._ls = new LocalstorageUtility();
    }
    return this._ls;
  }

  clear(): void {
    localStorage.clear();
  }

  setKey(cryptoKey: string): void {
    this.cryptoKey = cryptoKey;
  }

  /**
   * Salva il valore passato nel localstorage e a seconda del flag encrypt cripta o meno il valore
   * @param key Chiave nel localstorage
   * @param value Valore da salvare
   * @param encrypt Flag che indica se criptare o meno il valore
   */
  setItem(key: string, value: any, encrypt = false): void {
    if (encrypt) {
      localStorage.setItem(
        key,
        CryptoJS.AES.encrypt(JSON.stringify(value), this.cryptoKey).toString()
      );
    } else {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  getItem(key: string, encrypted = false): any {
    const stringData = localStorage.getItem(key);

    if (!stringData) {
      return null;
    }
    if (encrypted) {
      const bytes = CryptoJS.AES.decrypt(stringData, this.cryptoKey);
      const jsonData = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(jsonData);
    } else {
      return stringData;
    }
  }
}

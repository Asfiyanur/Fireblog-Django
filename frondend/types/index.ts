// fonksiyon dosyası old için ts yazdık yolu da kısaltmak için index ismini verdik

export type RegisterType = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password2: string;
};

export type ErrorType = {
  username: string[];
  email: string[];
  password: string[];
  password2: string[];
};

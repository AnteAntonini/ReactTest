export type TUsersResponse = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: TUserAddress;
  company: TUserCompany;
};

type TUserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type TUserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

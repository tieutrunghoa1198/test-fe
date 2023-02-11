export interface Province {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: District[];
}

export interface District {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  province_code: number;
  wards: Ward[];
}

export interface Ward {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: string;
}

export interface SearchResult {
  name: string;
  code: number;
  matches: {
    [key: string]: number[];
  };
}

export interface Ad_type {
  Basic_information: {
    Data: string;
    Deal_type: string;
    Property_type: string;
    Rooms: number;
    Residential_complex: string;
    Series: 103 | 104 | 105 | 106 | string;
    Ceiling_height: number;
    Communications: string;
    Building_type: string;
    Year_of_commissioning: number;
    Floor: number;
    Square: number;
    General: string;
    Residential: string;
    Kitchen: string;
    Heating: string;
    bathroom: string;
    Furniture: string;
    State: string;
  };
  characteristics: {
    Telephone: boolean;
    Internet_wifi: boolean;
    intercom: boolean;
    Balcony: boolean;
    Parking: boolean;
    Security: boolean;
    CCTV: boolean;
    Playground: boolean;
    PVC_windows: boolean;
    Improved_layout: boolean;
    Convenient_for_business: boolean;
    non_corner: boolean;
    quiet_yard: boolean;
    closed_yard: boolean;
    AC: boolean;
    storeroom: boolean;
    Wardrobe: boolean;
    New_plumbing: boolean;
    good_neighbors: boolean;
  };
  Location: {
    Region: string;
    City: string;
    Area: string;
    Intersection_with: string;
    Address: {
      street: string;
      building: string;
      apartment: string;
    };
  };
  Price_and_terms: {
    Price_on_1m: number;
    total_price: number;
    Installment_option: boolean;
    Installment_mortgage: boolean;
    Installment_exchange: boolean;
  };
  Photos: [];
  Ad_text: string;
}

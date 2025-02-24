// Service interface
export interface Service {
  service_id: string;
  inspection_date: string;
  mileage_km: string;
  service_type: string;
  checks: string[];
  comments: string;
  cost_eur: string;
  next_service: {
    mileage_km: string;
    date: string;
  };
}

// Insurance interface
export interface Insurance {
  insurance_id: string;
  last_insurance_date: string;
  next_renewal_date: string;
  insurance_type: string;
  insurance_company: string;
  glass_breakage: boolean;
  weather_conditions: boolean;
  fire: boolean;
  riots: boolean;
  theft: boolean;
  civil_liability: boolean;
  accident_assistance: boolean;
  legal_protection: boolean;
  status: string;
}

// KTEO interface
export interface Kteo {
  kteo_id: string;
  kteo_last_date: string;
  kteo_next_date: string;
  comments: string;
  kteo_name: string;
}

// Vehicle interface
export interface Vehicle {
  brand: string;
  model: string;
  year: string;
  body_type: string;
  vin: string;
  fuel_type: string;
  engine_capacity_cc: string;
  horsepower_hp: string;
  transmission_type: string;
  fuel_consumption_l_per_100km: string;
}

// Main data structure
export interface VehicleData {
  vehicle: Vehicle;
  services: Service[];
  insurance: Insurance[];
  kteo: Kteo[];
}

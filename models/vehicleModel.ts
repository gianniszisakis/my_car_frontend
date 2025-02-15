// Service interface
export interface Service {
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

// Vehicle interface
export interface Vehicle {
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
}

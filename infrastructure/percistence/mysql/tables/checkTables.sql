// Crear tabla de Usuarios
CREATE TABLE IF NOT EXISTS Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_type VARCHAR(3),
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(200) NOT NULL,
    status VARCHAR(20) DEFAULT 'Active'
)           

// Crear tabla de Vehículos
CREATE TABLE IF NOT EXISTS Vehicles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    plate_number VARCHAR(20) NOT NULL,
    brand VARCHAR(50),
    model VARCHAR(50),
    cargo_capacity DECIMAL(10, 2),
    body_type VARCHAR(50),
    owner INT,
    driver INT,
    location VARCHAR(50),
    status VARCHAR(50)
)

// Crear tabla de Solicitudes de Carga
CREATE TABLE IF NOT EXISTS CargoRequests(
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_date DATE,
    cargo_owner_id INT,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    dimensions VARCHAR(50),
    weight DECIMAL(10, 2),
    insured_value DECIMAL(10, 2),
    packaging VARCHAR(50),
)

// Crear tabla de Aplicar a Solicitudes de Carga
CREATE TABLE IF NOT EXISTS ApplyRequest(
    id INT AUTO_INCREMENT PRIMARY KEY,
    idRequest INT NOT NULL,
    location VARCHAR(50) NOT NULL,
    cargoCapacity INT NOT NULL,
    status VARCHAR(50) NOT NULL
)

export interface ApplyRequest {
    id: number
    idRequest: number
    location: string
    cargoCapacity: number
    status: 'AVAILABLE' | 'UNAVAILABLE'
}

// Crear tabla de Remisiones
CREATE TABLE IF NOT EXISTS DispatchNotes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    pickup_datetime DATETIME,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    truck_plate_number VARCHAR(20),
    driver_name VARCHAR(100),
    route VARCHAR(200)
)

// Crear tabla de Rutas de Envío
CREATE TABLE IF NOT EXISTS ShippingRoutes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    distance_km DECIMAL(10, 2),
    estimated_duration TIME
)
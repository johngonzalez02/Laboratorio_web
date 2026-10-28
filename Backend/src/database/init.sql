-- Tabla de estudiantes
CREATE TABLE IF NOT EXISTS students_example (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL
);

-- Tabla de cursos
CREATE TABLE IF NOT EXISTS courses_example (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    creditos INTEGER NOT NULL CHECK (creditos > 0)
);

-- Tabla intermedia para la relación N:M
CREATE TABLE IF NOT EXISTS enrollments_example (
    id SERIAL PRIMARY KEY,
    estudiante_id INTEGER NOT NULL REFERENCES students_example(id) ON DELETE CASCADE,
    curso_id INTEGER NOT NULL REFERENCES courses_example(id) ON DELETE CASCADE,
    fecha_matricula DATE NOT NULL DEFAULT CURRENT_DATE,
    nota_final NUMERIC(3, 1) CHECK (nota_final BETWEEN 0 AND 5),
    UNIQUE (estudiante_id, curso_id)
);

-- Tabla de teatros
CREATE TABLE IF NOT EXISTS venues (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ciudad VARCHAR(80) NOT NULL,
    capacidad INTEGER NOT NULL CHECK (capacidad > 0)
);

-- Tabla de eventos
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    venue_id INTEGER NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
    fecha_inicio TIMESTAMP NOT NULL,
    precio INTEGER NOT NULL CHECK (precio >= 0),
    estado VARCHAR(20) NOT NULL
);

-- Tabla de clientes
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(120) UNIQUE NOT NULL
);

-- Tabla de reservas
CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
    event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    fecha TIMESTAMP NOT NULL DEFAULT NOW(),
    entradas INTEGER NOT NULL CHECK (entradas > 0),
    total INTEGER NOT NULL CHECK (total >= 0),
    estado VARCHAR(20) NOT NULL
);

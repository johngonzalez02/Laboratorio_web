-- Estudiantes
INSERT INTO students_example (nombre, correo) 
VALUES
    ('Carlos Ramirez', 'carlos.example@example.com'),
    ('Laura Gomez', 'laura.example@example.com'),
    ('Andres Martinez', 'andres.example@example.com');

-- Cursos
INSERT INTO courses_example (nombre, creditos) 
VALUES
    ('Bases de Datos', 3),
    ('Programacion Web', 4),
    ('Arquitectura de Software', 3);

-- Matrículas
INSERT INTO enrollments_example (estudiante_id, curso_id, fecha_matricula, nota_final)
VALUES
    (1, 1, CURRENT_DATE, 4.5),
    (1, 2, CURRENT_DATE, 4.2),
    (2, 1, CURRENT_DATE, 3.8),
    (2, 3, CURRENT_DATE, 4.6),
    (3, 2, CURRENT_DATE, 4.0);

-- Teatros
INSERT INTO venues (nombre, ciudad, capacidad)
VALUES
    ('Coliseo de Ferias', 'Tuluá', 5000),
    ('Teatro Municipal', 'Cali', 1200),
    ('Teatro Jorge Isaacs', 'Cali', 700);

-- Eventos
INSERT INTO events (nombre, descripcion, venue_id, fecha_inicio, precio, estado)
VALUES
    ('Festival de Música del Valle', 'Artistas nacionales y locales.', 1, '2026-11-15 18:00', 85000, 'Programado'),
    ('Concierto Sinfónico de Primavera', 'Orquesta Sinfónica del Valle.', 2, '2026-11-20 19:00', 65000, 'En Boleteria'),
    ('Noche de Jazz', 'Velada íntima de jazz.', 3, '2026-12-05 20:00', 70000, 'En Boleteria');

-- Clientes
INSERT INTO customers (nombre, correo)
VALUES
    ('Stiven Gonzalez', 'stiven.gonzalez@correo.com'),
    ('Laura Gómez', 'laura.gomez@correo.com');

-- Reservas
INSERT INTO reservations (customer_id, event_id, fecha, entradas, total, estado)
VALUES
    (1, 2, '2026-10-02 10:15', 2, 130000, 'Confirmada'),
    (1, 1, '2026-10-05 16:40', 4, 340000, 'Reservada'),
    (2, 3, '2026-10-08 14:05', 3, 210000, 'Reservada'),
    (2, 1, '2026-10-09 11:30', 2, 170000, 'Cancelada');

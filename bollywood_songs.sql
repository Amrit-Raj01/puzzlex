CREATE TABLE songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    singer VARCHAR(100) NOT NULL,
    movie VARCHAR(100),
    mood VARCHAR(50) NOT NULL
);

-- Sample Bollywood inserts
INSERT INTO songs (title, singer, movie, mood) VALUES
('Badtameez Dil', 'Benny Dayal', 'Yeh Jawaani Hai Deewani', 'Happy'),
('Tum Hi Ho', 'Arijit Singh', 'Aashiqui 2', 'Sad');

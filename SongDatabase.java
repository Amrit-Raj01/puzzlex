package service;

import java.util.*;
import model.Song;

public class SongDatabase {
    private List<Song> songs;

    public SongDatabase() {
        songs = new ArrayList<>();
        populateSongs();
    }

    private void populateSongs() {
        songs.add(new Song("Tum Hi Ho", "Arijit Singh", "Romantic"));
        songs.add(new Song("Tera Ban Jaunga", "Akhil Sachdeva", "Romantic"));
        songs.add(new Song("Zinda", "Siddharth Mahadevan", "Energetic"));
        songs.add(new Song("Kar Har Maidan Fateh", "Shreya Ghoshal", "Energetic"));
        songs.add(new Song("Channa Mereya", "Arijit Singh", "Sad"));
        songs.add(new Song("Tujhe Bhula Diya", "Mohit Chauhan", "Sad"));
        songs.add(new Song("Gallan Goodiyan", "Various Artists", "Happy"));
        songs.add(new Song("Nashe Si Chadh Gayi", "Arijit Singh", "Happy"));
    }

    public List<Song> getSongsByMood(String mood) {
        List<Song> result = new ArrayList<>();
        for (Song song : songs) {
            if (song.getMood().equalsIgnoreCase(mood)) {
                result.add(song);
            }
        }
        return result;
    }
}

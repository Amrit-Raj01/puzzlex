package database;

import model.Song;
import java.util.*;

public class BollywoodSongDatabase {
    private final Map<String, List<Song>> songsByMood;
    
    public BollywoodSongDatabase() {
        songsByMood = new HashMap<>();
        initializeDatabase();
    }
    
    private void initializeDatabase() {
        // All Bollywood song entries here
    }
}

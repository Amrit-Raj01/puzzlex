package service;

import java.util.*;
import model.User;
import model.Song;

public class RecommendationService {
    private SongDatabase db;

    public RecommendationService(SongDatabase db) {
        this.db = db;
    }

    public List<Song> recommend(User user) {
        return db.getSongsByMood(user.getMood());
    }
}

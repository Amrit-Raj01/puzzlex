package model;

public class Song {
    private String title;
    private String artist;
    private String mood;

    public Song(String title, String artist, String mood) {
        this.title = title;
        this.artist = artist;
        this.mood = mood;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public String getMood() {
        return mood;
    }
}
